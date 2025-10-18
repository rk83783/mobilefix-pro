# MobileFix Pro - Upload Functionality Guide

## Overview
The upload functionality allows you to add new battery compatibility data to the MobileFix Pro database using Excel files. This guide explains how to use both the web-based uploader and the Python script processor.

## Web-Based Upload (Frontend)

### How to Use
1. Navigate to the "Upload" page on the website
2. Either click "Browse Files" or drag and drop your Excel file
3. Click "Import Data" to process the file
4. The system will show progress and confirm when processing is complete

### Required Excel Format
Your Excel file should have the following columns:
- **Title**: Battery name
- **Brand**: Manufacturer (samsung, iphone, etc.)
- **Compatibility**: Comma-separated list of compatible models
- **Capacity**: Battery capacity (mAh)
- **Voltage**: Operating voltage
- **Type**: Battery type (Li-ion, Li-polymer)
- **Description**: Product description

### Sample Data Format
```
Title: Universal Li-ion Battery 4000mAh
Brand: universal
Compatibility: Redmi Note 10,Redmi Note 9,Mi 11
Capacity: 4000mAh
Voltage: 3.87V
Type: Li-ion
Description: High-capacity universal battery with advanced safety features
```

## Python Script Processor (Backend)

### How to Use
1. Ensure you have Python installed
2. Install required dependencies:
   ```bash
   pip install pandas openpyxl
   ```
3. Run the processor script:
   ```bash
   python process_battery_excel.py [excel_file] [output_json] [compatibility_js]
   ```

### Default File Paths
- Excel file: `C:\Users\Rakesh\OneDrive\Desktop\hardware list\Battery.xlsx`
- Output JSON: `battery_data.json`
- Compatibility JS: `compatibility.js`

### Example Usage
```bash
# Process with default files
python process_battery_excel.py

# Process with custom Excel file
python process_battery_excel.py "my_battery_data.xlsx"

# Process with custom files
python process_battery_excel.py "my_battery_data.xlsx" "output.json" "my_compatibility.js"
```

## Integration Notes
The web-based uploader currently simulates the upload process. In a production environment, you would need to:
1. Set up a backend server to receive uploaded files
2. Process the files using the Python script
3. Update the compatibility database in real-time

## Troubleshooting
- **File not found errors**: Ensure the Excel file path is correct
- **Format errors**: Check that your Excel file has the required columns
- **Processing errors**: Verify that the data in your Excel file is properly formatted

## Support
For assistance with the upload functionality, contact the MobileFix Pro support team.