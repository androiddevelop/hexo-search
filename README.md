# Hexo-Search

#### hexo博客搜索插件 

jekyll博客搜索插件请前往 [Jekyll-Search](https://github.com/androiddevelop/jekyll-search)

### 截图

![hexo-search.jpg](hexo-search.jpg)

也可以打开[http://codeboy.me](http://codeboy.me)查看效果

### 操作

1. 点击右下角图标进行搜索
2. 双击ctrl键进行搜索或关闭
3. 搜索页面点击右上角关闭按钮关闭搜索试图

### 加入步骤

1. 安装搜索插件:

	```
	npm install hexo-search-data-plugin --save
	```
	
	或者在`package.json`中添加一下依赖：
	
	```
	"hexo-search-data-plugin":"^1.0.0"
	```
	之后执行`npm update`即可

2. 将search目录放至于hexo主题的`source`文件夹下，其中search目录结构如下:

		search
		├── cb-footer-add.html
		├── css
		│   └── cb-search.css
		├── img
		│   ├── cb-close.png
		│   └── cb-search.png
		└── js
		    ├── bootstrap3-typeahead.min.js
		    └── cb-search.js


3. 在当前主题的`layout/_partial/after-footer.ejs` 中的末尾加入 `cb-footer-add.html` 中的内容即可, 添加完毕后 `cb-footer-add.html` 文件可以删除。

> 如果主题不存在`after-footer.ejs`文件，也可以添加在`footer.ejs`中。


### 注意事项

1. `bootstrap3-typeahead.min.js` 的引入必须在`jquery.min.js`引入之后!

2. 默认联想8个，如果需要更多的话，请检索 `bootstrap3-typeahead.min.js` 中的**items:8**, 将**8**替换成自己需要的数值。

3. 文章标题请不要使用回车等符号，回车等符号会造成json解析错误。

### 更新历史

#### v1.0.1

- 添加错误console输出。搜索没提示，看console。

#### v1.0.0

 - 支持hexo博客中进行文章搜索。

> 有任何问题何以发送邮件到app@codeboy.me进行交流。


