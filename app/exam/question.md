* 第1题，考察C/S和B/S作用对比
  * C/S：Client/Server模式，客户端/服务器模式。客户端通常指iOS、Android手机上面从应用商店下载的App，服务端通常指后端服务器
  * B/S：Browser/Server模式，浏览器/服务器模式。

* 第2题，各种中间件作用对比
  * 什么是中间件(https://www.zhihu.com/question/19730582)
    ```html
    个人理解：将具体业务和底层逻辑解耦的组件。大致的效果是：需要利用服务的人（前端写业务的），不需要知道底层逻辑（提供服务的）的具体实现，只要拿着中间件结果来用就好了。

    举个例子：我开了一家炸鸡店（业务端），然而周边有太多屠鸡场（底层），为了成本我肯定想一个个比价，再综合质量挑选一家屠鸡场合作（适配不同底层逻辑）。      a3由于市场变化，合作一段时间后，或许性价比最高的屠鸡场就不是我最开始选的了，我又要重新和另一家屠鸡场合作，进货方式、交易方式等等全都要重来一套（重新适配）。
    
    然而我只想好好做炸鸡，有性价比高的肉送来就行。于是我找到了一个专门整合屠鸡场资源的第三方代理（中间件），跟他谈好价格和质量后（统一接口），从今天开始，我就只需要给代理钱，然后拿肉就行。代理负责保证肉的质量，至于如何根据实际性价比，选择不同的屠鸡场，那就是代理做的事了。
    ```
  * 数据库中间件：https://blog.csdn.net/oldhunter686/article/details/107458840，应用程序直接访问数据库
  * 面向消息中间件：https://zhuanlan.zhihu.com/p/76527587，把自己的故事分享在微信公众号上，别人订阅了您的公众号就能看到你的消息
  * 分布式对象中间件：把一个人要干的三件事，分给三个人，每个人做一件事情
  * 事务中间件：https://baike.baidu.com/item/%E4%BA%8B%E5%8A%A1%E4%B8%AD%E9%97%B4%E4%BB%B6/10592166

* 第3题，软件测试
  * B 选项：软件测试从测试人员上可以分为：程序员自己测试和专业测试人员测试。程序员可以在编码过程中使用单元测试，专业测试可以在代码完成后进行测试
  * C 选项：白盒测试可以理解为在看到源代码的情况下进行测试，通常指程序员自己测试；黑盒测试可以理解为程序员开发完成后，进行打包，把包发给专业测试人员进行测试，专业测试人员是不知道源代码的。
  * D 选项：软件测试包含：测试软件崩溃bug、测试功能完整性、测试软件性能、用户体验等，测试bug只是其中的一个选项。

* 第5题，考察C/S和B/S作用对比
 * https://www.cnblogs.com/slgkaifa/p/6925880.html
 * http://blog.itpub.net/8816263/viewspace-1006692/

* 第8题
  * FTP   文件传输协议(File Transfer Protocol)
  * HTTP  超文本传输协议(Hyper Text Transfer Protocol)
  * SMTP  简单邮件传输协议（Simple Mail Transfer Protocol）
  * SNMP  简单网络管理协议（Simple Network Management Protocol）

* 第9题
  * SAN：存储区域网（Storage Area Networking）

* 第10题
  * UPS：不间断电源（Uninterrupted Power Supply）

* 第11题
  * Web Service主要在互联网上使用，而不是在局域网或单机上使用

* 第12题
  * J2EE（Java 2 Platform Enterprise Edition，Java 2 平台企业版）,j2EE就是java的企业版。
  * 容器可以理解为代码需要的运行环境
  * 构件可以理解为程序员写的代码
  * 服务可以理解为服务器提供了一个可以代码调用接口，这个接口可以调用系统服务

* 第13题
  * https://zhuanlan.zhihu.com/p/265101989
  * 数据仓库和数据库是包含和被包含的关系，一个数据仓库包含很多数据库。
  * 数据库主要用来实时更新、编辑数据，以支付宝为例，可以实时查看自己的支付情况和购买商品情况，实际上是操作了数据库。
  * 数据仓库主要用来分析每季度或每年的使用实况，更多的是查看数据，以支付宝为例，例如每年年底的消费汇总

* 第14题
  * 能力成熟度模型集成（Capability Maturity Model Integration）

* 第15题
  * UML：统一建模语言（Unified Modeling Language）

* 第33题
  * SMTP(简单邮件传输协议)，主要用来发送邮件
  * POP3(邮局通讯协定第三版)（Post Office Protocol 3）,主要用来接收邮件
  * IMAP全称是Internet Mail Access Protocol，即交互式邮件存取协议，它是跟POP3类似邮件访问标准协议之⼀。

* 第45题
  * DAS: