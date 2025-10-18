// Upload functionality for Excel files
document.addEventListener('DOMContentLoaded', function() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const browseButton = document.getElementById('browseButton');
    const uploadButton = document.getElementById('uploadButton');
    const filePreview = document.getElementById('filePreview');
    const fileName = document.getElementById('fileName');
    const fileSize = document.getElementById('fileSize');
    const removeFile = document.getElementById('removeFile');
    const uploadProgress = document.getElementById('uploadProgress');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    
    let selectedFile = null;
    
    // Event listeners
    browseButton.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', handleFileSelect);
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('drop', handleDrop);
    removeFile.addEventListener('click', removeSelectedFile);
    uploadButton.addEventListener('click', processFile);
    
    // Handle file selection via browse button
    function handleFileSelect(e) {
        if (e.target.files.length > 0) {
            selectedFile = e.target.files[0];
            showFilePreview();
        }
    }
    
    // Handle drag over event
    function handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        uploadArea.classList.add('drag-over');
    }
    
    // Handle drop event
    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        uploadArea.classList.remove('drag-over');
        
        if (e.dataTransfer.files.length > 0) {
            selectedFile = e.dataTransfer.files[0];
            showFilePreview();
        }
    }
    
    // Show file preview
    function showFilePreview() {
        if (selectedFile) {
            fileName.textContent = selectedFile.name;
            fileSize.textContent = formatFileSize(selectedFile.size);
            filePreview.style.display = 'block';
            uploadArea.style.display = 'none';
            uploadButton.disabled = false;
        }
    }
    
    // Remove selected file
    function removeSelectedFile() {
        selectedFile = null;
        fileInput.value = '';
        filePreview.style.display = 'none';
        uploadArea.style.display = 'flex';
        uploadButton.disabled = true;
    }
    
    // Format file size
    function formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }
    
    // Process the selected file
    function processFile() {
        if (!selectedFile) return;
        
        // Show progress
        uploadProgress.style.display = 'block';
        uploadButton.disabled = true;
        progressText.textContent = 'Reading file...';
        
        // Simulate progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += 5;
            if (progress > 100) progress = 100;
            progressFill.style.width = progress + '%';
            progressText.textContent = progress < 30 ? 'Reading file...' : 
                                     progress < 60 ? 'Parsing data...' : 
                                     progress < 90 ? 'Processing compatibility...' : 
                                     'Adding to database...';
            
            if (progress >= 100) {
                clearInterval(interval);
                // Process the Excel file
                readFileContent(selectedFile);
            }
        }, 100);
    }
    
    // Read file content
    function readFileContent(file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, {type: 'array'});
                
                // Get the first worksheet
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                
                // Convert to JSON
                const jsonData = XLSX.utils.sheet_to_json(worksheet);
                
                // Process the data
                processBatteryData(jsonData);
            } catch (error) {
                console.error('Error reading file:', error);
                progressText.textContent = 'Error reading file. Please try again.';
                uploadButton.disabled = false;
            }
        };
        
        reader.onerror = function() {
            console.error('Error reading file');
            progressText.textContent = 'Error reading file. Please try again.';
            uploadButton.disabled = false;
        };
        
        reader.readAsArrayBuffer(file);
    }
    
    // Process battery data and add to compatibility database
    function processBatteryData(data) {
        progressText.textContent = `Processing ${data.length} battery records...`;
        
        // Simulate processing
        setTimeout(() => {
            try {
                // In a real implementation, this would update the compatibility database
                // For now, we'll just show a success message
                progressText.textContent = `Successfully processed ${data.length} battery records!`;
                progressFill.style.backgroundColor = '#4CAF50';
                
                // Show success message
                setTimeout(() => {
                    alert(`Successfully imported ${data.length} battery records!\n\nThe data would be added to your compatibility database in a full implementation.`);
                    
                    // Reset form
                    setTimeout(() => {
                        removeSelectedFile();
                        uploadProgress.style.display = 'none';
                        progressFill.style.width = '0%';
                        progressFill.style.backgroundColor = '#96A78D';
                    }, 2000);
                }, 1000);
            } catch (error) {
                console.error('Error processing data:', error);
                progressText.textContent = 'Error processing data. Please check file format.';
                uploadButton.disabled = false;
            }
        }, 1000);
    }
});

// Add drag leave event to remove drag-over class
document.addEventListener('DOMContentLoaded', function() {
    const uploadArea = document.getElementById('uploadArea');
    
    uploadArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        e.stopPropagation();
        uploadArea.classList.remove('drag-over');
    });
    
    uploadArea.addEventListener('dragend', (e) => {
        e.preventDefault();
        e.stopPropagation();
        uploadArea.classList.remove('drag-over');
    });
});

console.log('📤 Upload functionality loaded successfully!');