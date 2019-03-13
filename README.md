# vue-missevan

> 仿照M站(missevan)首页做的个人练手项目，计划使用`vue`做前端，使用`koa2`做中间层，目前基本已经完成，尚需完善

## 项目启动

``` bash
# cd vue-missevan-server，先在服务端开启api
npm install

# serve with hot reload at localhost:3000
npm run dev

# cd vue-missevan，再在前端运行
npm install

# serve with hot reload at localhost:8080
npm run dev

```

# 关于 [M站](http://www.missevan.com) 首页的数据接口说明
>注：以下内容本人仅用于学习
>
> 因为我在网上找不到公开接口，所以自己去研究了下他们首页的数据获取，未全部参透，但就做出页面来说已是足够

## catalog
> 当首页初始化时会以以下形式获取json数据http://static.missevan.com/home/sounds/201811/17/catalog_1542419447.json
>
> catalog后缀会携带时间戳，如1542419447转为时间是2018-11-17 09:50:47
>
> 经研究发现M站的catalog每隔20分钟刷新一遍，也就是说，下一次刷新为2018-11-17 10:10:47，即1542420647

### 各键值说明

#### level1

| 键 | 说明 |
| ------ | ------ |
| id | 类别序号 |
| leaves | 具体分类 |
| name | 分区主标题 |
| point | 按小鱼干 |
| time | 按时间 |

#### level2

leaves

| 键 | 说明 |
| ------ | ------ |
| id | 类别序号 |
| catalog_name | 类别名称 |
| level | 处于第几级分类 |
| name | 与catalog_name暂未发现不同 |
| pid | 上级id |
| sort | 未知 |

point

| 键 | 说明 |
| ------ | ------ |
| id | 作品序号 |
| create_time | 创建时间，时间戳 |
| duration | 作品时长，毫秒 |
| soundstr | 作品介绍 |
| all_comments | 作品评论数 |
| view_count | 作品播放数 |
| cover_image | 封面相对路径 |
| front_cover | 封面绝对路径 |
| classic | 是否是经典，用途未知 |
| video | 视频，多为null，用途未知 |

`time` 与 `point` 结构相同，不过 `ponit` 的 `classic` 基本都是true,而 `time` 基本都是false

## cRank

> 排行榜信息，与catalog类似，每日2:0:7更新(不固定，在几秒之间浮动)

### 各键值说明

#### level1
| 键 | 说明 |
| ------ | ------ |
| catalogs | 分区排行 |
| rings | 铃声排行 |

#### level2

catalogs

| 键 | 说明 |
| ------ | ------ |
| id | 编号 |
| name | 分区名字 |
| day3 | 三日排行 |
| day7 | 七日排行 |

rings

| 键 | 说明 |
| ------ | ------ |
| id | 编号 |
| name | 铃声分区名字 |
| icon | 铃声分区背景图 |
| sounds | 歌曲信息 |

## recommend

> 获取的地址类似于http://static.missevan.com/home/sounds/201811/17/recommend_5bef73d8def9e.json
>
> emmmmmm、我能力有限，不知道后缀是啥。所以这一块的url被我直接固定住了。对，就是上面那个。

### 各键值说明

| 键 | 说明 |
| ------ | ------ |
| albums | 热门音单 |
| anchors | 热门播主 |
| event | 频道推荐 |
| links | 轮播图 |
| seiyu | 未知 |
| sounds | 人气推荐 |

## leaves

> 各版块下具体分类的内容
>
> [POST]http://www.missevan.com/sound/leaves
>
> [REQUIRE]cid
>
> [RETURN]Array

## getTags

> 铃声排行分类
>
> [POST]https://www.missevan.com/rings/getTags
>
> [REQUIRE]catalog
>
> [RETURN]Array

# 项目演示

![若图片无法显示请去static下查看](https://github.com/starainy/vue-missevan/blob/master/static/missevan.gif)
