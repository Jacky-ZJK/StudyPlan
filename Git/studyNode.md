## `Git`初始化

+ `git init`;创建`.git`目录， 目录中存放的是`本地库`相关的子目录和文件

+ 设置签名
  
  - 项目/仓库级别：`git config user.name/user.email`; 信息保存位置 `.git/config`
  
  - 系统级别：`git config --global user.name/user.email`; 信息保存位置 `~/.gitconfig`

## `Git`版本控制命令

+ `git status`;

+ `git add < file >`;

+ `git rm -cached < file >`;

+ `git commit -m "message" < file >`;

+ `git log`
 
  - `git log --pretty=oneline`

  - `git log --oneline`

+ `git reflog`

+ `git reset --hard 索引`

+ `git diff [索引]`

## `Git`分支

+ `git branch -v`

+ `git checkout [name]`

+ `git merge [name]`

## `Git`远程仓库控制

+ `git remote add [name] [addr]`

+ `git push [origin] [分支]`

+ `git clone [origin]`

+ `git fetch [origin] [分支]`

+ `git merge [origin/分支]`

+ `git pull [origin] [分支]`

+ `ssh-keygen -t rsa -C [e-mail]`