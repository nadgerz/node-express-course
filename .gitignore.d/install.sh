curl -s https://raw.githubusercontent.com/github/gitignore/main/Node.gitignore -o Node.gitignore

cat Node.gitignore .gitignore.local > .gitignore

# cd "$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
root=$(git rev-parse --show-toplevel 2>/dev/null || pwd)

echo ${root}

cp .gitignore ${root}/
