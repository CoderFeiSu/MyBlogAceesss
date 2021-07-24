#! /bin/sh
# 谷歌分析
lines=`sed -n '1,9p' code.txt`
printf "谷歌分析内容:%s\n $lines"
printf "\n----------分割线---------\n"
#sed -i '' '13i\'$'\n$lines\n' test.html
#sed -i '' "s/\<\/head\>/${lines}/g" test.html
sed -i '' -e 's|</head>|'"${lines}"'|g' ocamloptrev


## 谷歌广告
#lines=`sed -n '12,23p' code.txt`
#printf "谷歌广告内容:%s\n $lines"


