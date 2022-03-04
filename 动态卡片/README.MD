# 动态卡片

> 实现了点击新增卡片，卡片可输入问题与答案，点击卡片可以翻转问题和答案

- 使用了`localStorage`储存所有卡片数据，使得关闭页面再重新打开后仍然可以看到之前的数据



下面是js文件的一些伪代码，但由于看到一半感觉自己看懂逻辑了所以就懒得写后面的伪代码了


```
调用createCards()
createCards() {
	遍历cardsData中的data
    每一次访问调用createCard(data,index)
}
createCard(data,index) {
    新建一个class = 'card'的<div>
    如果index = 0,给这个<div>加上'active'的类
    新建一个保存data.question和data.answer的<div>
    给这个<div>加上click以显示答案的事件监听函数
    把当前card push到cardsEl中
    把创建的一串card代码appendChild到cardsContainer中
    调用updateCurrentText以刷新右下角的当前页/总页数
}
updateCurrentText() {
	修改currentEl的innerHtml为`(currentActivateCard+1)/cardsEl.length`
}
```
