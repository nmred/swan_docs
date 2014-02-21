title: 监控器数据项管理 API
prev: monitor_attr
---

###添加监控器数据项(monitor_metric.add)

####[URL](#add_url) 
http://127.0.0.1/dev/?/monitor_metric.add

####[请求方式](#add_post)
POST

####[支持格式](#add_json)
JSON 

####[请求参数](#add_param)

  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`name` | true | string | 监控器数据项名称，监控器数据项名称必须是首个字符是字母，由数字、字母、下划线组成,并且至少6位
`mid`  | true | int    | 监控器 ID
`collect_every`  | true | int    | 监控器数据项轮询的时间间隔
`time_threshold`  | false | mixed    | 监控器数据项获取数据超时时间 (ms)
`title` | false | string | 监控器数据项描述信息

####[注意事项](#add_notice)

无

####[调用样例](#add_example)

```
	<?php
	$url = '127.0.0.1:9080/dev/?/monitor_metric.add';
	$rev = call($url, 'POST', array('name' => 'metric' . time(), 'collect_every' => '1000', 'mid' => 1, 'title' => 'monitor metric test'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```

####[返回结果](#add_result)
``` json
	{
		"code": 10000,
		"msg": "add monitor metric  success.",
		"data": {
			"metric_id": "1",
			"monitor_id": "1"
		}
	}
```
####[返回字段说明](#add_result_dis)
返回值字段 | 字段类型 | 字段说明
--- | --- | ---
`code` | string | 返回接口的状态码具体的状态码见 [接口错误码说明](api_errno.html) 
`msg`  | string | 接口的返回描述信息
`data` | array NULL  | 返回的数据，如果错误返回 NULL
`metric_id` | int | 返回监控器数据项 ID
`monitor_id` | int | 返回监控器 ID

---
###修改监控器数据项(monitor_metric.mod)

####[URL](#mod_url) 
http://127.0.0.1/dev/?/monitor_metric.mod
####[请求方式](#mod_post)
POST
####[支持格式](#mod_json)
JSON 
####[请求参数](#mod_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`mid` | true | int     | 监控器 ID
`mmid` | true | int     | 监控器数据项 ID
`name` | false | string    | 监控器数据项名称
`time_threshold` | false | string    | 监控器数据项获取数据超时时间
`collect_every` | false | string    | 监控器轮询时间间隔
####[注意事项](#mod_notice)
无
####[调用样例](#mod_example)
```
	<?php
	$url = '127.0.0.1:9080/dev/?/monitor_metric.mod';
	$rev = call($url, 'POST', array('mid' => 6, 'mid' => '1', 'title' => 'monitor_metric_0001_desc'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#mod_result)
``` json

	{
		"code": 10000,
		"msg": "mod monitor metric success.",
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
###删除监控器数据项(monitor_metric.del)

####[URL](#del_url) 
http://127.0.0.1/dev/?/monitor_metric.del
####[请求方式](#del_post)
POST
####[支持格式](#del_json)
JSON 
####[请求参数](#del_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`mid` | true | int     | 监控器 ID
`mmid` | true | int     | 监控器数据源 ID
####[注意事项](#del_notice)
无
####[调用样例](#del_example)
```
	<?php
	$url = '127.0.0.1:9080/dev/?/monitor_metric.del';
	$rev = call($url, 'POST', array('mid' => '3', 'aid' => '1'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#del_result)
``` json
	{
		"code": 10000,
		"msg": "delete monitor metric success.",
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
###获取监控器数据源(monitor_metric.json)

####[URL](#json_url) 
http://127.0.0.1/dev/?/monitor_metric.json
####[请求方式](#json_post)
POST
####[支持格式](#json_json)
JSON 
####[请求参数](#json_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`mid` | true | int     | 监控器 ID
`page` | false | int     | 分页的页码
`page_count` | false | int     | 每页的个数
####[注意事项](#json_notice)
无
####[调用样例](#json_example)
```
	<?php
	$url = '127.0.0.1:9080/dev/?/monitor_metric.json';
	$rev = call($url, 'POST', array('mid' => 1, 'page' => '1', 'page_count' => 20));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#json_result)
``` json
{
    "code": 10000,
    "msg": "get monitor metric success.",
    "data": {
        "result": [
            {
                "metric_id": "3",
                "metric_name": "metric_1",
                "monitor_id": "1",
                "collect_every": "60",
                "time_threshold": "10",
                "title": ""
            },
            {
                "metric_id": "4",
                "metric_name": "metric_2",
                "monitor_id": "1",
                "collect_every": "60",
                "time_threshold": "30",
                "title": ""
            },
            {
                "metric_id": "5",
                "metric_name": "metric_3",
                "monitor_id": "1",
                "collect_every": "60",
                "time_threshold": "10",
                "title": ""
            },
            {
                "metric_id": "6",
                "metric_name": "metric_4",
                "monitor_id": "1",
                "collect_every": "1000",
                "time_threshold": "200",
                "title": "33333"
            }
        ],
        "count": "4"
    }
}
```
####[返回字段说明](#json_result_dis)
返回值字段 | 字段类型 | 字段说明
--- | --- | ---
`code` | string | 返回接口的状态码具体的状态码见 [接口错误码说明](api_errno.html) 
`msg`  | string | 接口的返回描述信息
`data` | array NULL  | 不返回数据
`metric_id` | int | 监控器数据项 ID
`monitor_id` | int | 监控器 ID
`metric_name` | string | 监控器数据项名称
`collect_every` | string | 监控器轮询时间
`time_threshold` | string | 监控器数据项获取数据超时时间
`title` | string | 监控器数据项描述信息
