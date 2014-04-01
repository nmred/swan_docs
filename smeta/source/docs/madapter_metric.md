title: 监控适配器数据项管理 API
prev: madapter_attr
next: madapter_archive
---

###添加监控适配器数据项(madapter_metric.add)

####[URL](#add_url) 
http://127.0.0.1/dev/?/madapter_metric.add

####[请求方式](#add_post)
POST

####[支持格式](#add_json)
JSON 

####[请求参数](#add_param)

  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`name` | true | string | 监控适配器数据项名称，监控适配器数据项名称必须是首个字符是字母，由数字、字母、下划线组成,并且至少6位
`madapter_id`  | true | int    | 监控适配器 ID
`collect_every`  | true | int    | 监控适配器数据项轮询的时间间隔
`time_threshold`  | false | mixed    | 监控适配器数据项获取数据超时时间 (ms)
`title` | false | string | 监控适配器数据项描述信息
`unit` | false | string | 监控适配器数据项数据单位
`dst_type` | false | int | 监控适配器数据项数据处理类型
`tmax` | false | int | 监控适配器数据项最大允许超时时间
`vmin` | false | string | 监控适配器数据项最小允许值
`vmax` | false | string | 监控适配器数据项最大允许值

####[注意事项](#add_notice)

无

####[调用样例](#add_example)

```
	<?php
	$url = '127.0.0.1:9080/dev/?/madapter_metric.add';
	$rev = call($url, 'POST', array('name' => 'metric' . time(), 'collect_every' => '1000', 'madapter_id' => 1, 'title' => 'madapter metric test'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```

####[返回结果](#add_result)
``` json
	{
		"code": 10000,
		"msg": "add madapter metric  success.",
		"data": {
			"metric_id": "1",
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
`metric_id` | int | 返回监控适配器数据项 ID
`madapter_id` | int | 返回监控适配器 ID

---
###修改监控适配器数据项(madapter_metric.mod)

####[URL](#mod_url) 
http://127.0.0.1/dev/?/madapter_metric.mod
####[请求方式](#mod_post)
POST
####[支持格式](#mod_json)
JSON 
####[请求参数](#mod_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`madapter_id` | true | int     | 监控适配器 ID
`metric_id` | true | int     | 监控适配器数据项 ID
`name` | false | string    | 监控适配器数据项名称
`time_threshold` | false | string    | 监控适配器数据项获取数据超时时间
`collect_every` | false | string    | 监控适配器轮询时间间隔
`dst_type` | false | int | 监控适配器数据项数据处理类型
`tmax` | false | int | 监控适配器数据项最大允许超时时间
`vmin` | false | string | 监控适配器数据项最小允许值
`vmax` | false | string | 监控适配器数据项最大允许值
`unit` | false | string | 监控适配器数据项数据单位
`title` | false | string | 监控适配器数据项描述信息

####[注意事项](#mod_notice)
无
####[调用样例](#mod_example)
```
	<?php
	$url = '127.0.0.1:9080/dev/?/madapter_metric.mod';
	$rev = call($url, 'POST', array('madapter_id' => 6, 'madapter_id' => '1', 'title' => 'madapter_metric_0001_desc'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#mod_result)
``` json

	{
		"code": 10000,
		"msg": "mod madapter metric success.",
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
###删除监控适配器数据项(madapter_metric.del)

####[URL](#del_url) 
http://127.0.0.1/dev/?/madapter_metric.del
####[请求方式](#del_post)
POST
####[支持格式](#del_json)
JSON 
####[请求参数](#del_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`madapter_id` | true | int     | 监控适配器 ID
`metric_id` | true | int     | 监控适配器数据源 ID
####[注意事项](#del_notice)
无
####[调用样例](#del_example)
```
	<?php
	$url = '127.0.0.1:9080/dev/?/madapter_metric.del';
	$rev = call($url, 'POST', array('madapter_id' => '3', 'aid' => '1'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#del_result)
``` json
	{
		"code": 10000,
		"msg": "delete madapter metric success.",
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
###获取监控适配器数据源(madapter_metric.json)

####[URL](#json_url) 
http://127.0.0.1/dev/?/madapter_metric.json
####[请求方式](#json_post)
POST
####[支持格式](#json_json)
JSON 
####[请求参数](#json_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`madapter_id` | true | int     | 监控适配器 ID
`page` | false | int     | 分页的页码
`page_count` | false | int     | 每页的个数
####[注意事项](#json_notice)
无
####[调用样例](#json_example)
```
	<?php
	$url = '127.0.0.1:9080/dev/?/madapter_metric.json';
	$rev = call($url, 'POST', array('madapter_id' => 1, 'page' => '1', 'page_count' => 20));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#json_result)
``` json
	{
		"code": 10000,
		"msg": "get madapter metric success.",
		"data": {
			"result": [
				{
					"metric_id": "1",
					"metric_name": "ss212221393426199",
					"madapter_id": "1",
					"collect_every": "1000",
					"time_threshold": "200",
					"tmax": "30",
					"dst_type": "1",
					"vmin": "U",
					"vmax": "U",
					"title": "eeee"
				}
			],
			"count": "1"
		}
	}
```
####[返回字段说明](#json_result_dis)
返回值字段 | 字段类型 | 字段说明
--- | --- | ---
`code` | string | 返回接口的状态码具体的状态码见 [接口错误码说明](api_errno.html) 
`msg`  | string | 接口的返回描述信息
`data` | array NULL  | 不返回数据
`metric_id` | int | 监控适配器数据项 ID
`madapter_id` | int | 监控适配器 ID
`metric_name` | string | 监控适配器数据项名称
`collect_every` | string | 监控适配器轮询时间
`time_threshold` | string | 监控适配器数据项获取数据超时时间
`title` | string | 监控适配器数据项描述信息
`unit` | string | 监控适配器数据项数据单位
`dst_type` | false | int | 监控适配器数据项数据处理类型
`tmax` | false | int | 监控适配器数据项最大允许超时时间
`vmin` | false | string | 监控适配器数据项最小允许值
`vmax` | false | string | 监控适配器数据项最大允许值
