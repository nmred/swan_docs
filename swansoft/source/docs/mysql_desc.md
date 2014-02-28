title: Smeta 产品数据字典
next: inner_api
prev: evn_deploy
---

### swan_soft 数据库 ###

####sequence_global####

 - | 属性名
--- | --- 
 表名 |sequence_global
 描述 | 维护全局的数据表的唯一序列号
 Engine |  InnoDB
 编码 | utf8
 主键 | `table_name`

 字段名 | 类型 | nullable | 宽度 | 默认值  | auto | unsigned 
 --- | --- | --- | --- | ---  | --- | --- 
table_name | varchar | false | 64 |  |   |  
 | 维护序列号的表名称 ||||||
sequence_id | int | false | 11 |  |   | true
 | 自增长 ID ||||||
####sequence_device####

 - | 属性名
--- | --- 
 表名 |sequence_device
 描述 | 设备成员数据表的唯一序列号
 Engine |  InnoDB
 编码 | utf8
 主键 | `device_id`,`table_name`

 字段名 | 类型 | nullable | 宽度 | 默认值  | auto | unsigned 
 --- | --- | --- | --- | ---  | --- | --- 
device_id | int | false | 11 |  |   | true
 | 设备 ID ||||||
table_name | varchar | false | 64 |  |   |  
 | 维护序列号的表名称 ||||||
sequence_id | int | false | 11 |  |   | true
 | 自增长 ID ||||||
####sequence_monitor####

 - | 属性名
--- | --- 
 表名 |sequence_monitor
 描述 | 监控器数据表的唯一序列号
 Engine |  InnoDB
 编码 | utf8
 主键 | `monitor_id`,`table_name`

 字段名 | 类型 | nullable | 宽度 | 默认值  | auto | unsigned 
 --- | --- | --- | --- | ---  | --- | --- 
monitor_id | int | false | 11 |  |   | true
 | 设备 ID ||||||
table_name | varchar | false | 64 |  |   |  
 | 维护序列号的表名称 ||||||
sequence_id | int | false | 11 |  |   | true
 | 自增长 ID ||||||
####sequence_graph####

 - | 属性名
--- | --- 
 表名 |sequence_graph
 描述 | 图标定义数据表的唯一序列号
 Engine |  InnoDB
 编码 | utf8
 主键 | `graph_id`,`table_name`

 字段名 | 类型 | nullable | 宽度 | 默认值  | auto | unsigned 
 --- | --- | --- | --- | ---  | --- | --- 
graph_id | int | false | 11 |  |   | true
 | 图表 ID ||||||
table_name | varchar | false | 64 |  |   |  
 | 维护序列号的表名称 ||||||
sequence_id | int | false | 11 |  |   | true
 | 自增长 ID ||||||
####device_key####

 - | 属性名
--- | --- 
 表名 |device_key
 描述 | 监控的设备关键表
 Engine |  InnoDB
 编码 | utf8
 主键 | `device_id`

 字段名 | 类型 | nullable | 宽度 | 默认值  | auto | unsigned 
 --- | --- | --- | --- | ---  | --- | --- 
device_id | int | false | 11 |  |   | true
 | 设备 id ||||||
device_name | varchar | false | 255 |  |   |  
 | 设备名称(唯一) ||||||
####device_basic####

 - | 属性名
--- | --- 
 表名 |device_basic
 描述 | 监控的设备基本信息表
 Engine |  InnoDB
 编码 | utf8
 主键 | `device_id`

 字段名 | 类型 | nullable | 宽度 | 默认值  | auto | unsigned 
 --- | --- | --- | --- | ---  | --- | --- 
device_id | int | false | 11 |  |   | true
 | 设备 id ||||||
device_display_name | varchar | false | 255 |  |   |  
 | 设备显示名称 ||||||
host_name | varchar | false | 255 |  |   |  
 | 设备主机地址 ||||||
####device_monitor####

 - | 属性名
--- | --- 
 表名 |device_monitor
 描述 | 监控的设备的监控器
 Engine |  InnoDB
 编码 | utf8
 主键 | `dm_id`

 字段名 | 类型 | nullable | 宽度 | 默认值  | auto | unsigned 
 --- | --- | --- | --- | ---  | --- | --- 
dm_id | int | false | 11 |  |   | true
 | 设备监控器 id ||||||
dm_name | varchar | false | 255 |  |   |  
 | 设备监控器名称 ||||||
device_id | int | false | 11 |  |   | true
 | 设备 id ||||||
monitor_id | int | false | 11 |  |   | true
 | 监控器 id ||||||
####device_monitor_params####

 - | 属性名
--- | --- 
 表名 |device_monitor_params
 描述 | 监控器参数
 Engine |  InnoDB
 编码 | utf8
 主键 | `attr_id`,`device_id`,`dm_id`

 字段名 | 类型 | nullable | 宽度 | 默认值  | auto | unsigned 
 --- | --- | --- | --- | ---  | --- | --- 
attr_id | int | false | 11 |  |   | true
 | 监控器属性 id ||||||
device_id | int | false | 11 |  |   | true
 | 设备 id ||||||
dm_id | int | false | 11 |  |   | true
 | 设备监控器 id ||||||
value | varchar | false | 255 |  |   |  
 | 属性值 ||||||
####monitor_basic####

 - | 属性名
--- | --- 
 表名 |monitor_basic
 描述 | 监控器管理
 Engine |  InnoDB
 编码 | utf8
 主键 | `monitor_id`

 字段名 | 类型 | nullable | 宽度 | 默认值  | auto | unsigned 
 --- | --- | --- | --- | ---  | --- | --- 
monitor_id | int | false | 11 |  |   | true
 | 监控器 id ||||||
monitor_name | varchar | false | 255 |  |   |  
 | 监控器名称 ||||||
monitor_display_name | varchar | false | 255 |  |   |  
 | 监控器显示名称 ||||||
steps | int | false | 11 |  |   | true
 | 监控器存储 rrd 的间隔时间 (秒) ||||||
####monitor_attribute####

 - | 属性名
--- | --- 
 表名 |monitor_attribute
 描述 | 监控器属性管理
 Engine |  InnoDB
 编码 | utf8
 主键 | `attr_id`,`monitor_id`

 字段名 | 类型 | nullable | 宽度 | 默认值  | auto | unsigned 
 --- | --- | --- | --- | ---  | --- | --- 
attr_id | int | false | 11 |  |   | true
 | 监控器属性 id ||||||
monitor_id | int | false | 11 |  |   | true
 | 监控器 id ||||||
attr_name | varchar | false | 255 |  |   |  
 | 属性名称 ||||||
attr_display_name | varchar | false | 255 |  |   |  
 | 属性显示名称 ||||||
form_type | varchar | false | 255 |  |   |  
 | 属性表单类型 ||||||
form_data | varchar | false | 255 |  |   |  
 | 属性表单数据 ||||||
attr_default | varchar | false | 255 |  |   |  
 | 属性默认值 ||||||
####monitor_metric####

 - | 属性名
--- | --- 
 表名 |monitor_metric
 描述 | 监控器收集数据项
 Engine |  InnoDB
 编码 | utf8
 主键 | `metric_id`,`monitor_id`

 字段名 | 类型 | nullable | 宽度 | 默认值  | auto | unsigned 
 --- | --- | --- | --- | ---  | --- | --- 
metric_id | int | false | 11 |  |   | true
 | 数据项 id ||||||
metric_name | varchar | false | 255 |  |   |  
 | 数据项名称 ||||||
monitor_id | int | false | 11 |  |   | true
 | 监控器 id ||||||
collect_every | int | false | 11 |  |   | true
 | 轮询周期 ||||||
time_threshold | int | false | 11 |  |   | true
 | 收集数据超时 ||||||
tmax | int | false | 11 |  |   | true
 | 没有收到数据的最长时间 ||||||
dst_type | tinyint | false | 1 | 1 |   | true
 | 数据入库处理规则 ||||||
vmin | varchar | false | 255 | U |   |  
 | 数据的最小值 ||||||
vmax | varchar | false | 255 | U |   |  
 | 数据的最大值 ||||||
unit | varchar | false | 255 |  |   |  
 | 数据项的单位 ||||||
title | varchar | false | 255 |  |   |  
 | 数据项标题 ||||||
####monitor_archive####

 - | 属性名
--- | --- 
 表名 |monitor_archive
 描述 | 监控器数据归档规则
 Engine |  InnoDB
 编码 | utf8
 主键 | `archive_id`,`monitor_id`

 字段名 | 类型 | nullable | 宽度 | 默认值  | auto | unsigned 
 --- | --- | --- | --- | ---  | --- | --- 
archive_id | int | false | 11 |  |   | true
 | 归档 id ||||||
monitor_id | int | false | 11 |  |   | true
 | 监控器 id ||||||
title | varchar | false | 255 |  |   |  
 | 归档规则标题 ||||||
cf_type | int | false | 11 |  |   | true
 | 归档运算类型 ||||||
xff | varchar | false | 255 | 0.5 |   |  
 | 无效数据判断界限 ||||||
steps | int | false | 11 |  |   | true
 | 归档一个数据点合并原始数据点个数 ||||||
rows | int | false | 11 |  |   | true
 | 一共归档条目数 ||||||
####graph_basic####

 - | 属性名
--- | --- 
 表名 |graph_basic
 描述 | 监控器绘图配置
 Engine |  InnoDB
 编码 | utf8
 主键 | `graph_id`

 字段名 | 类型 | nullable | 宽度 | 默认值  | auto | unsigned 
 --- | --- | --- | --- | ---  | --- | --- 
graph_id | int | false | 11 |  |   | true
 | 绘图配置 id ||||||
scope_type | tinyint | false | 1 | 1 |   |  
 | 该绘图配置作用范围 1: 全局 2：设备 3: 允许跨设备全局显示 4: 允许跨设备在提及的设备中显示 ||||||
scope_ids | varchar | false | 255 |  |   |  
 | 作用范围 IDS ||||||
title | varchar | false | 255 |  |   |  
 | 图片的顶部标题 ||||||
vlabel | varchar | false | 255 |  |   |  
 | 图片的垂直的标题 ||||||
desc | varchar | false | 255 |  |   |  
 | 图片的描述信息 ||||||
steps | int | false | 11 |  |   | true
 | 绘图的间隔点 ||||||
start | int | false | 11 |  |   | true
 | 绘图的起始点 ||||||
end | int | false | 11 |  |   | true
 | 绘图的终点 ||||||
####graph_def####

 - | 属性名
--- | --- 
 表名 |graph_def
 描述 | 监控器绘图数据项定义
 Engine |  InnoDB
 编码 | utf8
 主键 | `graph_id`,`def_id`

 字段名 | 类型 | nullable | 宽度 | 默认值  | auto | unsigned 
 --- | --- | --- | --- | ---  | --- | --- 
def_id | int | false | 11 |  |   | true
 | 绘图数据项定义 id ||||||
graph_id | int | false | 11 |  |   | true
 | 绘图配置 id ||||||
name | varchar | false | 255 |  |   |  
 | 数据项的 name ||||||
ds_name | varchar | false | 255 |  |   |  
 | RRD 数据库的数据源名 ||||||
cf_type | tinyint | false | 1 |  |   | true
 | 归并计算公式类型 ||||||
####graph_cdef####

 - | 属性名
--- | --- 
 表名 |graph_cdef
 描述 | 监控器绘图计算数据项定义
 Engine |  InnoDB
 编码 | utf8
 主键 | `graph_id`,`cdef_id`

 字段名 | 类型 | nullable | 宽度 | 默认值  | auto | unsigned 
 --- | --- | --- | --- | ---  | --- | --- 
cdef_id | int | false | 11 |  |   | true
 | 绘图计算数据项定义 id ||||||
graph_id | int | false | 11 |  |   | true
 | 绘图配置 id ||||||
name | varchar | false | 255 |  |   |  
 | 数据项的 name ||||||
operator | varchar | false | 255 |  |   |  
 | 计算表达式 ||||||
####graph_graph####

 - | 属性名
--- | --- 
 表名 |graph_graph
 描述 | 监控器绘图定义
 Engine |  InnoDB
 编码 | utf8
 主键 | `graph_id`,`dgraph_id`

 字段名 | 类型 | nullable | 宽度 | 默认值  | auto | unsigned 
 --- | --- | --- | --- | ---  | --- | --- 
dgraph_id | int | false | 11 |  |   | true
 | 绘图定义 id ||||||
graph_id | int | false | 11 |  |   | true
 | 绘图配置 id ||||||
data_id | int | false | 11 |  |   | true
 | 数据项 id ||||||
color | varchar | false | 255 |  |   |  
 | 图标的颜色 ||||||
图例说明 | varchar | false | 255 |  |   |  
 | 图例说明描述 ||||||
####graph_comment####

 - | 属性名
--- | --- 
 表名 |graph_comment
 描述 | 监控器绘图注释性文字定义
 Engine |  InnoDB
 编码 | utf8
 主键 | `graph_id`,`comment_id`

 字段名 | 类型 | nullable | 宽度 | 默认值  | auto | unsigned 
 --- | --- | --- | --- | ---  | --- | --- 
comment_id | int | false | 11 |  |   | true
 | 绘图注释定义 id ||||||
graph_id | int | false | 11 |  |   | true
 | 绘图配置 id ||||||
comment | varchar | false | 255 |  |   |  
 | 图片的注释信息 ||||||
####graph_gprint####

 - | 属性名
--- | --- 
 表名 |graph_gprint
 描述 | 监控器绘图格式化的文字信息
 Engine |  InnoDB
 编码 | utf8
 主键 | `graph_id`,`gprint_id`

 字段名 | 类型 | nullable | 宽度 | 默认值  | auto | unsigned 
 --- | --- | --- | --- | ---  | --- | --- 
gprint_id | int | false | 11 |  |   | true
 | 绘图格式化信息 id ||||||
graph_id | int | false | 11 |  |   | true
 | 绘图配置 id ||||||
data_id | int | false | 11 |  |   | true
 | 格式化的变量名 id ||||||
cf_type | tinyint | false | 11 |  |   | true
 | 运算类型 ||||||
format | varchar | false | 255 |  |   |  
 | 格式化的字符串定义 ||||||
