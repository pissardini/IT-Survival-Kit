# Git Cheatsheet

## Basic 

### Create empty repo
```
git init directory
```

### Clone repo
```
git clone repo
```

### .gitignore

Specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected.


### Add files 

Add file contents to the index.

* A specific file 
```
git add hello.py 
```

* All files:
```
git add . 
```

### Commit

```
git commit -m "Commit message"
```

### Status 
```
git status
```

## Branches

### Create a branch 

```
git checkout -b name_branch
git status
```

### Excluding branches

```
git branch -d name_branch
```

### Merging branches 

```
git checkout name_branch
git merge master
git hist --all
```

### Navigating between branches 
```
git checkout name_branch
```

### Show branches 

Local: 

```
git branch -a
```

Remotes: 

```
git branch -r
```

## Remote repositories


### Configuration 

Showing system, global, and (if inside a repository) local configs.

```
git config --list
```

### Connection
```
git remote add <name> <url>
```

For GitHub: 
```
git remote add origin url_git
```

### Fetch a specific branch 
```
git fetch <remote> <branch>
```

### List remote repositories
```
git remote -v 
```

### Pull remote 
```
git pull <name> <remote>
```

### Push remote
```
git push <name> <master|branch>
```
