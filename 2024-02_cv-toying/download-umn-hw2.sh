#!/bin/bash

# Define the URL of the ZIP file and the target directory
ZIP_URL="https://www-users.cs.umn.edu/~hspark/csci5561_F2020/Registration.zip"
TARGET_DIR="data/umn-hw2"

# Check if the target directory does not exist and create it
if [ ! -d "$TARGET_DIR" ]; then
    mkdir -p "$TARGET_DIR"
fi

# Use wget or curl to download the ZIP file
if command -v wget > /dev/null; then
    wget -O "$TARGET_DIR/Registration.zip" "$ZIP_URL"
elif command -v curl > /dev/null; then
    curl -o "$TARGET_DIR/Registration.zip" "$ZIP_URL"
else
    echo "Error: This script requires either wget or curl to be installed."
    exit 1
fi

# Unzip the downloaded file into the target directory
unzip -o "$TARGET_DIR/Registration.zip" -d "$TARGET_DIR"

# Clean up the ZIP file if desired
# rm "$TARGET_DIR/Registration.zip"

echo "Download and extraction complete."

