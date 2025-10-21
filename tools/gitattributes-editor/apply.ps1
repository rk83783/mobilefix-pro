<#
apply.ps1
Copy a .gitattributes file from a specified path into the repository root.
Usage:
  .\apply.ps1 -SourcePath "C:\Users\You\Downloads\.gitattributes"
If no SourcePath is provided the script will prompt interactively.
#>
param(
  [string]$SourcePath
)

$repoRoot = Split-Path -Parent -Path $MyInvocation.MyCommand.Path
$repoRoot = Resolve-Path "$repoRoot\..\.."  # move up from tools/gitattributes-editor to repo root
$repoRoot = $repoRoot.Path

if (-not $SourcePath) {
  $SourcePath = Read-Host "Enter path to the downloaded .gitattributes file"
}

if (-not (Test-Path $SourcePath)) {
  Write-Error "Source file not found: $SourcePath"
  exit 1
}

$dest = Join-Path $repoRoot '.gitattributes'
$backup = $dest + ".bak-$(Get-Date -Format 'yyyyMMdd-HHmmss')"

if (Test-Path $dest) {
  Copy-Item -Path $dest -Destination $backup -Force
  Write-Host "Backed up existing .gitattributes to: $backup"
}

Copy-Item -Path $SourcePath -Destination $dest -Force
Write-Host "Installed .gitattributes to: $dest"
