# Script Automático de Publicação no GitHub Pages — Rosana&Co
$ErrorActionPreference = "Stop"

$git = "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe"
$gh = "C:\Program Files\GitHub CLI\gh.exe"

$env:Path = "$env:LOCALAPPDATA\Programs\Git\cmd;C:\Program Files\GitHub CLI;$env:Path"

Write-Host "=====================================================" -ForegroundColor Green
Write-Host "   PUBLICACAO AUTOMATICA NO GITHUB PAGES - ROSANA&CO " -ForegroundColor Green
Write-Host "=====================================================" -ForegroundColor Green
Write-Host ""

# 1. Verificar login no GitHub CLI
$authStatus = & $gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "1. Abrindo navegador para autenticar sua conta do GitHub..." -ForegroundColor Yellow
    & $gh auth login --hostname github.com --git-protocol https --web
} else {
    Write-Host "1. Conta do GitHub ja autenticada!" -ForegroundColor Cyan
}

# 2. Obter nome de usuario autenticado
$username = (& $gh api user -q ".login").Trim()
$repoName = "rosana-co"

Write-Host "Usuario detectado: $username" -ForegroundColor Cyan
Write-Host "Repositorio: $repoName" -ForegroundColor Cyan

# 3. Criar repositorio se nao existir e enviar o codigo
$repoExists = & $gh repo view "$username/$repoName" 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "2. Criando repositorio publico '$repoName' e enviando os arquivos..." -ForegroundColor Yellow
    & $gh repo create $repoName --public --source=. --remote=origin --push
} else {
    Write-Host "2. Enviando arquivos para o repositorio '$username/$repoName'..." -ForegroundColor Yellow
    $remotes = & $git remote
    if ($remotes -notcontains "origin") {
        & $git remote add origin "https://github.com/$username/$repoName.git"
    }
    & $git push -u origin main --force
}

# 4. Ativar GitHub Pages via GitHub Actions
Write-Host "3. Configurando o GitHub Pages (modo GitHub Actions)..." -ForegroundColor Yellow
& $gh api --method POST -H "Accept: application/vnd.github+json" "/repos/$username/$repoName/pages" -f "build_type=workflow" 2>$null
if ($LASTEXITCODE -ne 0) {
    & $gh api --method PUT -H "Accept: application/vnd.github+json" "/repos/$username/$repoName/pages" -f "build_type=workflow" 2>$null
}

# 5. Disparar workflow caso necessario
& $gh workflow run deploy-pages.yml 2>$null

Write-Host ""
Write-Host "=====================================================" -ForegroundColor Green
Write-Host " TUDO PRONTO! SEU SITE ESTA SENDO PUBLICADO EM:      " -ForegroundColor Green
Write-Host " https://$username.github.io/$repoName/              " -ForegroundColor White
Write-Host "=====================================================" -ForegroundColor Green
Write-Host "(Aguarde cerca de 1 minuto para o GitHub Actions finalizar a primeira publicacao)"
