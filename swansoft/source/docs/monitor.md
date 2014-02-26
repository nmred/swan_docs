title: 监控器管理 API
next: monitor_attr
prev: device_monitor
---

###添加监控器(monitor.add)

####[URL](#add_url) 
http://127.0.0.1/dev/?/monitor.add

####[请求方式](#add_post)
POST

####[支持格式](#add_json)
JSON 

####[请求参数](#add_param)

  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`name` | true | string | 监控器名称，监控器名称必须是首个字符是字母，由数字、字母、下划线组成,并且至少6位
`display_name` | false | string | 监控器描述信息
`steps` | false | int | 监控器存储间隔时间


####[注意事项](#add_notice)

无

####[调用样例](#add_example)

```
	<?php
	$url = '127.0.0.1:9080/dev/?/monitor.add';
	$rev = call($url, 'POST', array('name' => 'monitor_001'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```

####[返回结果](#add_result)
``` json

	{
		"code": 10000,
		"msg": "add monitor success.",
		"data": {
			"monitor_id": "3"
		}
	}

```
####[返回字段说明](#add_result_dis)
返回值字段 | 字段类型 | 字段说明
--- | --- | ---
`code` | string | 返回接口的状态码具体的状态码见 [接口错误码说明](api_errno.html) 
`msg`  | string | 接口的返回描述信息
`data` | array NULL  | 返回的数据，如果错误返回 NULL
`monitor_id` | int | 返回监控器 ID

---
###修改监控器(monitor.mod)

####[URL](#mod_url) 
http://127.0.0.1/dev/?/monitor.mod
####[请求方式](#mod_post)
POST
####[支持格式](#mod_json)
JSON 
####[请求参数](#mod_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`mid` | true | int     | 监控器 ID
`display_name` | false | string    | 监控器描述信息
`steps` | false | int | 监控器存储间隔时间

####[注意事项](#mod_notice)
无
####[调用样例](#mod_example)
```
	<?php
	$url = '127.0.0.1:9080/dev/?/monitor.mod';
	$rev = call($url, 'POST', array('mid' => '3', 'display_name' => 'monitor_0001_desc'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#mod_result)
``` json

	{
		"code": 10000,
		"msg": "mod monitor success.",
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
###删除监控器(monitor.del)

####[URL](#del_url) 
http://127.0.0.1/dev/?/monitor.del
####[请求方式](#del_post)
POST
####[支持格式](#del_json)
JSON 
####[请求参数](#del_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`mid` | true | int     | 监控器 ID
####[注意事项](#del_notice)
无
####[调用样例](#del_example)
```
	<?php
	$url = '127.0.0.1:9080/dev/?/monitor.del';
	$rev = call($url, 'POST', array('mid' => '3'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#del_result)
``` json
	{
		"code": 10000,
		"msg": "delete monitor success.",
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
###获取监控器(monitor.json)

####[URL](#json_url) 
http://127.0.0.1/dev/?/monitor.json
####[请求方式](#json_post)
POST
####[支持格式](#json_json)
JSON 
####[请求参数](#json_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`page` | false | int     | 分页的页码
`page_count` | false | int     | 每页的个数
####[注意事项](#json_notice)
无
####[调用样例](#json_example)
```
	<?php
	$url = '127.0.0.1:9080/user/?/device.json';
	$rev = call($url, 'POST', array('page' => '1'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#json_result)
``` json
{
    "code": 10000,
    "msg": "get monitor success.",
    "data": {
        "result": [
            {
                "monitor_id": "2",
                "monitor_name": "monitor_002",
                "monitor_display_name": ""
            },
            {
                "monitor_id": "3",
                "monitor_name": "monitor_003",
                "monitor_display_name": ""
            },
            {
                "monitor_id": "4",
                "monitor_name": "monitor_004",
                "monitor_display_name": ""
            },
            {
                "monitor_id": "5",
                "monitor_name": "monitor_005",
                "monitor_display_name": ""
            }
        ],
        "count": "9"
    }
}
```
####[返回字段说明](#json_result_dis)
返回值字段 | 字段类型 | 字段说明
--- | --- | ---
`code` | string | 返回接口的状态码具体的状态码见 [接口错误码说明](api_errno.html) 
`msg`  | string | 接口的返回描述信息
`data` | array NULL  | 不返回数据
`monitor_id` | int | 监控器 ID
`monitor_name` | string | 监控器名称
`monitor_display_name` | string | 监控器描述信息



