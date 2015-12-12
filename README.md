# ly

## 简介
一个完全由React实现的Hexo主题

**目前仅支持中文，评论仅支持多说，统计仅支持百度**

## 安装

```bash
$ npm install --save hexo-generator-async
$ cd your-hexo-blog
$ git clone git@github.com:LingyuCoder/ly.git themes/ly
```

## 使用

修改`your_hexo_blog/_config.yml`中的`theme`值为`ly`

## 配置

见[config.yml中的注释](https://github.com/LingyuCoder/ly/blob/master/_config.yml)

## 开发
依赖gulp，webpack，请先安装，安装完成后在source文件夹下新建一个`index.html`文件：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
</head>
<body>
	<script type="text/javascript" src="js/blog.js"></script>
</body>
</html>
```

然后执行：

```bash
$ npm install
$ gulp dev
$ open http://127.0.0.1:9999/source/index.html
```

构建：

```bash
$ gulp
```

## SEO

![hehe](http://7q5asf.com1.z0.glb.clouddn.com/other/1a004e061d950a7be17ebc4108d162d9f3d3c9f1.jpg)

## 协议
The MIT License (MIT)

Copyright (c) 2015 Lingyu Wang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
