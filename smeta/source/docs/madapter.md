title: 监控适配器管理 API
next: madapter_attr
prev: device_monitor
---

###添加监控适配器(madapter.add)

####[URL](#add_url) 
http://127.0.0.1/dev/?/madapter.add

####[请求方式](#add_post)
POST

####[支持格式](#add_json)
JSON 

####[请求参数](#add_param)

  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`name` | true | string | 监控适配器名称，监控适配器名称必须是首个字符是字母，由数字、字母、下划线组成,并且至少6位
`display_name` | false | string | 监控适配器描述信息
`steps` | false | int | 监控适配器存储间隔时间
`store_type` | false | int | 监控适配器存储类型 2: rrd, 4:redis, 2+4: redis+rrd
`madapter_type` | false | int | 监控适配器类型 1: core类型，该类型不能删除. 2: normal 普通监控适配器

####[注意事项](#add_notice)

无

####[调用样例](#add_example)

```
	<?php
	$url = '127.0.0.1:9080/dev/?/madapter.add';
	$rev = call($url, 'POST', array('name' => 'madapter_001'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```

####[返回结果](#add_result)
``` json

	{
		"code": 10000,
		"msg": "add madapter success.",
		"data": {
			"madapter_id": "3"
		}
	}

```
####[返回字段说明](#add_result_dis)
返回值字段 | 字段类型 | 字段说明
--- | --- | ---
`code` | string | 返回接口的状态码具体的状态码见 [接口错误码说明](api_errno.html) 
`msg`  | string | 接口的返回描述信息
`data` | array NULL  | 返回的数据，如果错误返回 NULL
`madapter_id` | int | 返回监控适配器 ID

---
###修改监控适配器(madapter.mod)

####[URL](#mod_url) 
http://127.0.0.1/dev/?/madapter.mod
####[请求方式](#mod_post)
POST
####[支持格式](#mod_json)
JSON 
####[请求参数](#mod_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`madapter_id` | true | int     | 监控适配器 ID
`display_name` | false | string    | 监控适配器描述信息
`steps` | false | int | 监控适配器存储间隔时间
`store_type` | false | int | 监控适配器存储类型 2: rrd, 4:redis, 2+4: redis+rrd
`madapter_type` | false | int | 监控适配器类型 1: core类型，该类型不能删除. 2: normal 普通监控适配器

####[注意事项](#mod_notice)
无
####[调用样例](#mod_example)
```
	<?php
	$url = '127.0.0.1:9080/dev/?/madapter.mod';
	$rev = call($url, 'POST', array('madapter_id' => '3', 'display_name' => 'madapter_0001_desc'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#mod_result)
``` json

	{
		"code": 10000,
		"msg": "mod madapter success.",
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
###删除监控适配器(madapter.del)

####[URL](#del_url) 
http://127.0.0.1/dev/?/madapter.del
####[请求方式](#del_post)
POST
####[支持格式](#del_json)
JSON 
####[请求参数](#del_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`madapter_id` | true | int     | 监控适配器 ID
####[注意事项](#del_notice)
无
####[调用样例](#del_example)
```
	<?php
	$url = '127.0.0.1:9080/dev/?/madapter.del';
	$rev = call($url, 'POST', array('madapter_id' => '3'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#del_result)
``` json
	{
		"code": 10000,
		"msg": "delete madapter success.",
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
###获取监控适配器(madapter.json)

####[URL](#json_url) 
http://127.0.0.1/dev/?/madapter.json
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
	$url = '127.0.0.1:9080/dev/?/madapter.json';
	$rev = call($url, 'POST', array('page' => '1'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#json_result)
``` json
{
    "code": 10000,
    "msg": "get madapter success.",
    "data": {
        "result": [
            {
                "madapter_id": "2",
                "madapter_name": "madapter_002",
                "madapter_display_name": ""
				`store_type`: 4,
				`madapter_type`: 2,
            },
            {
                "madapter_id": "3",
                "madapter_name": "madapter_003",
                "madapter_display_name": ""
				`store_type`: 4,
				`madapter_type`: 2,
            },
            {
                "madapter_id": "4",
                "madapter_name": "madapter_004",
                "madapter_display_name": "",
				`store_type`: 4,
				`madapter_type`: 2,
            },
            {
                "madapter_id": "5",
                "madapter_name": "madapter_005",
                "madapter_display_name": ""
				`store_type`: 4,
				`madapter_type`: 2,
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
`madapter_id` | int | 监控适配器 ID
`madapter_name` | string | 监控适配器名称
`madapter_display_name` | string | 监控适配器描述信息
`store_type` | int | 监控适配器存储类型 2: rrd, 4:redis, 2+4: redis+rrd
`madapter_type` | int | 监控适配器类型 1: core类型，该类型不能删除. 2: normal 普通监控适配器

