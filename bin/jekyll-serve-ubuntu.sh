#!/usr/bin/env bash
# Launch the Jekyll server locally for development on Ubuntu
# This script will attempt to install Ruby, build tools, Jekyll, and Bundler if missing.
# Reference: https://jekyllrb.com/docs/installation/ubuntu/

set -e

# 1. Install Ruby and build dependencies
if ! command -v ruby &>/dev/null; then
  echo "[INFO] Installing Ruby and build tools..."
  sudo apt-get update
  sudo apt-get install -y ruby-full build-essential zlib1g-dev
else
  echo "[INFO] Ruby is already installed."
fi

# 2. Configure gem installation path for user
GEM_HOME_LINE='export GEM_HOME="$HOME/gems"'
PATH_LINE='export PATH="$HOME/gems/bin:$PATH"'
BASHRC="$HOME/.bashrc"
if ! grep -q "$GEM_HOME_LINE" "$BASHRC"; then
  echo "# Install Ruby Gems to ~/gems" >> "$BASHRC"
  echo "$GEM_HOME_LINE" >> "$BASHRC"
  echo "$PATH_LINE" >> "$BASHRC"
  echo "[INFO] Added GEM_HOME and PATH to $BASHRC. Please run: source $BASHRC or restart your terminal."
fi
export GEM_HOME="$HOME/gems"
export PATH="$HOME/gems/bin:$PATH"

# 3. Install Jekyll and Bundler if not present
if ! gem list -i jekyll &>/dev/null; then
  echo "[INFO] Installing Jekyll gem..."
  gem install jekyll
else
  echo "[INFO] Jekyll gem is already installed."
fi

if ! gem list -i bundler &>/dev/null; then
  echo "[INFO] Installing Bundler gem..."
  gem install bundler
else
  echo "[INFO] Bundler gem is already installed."
fi

# 4. Install project gems if Gemfile exists
if [ -f "Gemfile" ]; then
  echo "[INFO] Installing project gems with Bundler..."
  bundle install
fi

# 5. Start the Jekyll server
echo "[INFO] Starting Jekyll server..."
bundle exec jekyll serve 