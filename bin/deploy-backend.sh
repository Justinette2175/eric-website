#!/bin/bash

MAIN_DIR=`pwd`
# Define your application directory
APP_DIR="$MAIN_DIR/backend"

# Define temporary repository directory
TMP_REPO_DIR="$MAIN_DIR/tmp"
REMOTE_REPO_URL="dokku@51.222.25.227:eric-letourneau"

echo "appdir= $APP_DIR"

# Define the remote repository URL (replace with your repository URL)
# Step 2: Create a new Git repository in a temporary directory
mkdir -p "$TMP_REPO_DIR"
cd "$TMP_REPO_DIR"

git init

# Step 3: Copy the 'build' directory, 'package.json', and 'Procfile' to the repository
cp -r "$APP_DIR/src" .
cp -r "$APP_DIR/config" .
cp -r "$APP_DIR/public" .
cp -r "$APP_DIR/database" .
cp "$APP_DIR/package.json" . 
cp "$APP_DIR/favicon.ico" . 
cp "$APP_DIR/tsconfig.json" . 
cp "$APP_DIR/.gitignore" . 

# Step 4: Commit the newly added files
git add .
git commit -m "Deploy commit"

# Step 5: Add a remote origin
git remote add dokku "$REMOTE_REPO_URL"

# Step 6: Push to the remote origin
git push -u dokku master -f  # Adjust the branch name if needed

# Step 7: Delete the temporary repository
cd .. # Change to a safe directory before removing
rm -rf "$TMP_REPO_DIR"

echo "Deployment completed and temporary repository deleted."
