title: 设备监控器管理 API
next: monitor
prev: device
---

###添加设备监控器(device_monitor.add)

####[URL](#add_url) 
http://127.0.0.1/user/?/device_monitor.add

####[请求方式](#add_post)
POST

####[支持格式](#add_json)
JSON 

####[请求参数](#add_param)

  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`did` | true | int | 设备 ID
`mid` | true | int | 监控器 ID
`aid` | true | int | 监控器属性 ID
`value` | false | mixed | 监控器属性值，不传递默认是空字符串

####[注意事项](#add_notice)

无

####[调用样例](#add_example)

```
	<?php
	$url = '127.0.0.1:9080/user/?/device_monitor.add';
	$rev = call($url, 'POST', array('aid' => '1', 'mid' => 1, 'did' => 3, 'value' => '50'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```

####[返回结果](#add_result)
``` json
	{
		"code": 10000,
		"msg": "add device monitor attributes success.",
		"data": {
			"did": "3",
			"aid": "1",
			"vid": "2",
			"mid": "1"
		}
	}
```
####[返回字段说明](#add_result_dis)
返回值字段 | 字段类型 | 字段说明
--- | --- | ---
`code` | string | 返回接口的状态码具体的状态码见 [接口错误码说明](api_errno.html) 
`msg`  | string | 接口的返回描述信息
`data` | array NULL  | 返回的数据，如果错误返回 NULL
`did` | int | 返回设备 ID
`aid` | int | 返回监控器属性 ID
`vid` | int | 返回监控器属性值 ID
`mid` | int | 返回监控器 ID

---
###修改设备监控器(device.mod)

####[URL](#mod_url) 
http://127.0.0.1/user/?/device_monitor.mod
####[请求方式](#mod_post)
POST
####[支持格式](#mod_json)
JSON 
####[请求参数](#mod_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`vid` | true | int     | 监控器属性值 ID
`value` | false | mixed    | 监控器属性值
####[注意事项](#mod_notice)
无
####[调用样例](#mod_example)
```
	<?php
	$url = '127.0.0.1:9080/user/?/device_monitor.mod';
	$rev = call($url, 'POST', array('vid' => '3', 'value' => '60'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#mod_result)
``` json

	{
		"code": 10000,
		"msg": "mod device monitor success.",
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
###删除设备监控器(device_monitor.del)

####[URL](#del_url) 
http://127.0.0.1/user/?/device_monitor.del
####[请求方式](#del_post)
POST
####[支持格式](#del_json)
JSON 
####[请求参数](#del_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`vid` | true | int     | 监控器属性值 ID
####[注意事项](#del_notice)
无
####[调用样例](#del_example)
```
	<?php
	$url = '127.0.0.1:9080/user/?/device_monitor.del';
	$rev = call($url, 'POST', array('vid' => '3'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#del_result)
``` json
	{
		"code": 10000,
		"msg": "delete device monitor success.",
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
###获取设备监控器(device_monitor.json)

####[URL](#json_url) 
http://127.0.0.1/user/?/device_monitor.json
####[请求方式](#json_post)
POST
####[支持格式](#json_json)
JSON 
####[请求参数](#json_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`did`  | true  | int  | 设备 ID
`page` | false | int     | 分页的页码
`page_count` | false | int     | 每页的个数
####[注意事项](#json_notice)
无
####[调用样例](#json_example)
```
	<?php
	$url = '127.0.0.1:9080/user/?/device.json';
	$rev = call($url, 'POST', array('did' => '3'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#json_result)
``` json
	{
		"code": 10000,
		"msg": "get device monitor success.",
		"data": {
			"result": [
				{
					"value_id": "2",
					"attr_id": "1",
					"device_id": "3",
					"monitor_id": "1",
					"value": "60"
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
`device_id` | int | 设备 ID
`attr_id` | int | 监控器属性 ID
`monitor_id` | int | 监控器 ID
`value_id` | int | 监控器属性值 ID



