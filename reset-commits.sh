#!/bin/sh

git config user.email "jonezy2004@gmail.com"
git config user.name "Jonezworthy"

git clone --bare https://github.com/Jonezworthy/mrandrewjones.git repo
cd repo

git filter-branch --env-filter '
OLD_EMAIL="your-old-email@example.com"
CORRECT_NAME="Jonezworthy"
CORRECT_EMAIL="jonezy2004@gmail.com"

    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"

    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"

' --tag-name-filter cat -- --branches --tags

git push --force --tags origin 'refs/heads/*'
cd ..
rm -rf repo