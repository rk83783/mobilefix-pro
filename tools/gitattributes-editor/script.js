const editor = document.getElementById('editorArea');
const preview = document.getElementById('previewArea');
const previewBtn = document.getElementById('previewBtn');
const downloadBtn = document.getElementById('downloadBtn');
const copyBtn = document.getElementById('copyBtn');

function updatePreview() {
  const content = editor.value;
  // Minimal sanitization for display
  preview.textContent = content;
}

previewBtn.addEventListener('click', updatePreview);

downloadBtn.addEventListener('click', () => {
  const blob = new Blob([editor.value], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = '.gitattributes';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(editor.value);
    copyBtn.textContent = 'Copied!';
    setTimeout(() => copyBtn.textContent = 'Copy to clipboard', 1500);
  } catch (e) {
    console.error('Copy failed', e);
    alert('Copy to clipboard failed. You can download the file instead.');
  }
});

// Show initial preview
updatePreview();

// Keyboard shortcut: Ctrl/Cmd+S triggers download
window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
    e.preventDefault();
    downloadBtn.click();
  }
});