title: 环境部署 
prev: rpm_publish
next: inner_api
---

### 环境部署需求

- 系统： CentOs 5.4 
- 软件: swansoft [rpm 软件包](rpm_publish.html)

###开发部署

- 安装 dev_swan 工具包
- 安装 swansoft
- 更新 git 代码仓库并且同步到目标具体方法：

``` bash
	git clone git@github.com:nmred/swansoft.git
	cd swansoft
	git submodule init
	git submodule update
	#去引用 sf1 子库的目录更新
	cd src/sf
	git fetch
	git pull origin master
	./install
```

{%note warn 警告%}
如果更新的代码中有影响 PHPD 业务流程的代码，在更新后需要重新启动 PHPD
{%endnote%}
