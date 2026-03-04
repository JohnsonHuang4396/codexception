param(
  [ValidateSet('user', 'project')]
  [string]$Scope = 'user',
  [string]$ProjectRoot = ''
)

$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$sourceSkills = Join-Path $repoRoot 'skills'
if (-not (Test-Path $sourceSkills)) {
  throw "Source skills directory not found: $sourceSkills"
}

if ($Scope -eq 'user') {
  $targetRoot = Join-Path $env:USERPROFILE '.codex\skills\codexception'
}
else {
  if (-not $ProjectRoot) {
    throw 'ProjectRoot is required when Scope=project'
  }
  $targetRoot = Join-Path $ProjectRoot '.agents\skills\codexception'
}

New-Item -ItemType Directory -Force $targetRoot | Out-Null

Get-ChildItem -Path $sourceSkills | ForEach-Object {
  $dest = Join-Path $targetRoot $_.Name
  if (Test-Path $dest) {
    Remove-Item -Recurse -Force $dest
  }
  Copy-Item -Path $_.FullName -Destination $dest -Recurse -Force
}

Write-Host "Installed skills to: $targetRoot"
Write-Host 'Done.'
