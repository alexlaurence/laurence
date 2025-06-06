#!/usr/bin/env bash
# Launch the Jekyll server locally for development on Mac
# This script will attempt to install Homebrew, Ruby, chruby, Jekyll, and Bundler if missing.
# Usage: ./bin/jekyll-serve-mac.sh

set -e

# 1. Install Homebrew if not present
if ! command -v brew &>/dev/null; then
  echo "[INFO] Homebrew not found. Installing Homebrew..."
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
else
  echo "[INFO] Homebrew is already installed."
fi

# 2. Install chruby and ruby-install if not present
if ! brew list chruby &>/dev/null || ! brew list ruby-install &>/dev/null; then
  echo "[INFO] Installing chruby and ruby-install via Homebrew..."
  brew install chruby ruby-install
else
  echo "[INFO] chruby and ruby-install are already installed."
fi

# 3. Install Ruby 3.4.1 if not present
if ! chruby | grep -q 'ruby-3.4.1'; then
  echo "[INFO] Installing Ruby 3.4.1 via ruby-install..."
  ruby-install ruby 3.4.1
else
  echo "[INFO] Ruby 3.4.1 is already installed."
fi

# 4. Configure shell for chruby if not already configured
CHRUBY_SH="$(brew --prefix)/opt/chruby/share/chruby/chruby.sh"
AUTO_SH="$(brew --prefix)/opt/chruby/share/chruby/auto.sh"
ZSHRC=~/.zshrc
if ! grep -q "$CHRUBY_SH" "$ZSHRC"; then
  echo "[INFO] Adding chruby configuration to $ZSHRC..."
  echo "source $CHRUBY_SH" >> "$ZSHRC"
  echo "source $AUTO_SH" >> "$ZSHRC"
  echo "chruby ruby-3.4.1" >> "$ZSHRC"
  echo "[INFO] Please restart your terminal or run: source $ZSHRC"
fi

# Source chruby for current shell
source "$CHRUBY_SH"
source "$AUTO_SH"
chruby ruby-3.4.1

# 5. Install Jekyll if not present
if ! gem list -i jekyll &>/dev/null; then
  echo "[INFO] Installing Jekyll gem..."
  gem install jekyll
else
  echo "[INFO] Jekyll gem is already installed."
fi

# 6. Install Bundler and project gems if not present
if ! gem list -i bundler &>/dev/null; then
  echo "[INFO] Installing Bundler gem..."
  gem install bundler
fi

if [ -f "Gemfile" ]; then
  echo "[INFO] Installing project gems with Bundler..."
  bundle install
fi

# 7. Start the Jekyll server
echo "[INFO] Starting Jekyll server..."
bundle exec jekyll serve 