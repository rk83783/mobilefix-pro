# .gitattributes Editor

A small static editor to view and adjust the repository's `.gitattributes` file and download the edited version.

How to use

1. Open `tools/gitattributes-editor/index.html` in your browser (double-click the file or open with your browser).
2. Edit the `.gitattributes` contents in the left editor.
3. Click "Download .gitattributes" to save the edited file to your machine.
4. From PowerShell in the repo, run the helper to install the file:

   .\tools\gitattributes-editor\apply.ps1 -SourcePath "C:\path\to\.gitattributes"

   The script will back up any existing `.gitattributes` file before replacing it.

Notes

- The editor is static (no server required).
- The helper script is Windows PowerShell compatible and assumes the repo root is two levels above the editor folder.
- If you want, I can also create a commit to add the new `.gitattributes` to the repository automatically — tell me the commit message.
