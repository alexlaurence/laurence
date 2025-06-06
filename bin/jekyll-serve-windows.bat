@echo off
REM Launch the Jekyll server locally for development on Windows
REM This script will attempt to check/install Ruby, Jekyll, and Bundler if missing.
REM Reference: https://jekyllrb.com/docs/installation/windows/

setlocal enabledelayedexpansion

REM 1. Check for Ruby
where ruby >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Ruby is not installed.
    echo Please download and install Ruby+Devkit from:
    echo   https://rubyinstaller.org/downloads/
    echo After installation, run 'ridk install' and select MSYS2 and MINGW development toolchain.
    pause
    exit /b 1
) else (
    echo [INFO] Ruby is installed.
)

REM 2. Check for Jekyll and Bundler
ruby -S gem list -i jekyll >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [INFO] Installing Jekyll gem...
    gem install jekyll
) else (
    echo [INFO] Jekyll gem is already installed.
)

ruby -S gem list -i bundler >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [INFO] Installing Bundler gem...
    gem install bundler
) else (
    echo [INFO] Bundler gem is already installed.
)

REM 3. Install project gems if Gemfile exists
if exist Gemfile (
    echo [INFO] Installing project gems with Bundler...
    bundle install
)

REM 4. Start the Jekyll server
echo [INFO] Starting Jekyll server...
bundle exec jekyll serve 