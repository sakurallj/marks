# marks
用angular写的仿天猫菜单指令
#用法
1.current-marks-json初始化已选标签
2.lt-mark里会有一个隐藏的input customer-input-name 为 input 的name 默认为tags 
3.mark-list-url 用于获得服务器mark标签的url  e.g: /tag/tagForAjax
4.new-mark-url 用于向服务器新增mark标签的url e.g: /tag/tagForAjax?do=save
```
<lt-mark class=" form-group-right"
         current-marks-json='{"0_0_0":{"id":"26","name":"额外任务"},"0_0_2":{"id":"28","name":"玩儿玩儿"}}'
         customer-input-name="tags"
         mark-list-url="/tag/tagForAjax"
         new-mark-url="/tag/tagForAjax?do=save">
</lt-mark>
```
#效果图
![效果图](https://raw.githubusercontent.com/sakurallj/marks/master/images/example.png)
