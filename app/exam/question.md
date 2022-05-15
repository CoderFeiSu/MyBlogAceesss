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
  * SAN：存储区域网（Storage Area Networking）,通过光纤交换机连接

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

* 第20题
  * 调查

* 第33题
  * SMTP(简单邮件传输协议)，主要用来发送邮件
  * POP3(邮局通讯协定第三版)（Post Office Protocol 3）,主要用来接收邮件
  * IMAP全称是Internet Mail Access Protocol，即交互式邮件存取协议，它是跟POP3类似邮件访问标准协议之⼀。

* 第40题

* 第45题
  * DAS:  即直接连接存储（Direct Attached Storage）
  * NAS:  即网络接入存储（Network Attached Storage）,通过TCP/IP协议访问数据，采用业界标准文件共享协议，FTP、CIFS实现共享。

* 第46题
  * https://baike.baidu.com/item/COM%2B/6036302?fr=aladdin 百度百科的介绍

* 第49题
  * 中间件顾名思义就是充当中间人角色，充当代理角色，

* 第53题
  * DNS域名解析，类似于  姓名和身份证号码 对应关系

* 第65题同48题
  * 原型法：再不能够全面了解用户需求的情况下使用的方法

* 第68题同53题

* 第77题
  * 交换机工作在OSI七层的第二层(数据链路层)，IP属于第三层(网络层)

* 第109题
  * 详细介绍：https://baijiahao.baidu.com/s?id=1715326572593354648&wfr=spider&for=pc
  * OLTP（on-line transaction processing）为联机事务处理。
  * OLAP（On-Line Analytical Processing）为联机分析处理。

* 第111题
  * 详细介绍：http://www.grt-china.com/xinwenzixun/551.html
  * 快速以太网：10MB/S
  * 高速以太网：100MB/S

* 第124题
  * 详细说明：https://baike.baidu.com/item/%E6%95%B0%E6%8D%AE%E9%93%BE%E8%B7%AF%E5%B1%82/4329290
  * 点对点协议（Point-to-Point Protocol），宽带拨号
  * HDLC：高级数据链路协议（High-Level Data Link Protocol）
  * 异步传输模式（Asynchronous Transfer Mode）；
  * FDDI:光纤分布式数据接口（Fiber Distributed Data Interface，缩写FDDI）


* 第133题
  * 详细介绍：https://www.jianshu.com/p/293729045ec7
  * WPAN（Wireless Personal Area Network Communication Technologies），一般指无线个人局域网通讯技术。例如手机蓝牙相互传资料，红外线，10米之内
  * WLAN Wireless Local Area Network的简称，无线局域网，办公室内使用的网络
  * WMAN 无线城域网(Wireless Metropolitan Area Network，WMAN)主要用于解决城域网的接入问题，覆盖范围为几千米到几十千米
  * WWAN Wireless Wide Area Network的简称，无线广域网，WWAN连接地理范围较大，常常是一个国家或是一个洲
  * 4G: FDD-LTE(国外使用的多)  TD-LTE(国内使用的多)  
  * 3G:  CDMA技术

* 第137题和第149题
  * 射频识别（RFID）是 Radio Frequency Identification 的缩写,是自动识别技术的一种，通过无线射频方式进行非接触双向数据通信，

* 第198题
  * MQ: message queue

* 第239题
  * ISDN（Integrated Service Digital Network）中文名称是综合业务数字网，就是采用的数字交换和数字传输的电信网的简称，中国电信将其俗称为"一线通"。 　


* ERP
* 5G关联88题
* 用例图，数据图
* SOA
* ISDN
* FDDI物理层还是数据链路层