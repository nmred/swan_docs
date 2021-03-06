title: 设备监控器管理 API
next: madapter
prev: device
---

###添加设备监控器(dmonitor.add)

####[URL](#add_url) 
http://127.0.0.1/user/?/dmonitor.add

####[请求方式](#add_post)
POST

####[支持格式](#add_json)
JSON 

####[请求参数](#add_param)

  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`device_id` | true | int | 设备 ID
`madapter_id` | true | int | 监控器 ID
`monitor_name` | true | string | 设备监控器名称
`attr_data` | false | mixed | 监控器属性值, 注意：此参数为 JSON 字符串

####[注意事项](#add_notice)

无

####[调用样例](#add_example)

```
	<?php
	$url = '127.0.0.1:9080/user/?/dmonitor.add';
	$attr_data = array(
		array(
			'attr_id' => 1,
			'value'   => 'attr_value_1',
		),
		array(
			'attr_id' => 2,
			'value'   => 'attr_value_2',
		),
	);
	$attr_data = json_encode($attr_data);
	$rev = call($url, 'POST', array('madapter_id' => 1, 'device_id' => 1, 'attr_data' => $attr_data, 'db_name' => 'test_dm'));
	$rev = json_decode($rev, true);
	var_dump($rev);

```

####[返回结果](#add_result)
``` json
	{
		"code": 10000,
		"msg": "add device monitor success.",
		"data": 11
	}
```
####[返回字段说明](#add_result_dis)
返回值字段 | 字段类型 | 字段说明
--- | --- | ---
`code` | string | 返回接口的状态码具体的状态码见 [接口错误码说明](api_errno.html) 
`msg`  | string | 接口的返回描述信息
`data` | array NULL  | 返回的数据，如果错误返回 NULL
`monitor_id` | int | 返回该设备监控器 ID
`device_id` | int | 返回该设备 ID

---
###修改设备监控器(device.mod)

####[URL](#mod_url) 
http://127.0.0.1/user/?/dmonitor.mod
####[请求方式](#mod_post)
POST
####[支持格式](#mod_json)
JSON 
####[请求参数](#mod_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`device_id` | true | int     | 设备 ID
`madapter_id` | true | int     | 监控器 ID
`monitor_id` | true | string | 设备监控器 ID
`attr_data` | false | string    | 设备监控器的属性 params 值
####[注意事项](#mod_notice)
无
####[调用样例](#mod_example)
```
	<?php
	$attr_data = array(
      array(
          'attr_id' => 1,
          'value'   => 'test_1',
      ),
      array(
          'attr_id' => 2,
          'value'   => 'test_2',
      ),
  );
  $attr_data = json_encode($attr_data);
  $url = '127.0.0.1:9080/user/?/dmonitor.mod';
  $rev = call($url, 'POST', array('device_id' => 1, 'madapter_id' => 1, 'attr_data' => $attr_data, 'monitor_id' => 1));
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
###删除设备监控器(dmonitor.del)

####[URL](#del_url) 
http://127.0.0.1/user/?/dmonitor.del
####[请求方式](#del_post)
POST
####[支持格式](#del_json)
JSON 
####[请求参数](#del_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`monitor_id` | true | int     | 设备监控器 ID
`device_id` | true | int     | 设备 ID
####[注意事项](#del_notice)
无
####[调用样例](#del_example)
```
	<?php
	$url = '127.0.0.1:9080/user/?/dmonitor.del';
	$rev = call($url, 'POST', array('monitor_id' => '1', 'device_id' => 1));
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
###获取设备监控器(dmonitor.json)

####[URL](#json_url) 
http://127.0.0.1/user/?/dmonitor.json
####[请求方式](#json_post)
POST
####[支持格式](#json_json)
JSON 
####[请求参数](#json_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`device_id`  | true  | int  | 设备 ID
`page` | false | int     | 分页的页码
`page_count` | false | int     | 每页的个数
####[注意事项](#json_notice)
无
####[调用样例](#json_example)
```
	<?php
	$url = '127.0.0.1:9080/user/?/device.json';
	$rev = call($url, 'POST', array('device_id' => '3'));
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
					"monitor_id": "11",
					"monitor_name": "test_name",
					"device_id": "1",
					"monitor_id": "1",
					"monitor_name": "apache",
					"steps": "0",
					"monitor_display_name": "WEB SERVER 监控器"
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
`monitor_id` | int | 设备监控器 ID
`monitor_name` | int | 设备监控器名称
`monitor_id` | int | 监控器 ID
`steps` | int | 监控器存储间隔
`monitor_name` | string | 监控器名称
`monitor_display_name` | string | 监控器描述信息




---
###获取设备监控器(dmonitor.info)

####[URL](#info_url) 
http://127.0.0.1/user/?/dmonitor.info
####[请求方式](#info_post)
POST
####[支持格式](#info_json)
JSON 
####[请求参数](#info_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`device_id`  | true  | int  | 设备 ID
`madapter_id`  | true  | int  | 监控器 ID
`monitor_id`  | true  | int  | 设备监控器 ID
`page` | false | int     | 分页的页码
`page_count` | false | int     | 每页的个数
####[注意事项](#info_notice)
无
####[调用样例](#info_example)
```
	<?php
	$url = '127.0.0.1:9080/user/?/dmonitor.info';
	$rev = call($url, 'POST', array('device_id' => '1', 'madapter_id' => '1'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#info_result)
``` json
	{
		"code": 10000,
		"msg": "get device monitor success.",
		"data": {
			"result": [
				{
					"monitor_id": "11",
					"monitor_name": "test_name",
					"device_id": "1",
					"monitor_id": "1",
					"attr_id": "1",
					"value": "http://",
					"attr_name": "url",
					"form_type": "1",
					"form_data": "",
					"attr_default": "",
					"attr_display_name": ""
				},
				{
					"monitor_id": "11",
					"monitor_name": "test_name",
					"device_id": "1",
					"monitor_id": "1",
					"attr_id": "2",
					"value": "value_test",
					"attr_name": "test",
					"form_type": "1",
					"form_data": "",
					"attr_default": "",
					"attr_display_name": ""
				}
			],
			"count": "2"
		}
	}
```
####[返回字段说明](#info_result_dis)
返回值字段 | 字段类型 | 字段说明
--- | --- | ---
`code` | string | 返回接口的状态码具体的状态码见 [接口错误码说明](api_errno.html) 
`msg`  | string | 接口的返回描述信息
`data` | array NULL  | 不返回数据
`device_id` | int | 设备 ID
`monitor_id` | int | 设备监控器 ID
`monitor_name` | string | 设备监控器名称
`monitor_id` | int | 监控器 ID
`attr_id` | int | 监控器属性 ID
`value` | string | 属性值
`name` | string | 属性名
`form_type` | string | 属性表单类型
`form_data` | string | 属性表单选择类型预提供数据
`attr_default` | string | 属性默认值
`attr_display_name` | string | 属性描述信息



