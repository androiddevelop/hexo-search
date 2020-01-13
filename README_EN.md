# Hexo-Search

#### hexo  plugin for blog search [中文使用指南](https://github.com/androiddevelop/hexo-search)

[![npm](https://img.shields.io/npm/v/hexo-search-data-plugin.svg)](https://www.npmjs.com/package/hexo-search-data-plugin)

If your blog is builded by jekyll, please visit [Jekyll-Search](https://github.com/androiddevelop/jekyll-search)

### Screenshot

![hexo-search.jpg](hexo-search.jpg)


### Demo

[https://www.codeboy.me](https://www.codeboy.me)

### Usage

1. Click the icon in the lower right corner to search
2. Double-click the ctrl key to search or close
3. On the search page, click the close button in the upper right corner to close

### Installation

1. Install the search plugin:

	```
	npm install hexo-search-data-plugin --save
	```
	
	 Or add a dependency in `package.json`:
	
	```
	"hexo-search-data-plugin":"^1.1.1"
	```
	  Then run `npm update`

2. Place the search directory under the `source` folder of the hexo theme:

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


3. Add the content of `cb-footer-add.html` to the end of` layout / _partial / after-footer.ejs` of the current theme. After the addition is complete, the `cb-footer-add.html` file can delete.

>  If the theme does not have an `after-footer.ejs` file, it can also be added to` footer.ejs`.


### Precautions

1. The introduction of `bootstrap3-typeahead.min.js` must be after the introduction of` jquery.min.js`!
2. There are 8 default associations. If you need more, please search for **items: 8** in `bootstrap3-typeahead.min.js` and replace **8** with the value you need.
3. Please do not use carriage return and other symbols in the title of the article, carriage return and other symbols will cause json parse errors.

### History

#### v1.1.1

- Support for double quotes in titles.

#### v1.1.0

- Update npm information.

#### v1.0.1

- Add console output , if you can't get something while searching，please check out the console. 

#### v1.0.0

 - Support article search in hexo blog.

## License

```
Copyright 2016 Yuedong.li

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

> Any question can send email to  app@codeboy.me.


