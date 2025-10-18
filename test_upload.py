#!/usr/bin/env python3
"""
Test script for the upload functionality
This script tests the process_battery_excel.py script with a sample Excel file
"""

import pandas as pd
import os

def create_sample_excel():
    """Create a sample Excel file for testing"""
    # Sample data
    data = {
        'Title': [
            'Universal Li-ion Battery 4000mAh',
            'Samsung Galaxy Battery 3000mAh',
            'iPhone Replacement Battery'
        ],
        'Brand': ['universal', 'samsung', 'iphone'],
        'Compatibility': [
            'Redmi Note 10,Redmi Note 9,Mi 11',
            'Galaxy S21,Galaxy S20',
            'iPhone 12,iPhone 11,iPhone XR'
        ],
        'Capacity': ['4000mAh', '3000mAh', '2815mAh'],
        'Voltage': ['3.87V', '3.85V', '3.81V'],
        'Type': ['Li-ion', 'Li-polymer', 'Li-ion'],
        'Description': [
            'High-capacity universal battery with advanced safety features',
            'OEM quality battery for Samsung Galaxy devices',
            'Original quality battery for iPhone models'
        ]
    }
    
    # Create DataFrame
    df = pd.DataFrame(data)
    
    # Save to Excel
    excel_file = 'sample_battery_data.xlsx'
    df.to_excel(excel_file, index=False)
    print(f"✅ Created sample Excel file: {excel_file}")
    return excel_file

def test_processing():
    """Test the processing script"""
    print("🧪 Testing upload functionality...")
    
    # Create sample data
    excel_file = create_sample_excel()
    
    # Test the processing script
    try:
        import process_battery_excel
        
        # Read the Excel file
        battery_data = process_battery_excel.read_battery_excel(excel_file)
        
        if battery_data:
            print(f"✅ Successfully processed {len(battery_data)} battery entries")
            
            # Test saving to JSON
            json_success = process_battery_excel.save_to_json(battery_data, 'test_battery_data.json')
            if json_success:
                print("✅ JSON file created successfully")
            
            # Test formatting
            if battery_data:
                js_obj = process_battery_excel.format_js_object(battery_data[0])
                if js_obj:
                    print("✅ JavaScript object formatting works correctly")
            
            # Clean up test files
            if os.path.exists('test_battery_data.json'):
                os.remove('test_battery_data.json')
                print("🧹 Cleaned up test files")
                
        else:
            print("❌ Failed to process battery data")
            
    except Exception as e:
        print(f"❌ Error testing processing script: {e}")
    
    # Clean up sample Excel file
    if os.path.exists(excel_file):
        os.remove(excel_file)
        print("🧹 Cleaned up sample Excel file")

if __name__ == "__main__":
    test_processing()