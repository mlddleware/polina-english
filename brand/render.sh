#!/usr/bin/env bash
# Renders brand/src/*.html to PNG with headless Chrome (fonts come from Google Fonts):
#   bash brand/render.sh
set -euo pipefail
cd "$(dirname "$0")"

CHROME="${CHROME:-/c/Program Files/Google/Chrome/Application/chrome.exe}"
PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT
SRC="file:///$(cd src && pwd -W)"

shot() { # name size page [extra flags]
  local name=$1 size=$2 page=$3
  shift 3
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --user-data-dir="$PROFILE" --virtual-time-budget=8000 --window-size="$size" \
    --screenshot="$(pwd -W)/$name.png" "$@" "$SRC/$page" 2>/dev/null
  echo "$name.png ($size)"
}

shot avatar-mono 640,640 avatar-mono.html
shot avatar-bubble 640,640 avatar-bubble.html
shot bot-cover 640,360 bot-cover.html
shot og 1200,630 og.html
shot logo 1200,400 logo.html --default-background-color=00000000
shot logo-white 1200,400 'logo.html?white' --default-background-color=00000000
