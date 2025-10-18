import pandas as pd
import json
import os

def read_battery_excel(file_path):
    """
    Read battery data from Excel file and convert to JSON format
    """
    try:
        # Read the Excel file
        df = pd.read_excel(file_path)
        
        # Convert to list of dictionaries
        battery_data = df.to_dict('records')
        
        # Process the data to match compatibility database format
        processed_data = []
        for i, row in enumerate(battery_data):
            # Create a new entry in compatibility format
            entry = {
                "id": 100 + i,  # Start from 100 to avoid conflicts
                "title": row.get('Title', f"Battery {i+1}"),
                "category": "battery",
                "brand": row.get('Brand', 'universal').lower(),
                "description": row.get('Description', 'Battery for mobile devices'),
                "image": "https://via.placeholder.com/300x200/96A78D/FFFFFF?text=Battery",
                "images": [
                    "https://via.placeholder.com/500x400/96A78D/FFFFFF?text=Battery+1",
                    "https://via.placeholder.com/500x400/B6CEB4/FFFFFF?text=Battery+2"
                ],
                "compatibility": [],
                "specifications": {},
                "combos": []
            }
            
            # Process compatibility models (assuming comma-separated in Excel)
            compatibility_str = row.get('Compatibility', '')
            if isinstance(compatibility_str, str):
                entry["compatibility"] = [model.strip() for model in compatibility_str.split(',') if model.strip()]
            
            # Process specifications
            entry["specifications"] = {
                "Capacity": row.get('Capacity', 'Unknown'),
                "Voltage": row.get('Voltage', 'Unknown'),
                "Type": row.get('Type', 'Unknown'),
                "Cycle Life": row.get('Cycle Life', 'Unknown'),
                "Protection": row.get('Protection', 'Standard')
            }
            
            # Add to processed data
            processed_data.append(entry)
        
        return processed_data
    
    except Exception as e:
        print(f"Error reading Excel file: {e}")
        return []

def save_to_json(data, output_file):
    """
    Save data to JSON file
    """
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"Data saved to {output_file}")
    except Exception as e:
        print(f"Error saving JSON file: {e}")

def update_compatibility_js(new_data, js_file):
    """
    Update the compatibility.js file with new data
    """
    try:
        # Read the existing file
        with open(js_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find the compatibilityData array
        start_marker = "const compatibilityData = ["
        end_marker = "];"
        
        start_idx = content.find(start_marker)
        if start_idx == -1:
            print("Could not find compatibilityData array in file")
            return False
        
        start_idx += len(start_marker)
        end_idx = content.find(end_marker, start_idx)
        
        if end_idx == -1:
            print("Could not find end of compatibilityData array")
            return False
        
        # Extract existing data
        existing_data_str = content[start_idx:end_idx].strip()
        
        # Convert existing data to Python list
        # This is a simplified approach - in practice, you'd want to parse the JS properly
        existing_data_lines = existing_data_str.split('\n')
        
        # Format new data as JavaScript objects
        new_data_js = []
        for item in new_data:
            js_obj = format_js_object(item)
            new_data_js.append(js_obj)
        
        # Combine existing and new data
        all_data_js = existing_data_str + ",\n" + ",\n".join(new_data_js)
        
        # Replace the data in the file
        new_content = content[:start_idx] + "\n" + all_data_js + "\n" + content[end_idx:]
        
        # Write back to file
        with open(js_file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Updated {js_file} with {len(new_data)} new entries")
        return True
    
    except Exception as e:
        print(f"Error updating compatibility.js: {e}")
        return False

def format_js_object(obj):
    """
    Format a Python object as a JavaScript object string
    """
    def format_value(value):
        if isinstance(value, str):
            return f'"{value}"'
        elif isinstance(value, (int, float)):
            return str(value)
        elif isinstance(value, bool):
            return str(value).lower()
        elif isinstance(value, list):
            items = [format_value(item) for item in value]
            return f"[{', '.join(items)}]"
        elif isinstance(value, dict):
            items = [f'"{k}": {format_value(v)}' for k, v in value.items()]
            return f"{{ {', '.join(items)} }}"
        else:
            return 'null'
    
    items = []
    for key, value in obj.items():
        items.append(f'        "{key}": {format_value(value)}')
    
    return "{\n" + ",\n".join(items) + "\n    }"

# Main execution
if __name__ == "__main__":
    # File paths
    excel_file = r"C:\Users\Rakesh\OneDrive\Desktop\hardware list\Battery.xlsx"
    output_json = "battery_data.json"
    compatibility_js = "compatibility.js"
    
    # Check if file exists
    if not os.path.exists(excel_file):
        print(f"Excel file not found: {excel_file}")
        exit(1)
    
    # Read Excel data
    print("Reading Excel file...")
    battery_data = read_battery_excel(excel_file)
    
    if not battery_data:
        print("No data found in Excel file")
        exit(1)
    
    print(f"Found {len(battery_data)} battery entries")
    
    # Save to JSON
    save_to_json(battery_data, output_json)
    
    # Update compatibility.js
    print("Updating compatibility database...")
    success = update_compatibility_js(battery_data, compatibility_js)
    
    if success:
        print("✅ Successfully updated compatibility database!")
        print(f"Added {len(battery_data)} new battery entries")
    else:
        print("❌ Failed to update compatibility database")