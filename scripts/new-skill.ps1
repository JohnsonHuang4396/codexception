param(
  [Parameter(Mandatory = $true)]
  [string]$SkillName
)

$root = Split-Path -Parent $PSScriptRoot
$target = Join-Path $root "skills\$SkillName"
New-Item -ItemType Directory -Force $target | Out-Null
Copy-Item -Path (Join-Path $root 'skills\skill-template.md') -Destination (Join-Path $target 'SKILL.md') -Force
Write-Host "Created: $target\SKILL.md"
