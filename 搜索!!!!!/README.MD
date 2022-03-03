### 搜索
> 基本上也是copy了某一个仓库的代码，实现了搜索特定单词后返回图片的功能
- 使用了`grid`布局来排列图片
- `@media`规定不同宽度下一行图片数量
- 使用`fetch`获取`https://www.themealdb.com/api/json/v1/1`数据并渲染到页面上
### TODO
- 感觉目前的渲染方式很适合改写成jsx的形式，以后可能会在react里面重构(?
- 本来想用`https://api.lolicon.app/setu/v2`这个api的，但debug了好几个小时以后还是不行，总是显示`type error`，根据segment fault的说法可能是服务器不支持跨源啥的orz
- 以后可能会再看看，或者自己写一个api(?
- 貌似是因为fetch的时候采用了no-cors模式以解决跨源策略，但是no-cors模式不能接收返回的json数据，这样就导致了新的报错
