@echo off
:: Stop script execution immediately if any command fails
setlocal enabledelayedexpansion

echo ===================================================
echo   Starting Deployment Process (V2.0 to Main)
echo ===================================================
echo.

:: Step 1: Switch from V2.0 to the main branch
echo [1/4] Switching to main branch...
git checkout main
if %errorlevel% neq 0 (
    echo [ERROR] Failed to switch to main branch. Aborting.
    pause
    exit /b %errorlevel%
)

:: Step 2: Merge all changes from V2.0 into main
echo [2/4] Merging changes from V2.0 into main...
git merge V2.0
if %errorlevel% neq 0 (
    echo [ERROR] Merge conflict or failure detected. Aborting.
    pause
    exit /b %errorlevel%
)

:: Step 3: Push the updated main branch to GitHub
echo [3/4] Pushing main branch to GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo [ERROR] Failed to push to GitHub. Aborting.
    pause
    exit /b %errorlevel%
)

:: Step 4: Build and publish the site to GitHub Pages via MkDocs
echo [4/4] Deploying documentation to GitHub Pages...
mkdocs gh-deploy
if %errorlevel% neq 0 (
    echo [ERROR] MkDocs deployment failed. Aborting.
    pause
    exit /b %errorlevel%
)

echo.
echo ===================================================
echo   Deployment Complete! Your site is updating.
echo ===================================================
pause