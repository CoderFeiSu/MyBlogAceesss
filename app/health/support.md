# 系统级修改步数插件

## 插件说明
* 修改系统自带健康App中的步数，完美达到让第三方App读取修改后的数据，数据可以随意修改，简单易操作！本插件仅供交流学习，切勿非法使用！
* 需要第三方App开启相应的权限。如果没有开启权限，不管是否使用插件，三方App都不能读取健康中的数据。
* 如有技术问题，请发邮件到`zhulongfei28@gmail.com`，谢谢。

## 安装说明
* BigBoss源是Cydia内置源，直接在搜索框输入`改个步数`就可以进行搜索。如果搜索不到，首先把BigBoss源删除，然后重新添加。
* 如果BigBoss源被删除，需要如下操作：点击`Cydia` App->点击底部标签栏`cydia`->点击`更多软件源`->找到DEFAULT SOURCES下的`BigBoss`进行添加。
* 有可能在其它源上也看到这个插件，不过每次会首先在BigBoss上更新。

## 使用说明
* 打开系统自带的`健康`App，就是下面这个图标，双击打开
![](./support_files/HowToUseHealthAddSteps-01.png)
* iOS11上操作如下：点击底部标签栏`健康数据`->点击左上`健康记录`->点击今天下的`步数`->点击右上角`+`按钮->输入需要添加的步数->点击右上角`添加`按钮
![](./support_files/HowToUseHealthAddSteps-02.png)
* iOS14上操作如下：点击底部标签栏`浏览`->点击健康类别下的`健康记录`->点击今天下的`步数`->点击右上角`添加数据`按钮->输入需要添加的步数->点击右上角`添加`按钮
![](./support_files/HowToUseHealthAddSteps-03.png)
* 其它系统版本，请参考以上两个版本进行操作。

## 注意事项
* 从安全角度考虑，请不要使用抓包软件(Charles、Fiddler等)或VPN软件(Shadowsocks、Stream等)。如果使用了，是不能正常添加步数的，切记。
* 不要一下添加很多步数，要分时段添加。经过测试，正常人步行速度在100-150步。如果添加过多，后果自负。

## 版本历史
### 1.3.0：2021年7月6日
* 修复bug，优化性能。

### 1.2.1：2021年6月20日
* 支持iOS11以上系统。
* 修复某些崩溃bug。
* 优化广告系统。

### 1.2.0：2021年6月4日
* 接入搜索优化广告，两种广告类型，可供选择。
* 按照广告提示，进行相应的操作。

### 1.0.1：2021年5月20日
* 移除支付宝支付功能，不再支持购买VIP。
* 接入点击广告。点击相应广告，每天可以免费使用三次。

### 0.0.3：2020年9月18日
* 接入支付宝功能，可以购买VIP，每天无限次添加步数。
* 普通用户，每天可以免费使用一次。


<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- HeaderFooterAD -->
<ins class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-6694280780402885"
    data-ad-slot="9902930001"
    data-ad-format="auto"
    data-full-width-responsive="true"></ins>
<script>
    (adsbygoogle = window.adsbygoogle || []).push({});
</script>   