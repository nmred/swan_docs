title: 监控适配器 archive 管理 API
prev: madapter_archive
---

###添加监控适配器 archive (madapter_archive.add)

####[URL](#add_url) 
http://127.0.0.1/dev/?/madapter_archive.add

####[请求方式](#add_post)
POST

####[支持格式](#add_json)
JSON 

####[请求参数](#add_param)

  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`madapter_id`  | true | int    | 监控适配器 ID
`cf_type`  | true | int    | 监控适配器 archive 计算公式
`xff`  | true | mixed    | 监控适配器 archive 判断数据正确性的阀值
`steps`  | true | mixed    | 监控适配器 archive 合并的时间点个数
`rows`  | true | mixed    | 监控适配器 archive 合并最终最多的条数
`title`  | true | mixed    | 监控适配器 archive 的描述信息


####[注意事项](#add_notice)

无

####[调用样例](#add_example)

```
	<?php
	$url = '127.0.0.1:9080/dev/?/madapter_archive.add';
	$rev = call($url, 'POST', array('madapter_id' => 1, 'cf_type' => 2, 'xff' => 0.5, 'title' => 'test', 'steps' => 300, 'rows' => 20));
	$rev = json_decode($rev, true);
	var_dump($rev);
```

####[返回结果](#add_result)
``` json
	{
		"code": 10000,
		"msg": "add madapter archive  success.",
		"data": {
			"archive_id": "1",
			"madapter_id": "1"
		}
	}
```
####[返回字段说明](#add_result_dis)
返回值字段 | 字段类型 | 字段说明
--- | --- | ---
`code` | string | 返回接口的状态码具体的状态码见 [接口错误码说明](api_errno.html) 
`msg`  | string | 接口的返回描述信息
`data` | array NULL  | 返回的数据，如果错误返回 NULL
`archive_id` | int | 返回监控适配器 archive ID
`madapter_id` | int | 返回监控适配器 ID

---
###修改监控适配器 archive (madapter_archive.mod)

####[URL](#mod_url) 
http://127.0.0.1/dev/?/madapter_archive.mod
####[请求方式](#mod_post)
POST
####[支持格式](#mod_json)
JSON 
####[请求参数](#mod_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`madapter_id`  | true | int    | 监控适配器 ID
`arid`  | true | int    | 监控适配器 archive ID
`cf_type`  | true | int    | 监控适配器 archive 计算公式
`xff`  | true | mixed    | 监控适配器 archive 判断数据正确性的阀值
`steps`  | true | mixed    | 监控适配器 archive 合并的时间点个数
`rows`  | true | mixed    | 监控适配器 archive 合并最终最多的条数
`title`  | true | mixed    | 监控适配器 archive 的描述信息

####[注意事项](#mod_notice)
无
####[调用样例](#mod_example)
```
	<?php
	$url = '127.0.0.1:9080/dev/?/madapter_archive.mod';
	$rev = call($url, 'POST', array('arid' => 6, 'madapter_id' => 1, 'cf_type' => 3, 'xff' => 0.5, 'title' => 'test', 'steps' => 300, 'rows' = 40));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#mod_result)
``` json

	{
		"code": 10000,
		"msg": "mod madapter archive success.",
		"data": Null 
	}

```
####[返回字段说明](#mod_result_dis)
返回值字段 | 字段类型 | 字段说明
--- | --- | ---
`code` | string | 返回接口的状态码具体的状态码见 [接口错误码说明](api_errno.html) 
`msg`  | string | 接口的返回描述信息
`data` | array NULL  | 不返回数据


---
###删除监控适配器 archive (madapter_archive.del)

####[URL](#del_url) 
http://127.0.0.1/dev/?/madapter_archive.del
####[请求方式](#del_post)
POST
####[支持格式](#del_json)
JSON 
####[请求参数](#del_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`madapter_id` | true | int     | 监控适配器 ID
`arid` | true | int     | 监控适配器 archive ID
####[注意事项](#del_notice)
无
####[调用样例](#del_example)
```
	<?php
	$url = '127.0.0.1:9080/dev/?/madapter_archive.del';
	$rev = call($url, 'POST', array('madapter_id' => '3', 'arid' => '1'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#del_result)
``` json
	{
		"code": 10000,
		"msg": "delete madapter archive success.",
		"data": Null 
	}
```
####[返回字段说明](#del_result_dis)
返回值字段 | 字段类型 | 字段说明
--- | --- | ---
`code` | string | 返回接口的状态码具体的状态码见 [接口错误码说明](api_errno.html) 
`msg`  | string | 接口的返回描述信息
`data` | array NULL  | 不返回数据

---
###获取监控适配器 archive (madapter_archive.json)

####[URL](#json_url) 
http://127.0.0.1/dev/?/madapter_archive.json
####[请求方式](#json_post)
POST
####[支持格式](#json_json)
JSON 
####[请求参数](#json_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`madapter_id` | true | int     | 监控适配器 ID
`arid` | false | int     | 监控适配器 archive ID
`page` | false | int     | 分页的页码
`page_count` | false | int     | 每页的个数
####[注意事项](#json_notice)
无
####[调用样例](#json_example)
```
	<?php
	$url = '127.0.0.1:9080/dev/?/madapter_archive.json';
	$rev = call($url, 'POST', array('arid' => 3, 'madapter_id' => 1, 'page' => '1', 'page_count' => 20));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#json_result)
``` json
	{
		"code": 10000,
		"msg": "get madapter archive success.",
		"data": {
			"result": [
				{
					"archive_id": "3",
					"madapter_id": "1",
					"title": "test",
					"cf_type": "1",
					"xff": "0.5",
					"steps": "60",
					"rows": "10"
				},
				{
					"archive_id": "5",
					"madapter_id": "1",
					"title": "test",
					"cf_type": "1",
					"xff": "0.5",
					"steps": "60",
					"rows": "30"
				}
			],
			"count": "2"
		}
	}
```
####[返回字段说明](#json_result_dis)
返回值字段 | 字段类型 | 字段说明
--- | --- | ---
`code` | string | 返回接口的状态码具体的状态码见 [接口错误码说明](api_errno.html) 
`msg`  | string | 接口的返回描述信息
`data` | array NULL  | 不返回数据
`madapter_id`  | true | int    | 监控适配器 ID
`archive_id`  | true | int    | 监控适配器 archive ID
`cf_type`  | true | int    | 监控适配器 archive 计算公式
`xff`  | true | mixed    | 监控适配器 archive 判断数据正确性的阀值
`steps`  | true | mixed    | 监控适配器 archive 合并的时间点个数
`rows`  | true | mixed    | 监控适配器 archive 合并最终最多的条数
`title`  | true | mixed    | 监控适配器 archive 的描述信息
