title: 监控器属性管理 API
prev: monitor
---

###添加监控器属性(monitor_attr.add)

####[URL](#add_url) 
http://127.0.0.1/dev/?/monitor_attr.add

####[请求方式](#add_post)
POST

####[支持格式](#add_json)
JSON 

####[请求参数](#add_param)

  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`name` | true | string | 监控器属性名称，监控器属性名称必须是首个字符是字母，由数字、字母、下划线组成,并且至少6位
`mid`  | true | int    | 监控器 ID
`form_type`  | true | int    | 监控器属性表单类型
`form_data`  | false | mixed    | 监控器属性表单数据（对于 select / checked 有效）
`mid`  | true | int    | 监控器 ID
`display_name` | false | string | 监控器属性描述信息

####[注意事项](#add_notice)

无

####[调用样例](#add_example)

```
	<?php
	$url = '127.0.0.1:9080/dev/?/monitor_attr.add';
	$rev = call($url, 'POST', array('name' => 'monitor_attr_001', 'form_type' => 1, 'mid' => 1, 'display_name' => 'monitor_attr_display'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```

####[返回结果](#add_result)
``` json
	{
		"code": 10000,
		"msg": "add monitor attribute success.",
		"data": {
			"attr_id": "1",
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
`attr_id` | int | 返回监控器属性 ID
`monitor_id` | int | 返回监控器 ID

---
###修改监控器属性(monitor_attr.mod)

####[URL](#mod_url) 
http://127.0.0.1/dev/?/monitor_attr.mod
####[请求方式](#mod_post)
POST
####[支持格式](#mod_json)
JSON 
####[请求参数](#mod_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`mid` | true | int     | 监控器 ID
`aid` | true | int     | 监控器属性 ID
`name` | false | string    | 监控器属性名称
`display_name` | false | string    | 监控器描述信息
`form_type` | false | string    | 监控器属性表单类型
`form_data` | false | string    | 监控器属性表单数据
####[注意事项](#mod_notice)
无
####[调用样例](#mod_example)
```
	<?php
	$url = '127.0.0.1:9080/dev/?/monitor_attr.mod';
	$rev = call($url, 'POST', array('aid' => 1, 'mid' => '3', 'display_name' => 'monitor_attr_0001_desc'));
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
###删除监控器属性(monitor_attr.del)

####[URL](#del_url) 
http://127.0.0.1/dev/?/monitor_attr.del
####[请求方式](#del_post)
POST
####[支持格式](#del_json)
JSON 
####[请求参数](#del_param)
  | 必选 | 类型及范围 | 说明
--- | --- | --- | ---
`mid` | true | int     | 监控器 ID
`aid` | true | int     | 监控器属性 ID
####[注意事项](#del_notice)
无
####[调用样例](#del_example)
```
	<?php
	$url = '127.0.0.1:9080/dev/?/monitor_attr.del';
	$rev = call($url, 'POST', array('mid' => '3', 'aid' => '1'));
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
###获取监控器属性(monitor_attr.json)

####[URL](#json_url) 
http://127.0.0.1/dev/?/monitor_attr.json
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
	$url = '127.0.0.1:9080/user/?/device.json';
	$rev = call($url, 'POST', array('page' => '1'));
	$rev = json_decode($rev, true);
	var_dump($rev);
```
####[返回结果](#json_result)
``` json
	{
		"code": 10000,
		"msg": "get monitor attribute success.",
		"data": {
			"result": [
				{
					"attr_id": "1",
					"monitor_id": "2",
					"attr_name": "monitor_attr_001",
					"attr_display_name": "",
					"form_type": "1",
					"form_data": ""
				},
				{
					"attr_id": "2",
					"monitor_id": "2",
					"attr_name": "monitor_attr_002",
					"attr_display_name": "",
					"form_type": "1",
					"form_data": ""
				},
				{
					"attr_id": "3",
					"monitor_id": "2",
					"attr_name": "monitor_attr_003",
					"attr_display_name": "",
					"form_type": "1",
					"form_data": ""
				},
				{
					"attr_id": "4",
					"monitor_id": "2",
					"attr_name": "monitor_attr_004",
					"attr_display_name": "",
					"form_type": "1",
					"form_data": ""
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
`attr_id` | int | 监控器属性 ID
`monitor_id` | int | 监控器 ID
`attr_name` | string | 监控器属性名称
`attr_display_name` | string | 监控器属性描述信息
`form_type` | string | 监控器属性表单类型
`form_data` | string | 监控器属性表单数据
