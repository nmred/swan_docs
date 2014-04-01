title: INNER API
prev: mysql_desc
next: device
---

该 API 只是内网授权访问接口，目前启动默认是 127.0.0.1 来访问。 

## 使用前须知

使用需确认是否启动了 PHPD 服务中的 swan_data 进程。

```
	$ swan_soft start phpd 
```

### 测试 API 说明

文档例子中用到的 `call()` 函数：

```
	function call($url, $type = 'GET', $params = array())
	{   
		$params = http_build_query($params);
		if ('GET' == $type) {
			$url .= $params;
		}
		$ch = curl_init($url);
		curl_setopt($ch, CURLOPT_HEADER, false);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER , 1);

		if ('POST' == $type) {
			curl_setopt($ch, CURLOPT_POST, 1);
			curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
		}

		return curl_exec($ch);
	}
```

所有的例子在 [`swansoft`](https://www.github.com/nmred/swansoft) 仓库中的 `test/api` 目录下，这些测试案例要求 PHP 环境有 `curl` 扩展。 
