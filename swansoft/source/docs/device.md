title: 设备管理 API
next: device_monitor
prev: inner_api
---

###添加设备(device.add)

####[URL](#add_url) 
http://127.0.0.1/user/?/device.add

####[请求方式](#add_post)
POST

####[支持格式](#add_json)
JSON 

####[请求参数](#add_param)

  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`name` | true | string | 设备名称，设备名称必须是首个字符是字母，由数字、字母、下划线组成,并且至少6位
`host_name` | true | string | 设备主机名
`display_name` | false | string | 设备描述信息
`heartbeat_time` | false | string | 设备监控的心跳线超时时间

####[注意事项](#add_notice)

无

####[调用样例](#add_example)

```
	<?php
	$url = '127.0.0.1:9080/user/?/device.add';
	$rev = call($url, 'POST', array('name' => 'device_0001'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```

####[返回结果](#add_result)
``` json

	{
		"code": 10000,
		"msg": "add device device_0001 success.",
		"data": {
			"device_id": "3"
		}
	}

```
####[返回字段说明](#add_result_dis)
返回值字段 | 字段类型 | 字段说明
--- | --- | ---
`code` | string | 返回接口的状态码具体的状态码见 [接口错误码说明](api_errno.html) 
`msg`  | string | 接口的返回描述信息
`data` | array NULL  | 返回的数据，如果错误返回 NULL
`device_id` | int | 返回设备 ID

---
###修改设备(device.mod)

####[URL](#mod_url) 
http://127.0.0.1/user/?/device.mod
####[请求方式](#mod_post)
POST
####[支持格式](#mod_json)
JSON 
####[请求参数](#mod_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`device_id` | true | int     | 设备 ID
`host_name` | false | string | 设备主机名
`display_name` | false | string    | 设备描述信息
`heartbeat_time` | false | string | 设备监控的心跳线超时时间
####[注意事项](#mod_notice)
无
####[调用样例](#mod_example)
```
	<?php
	$url = '127.0.0.1:9080/user/?/device.mod';
	$rev = call($url, 'POST', array('device_id' => '3', 'display_name' => 'device_0001_desc'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#mod_result)
``` json

	{
		"code": 10000,
		"msg": "mod device success.",
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
###删除设备(device.del)

####[URL](#del_url) 
http://127.0.0.1/user/?/device.del
####[请求方式](#del_post)
POST
####[支持格式](#del_json)
JSON 
####[请求参数](#del_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`device_id` | true | int     | 设备 ID
####[注意事项](#del_notice)
无
####[调用样例](#del_example)
```
	<?php
	$url = '127.0.0.1:9080/user/?/device.del';
	$rev = call($url, 'POST', array('device_id' => '3'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#del_result)
``` json

	{
		"code": 10000,
		"msg": "delete device success.",
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
###获取设备(device.json)

####[URL](#json_url) 
http://127.0.0.1/user/?/device.json
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
		"msg": "get device success.",
		"data": {
			"result": [
				{
					"device_id": "1",
					"device_name": "device_001",
					"host_name": "192.168.1.132",
					"device_display_name": "",
					'heartbeat_time': '20',
				},
				{
					"device_id": "2",
					"device_name": "device_002",
					"host_name": "192.168.1.132",
					"device_display_name": "",
					'heartbeat_time': '20',
				},
				{
					"device_id": "3",
					"device_name": "device_003",
					"host_name": "192.168.1.132",
					"device_display_name": "device_desc_test"
					'heartbeat_time': '20',
				},
				{
					"device_id": "4",
					"device_name": "device_004",
					"host_name": "192.168.1.132",
					"device_display_name": "",
					'heartbeat_time': '20',
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
`device_id` | int | 设备 ID
`device_name` | string | 设备名称
`host_name` | string | 设备主机名
`device_display_name` | string | 设备描述信息



