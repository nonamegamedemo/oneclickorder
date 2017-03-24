# -*- coding: utf-8 -*-
import urllib2
import codecs
import sys
import getopt
import os
import shutil
from lxml import etree

def getTopic(className,contentMainBody):
    item = contentMainBody.xpath(u'//i[@class="'+className+'"]/ancestor::span')
    if item is None or len(item) == 0:
        return ''
    else:
        return item[0].xpath('string(.)').strip()

###input
argv = sys.argv[1:]
inurl="http://you.ctrip.com/travels/finland100092/3358897.html"
ofilename="content"
try:
    opts, args = getopt.getopt(argv,"hi:n:",["inurl=","ofilename="])
except getopt.GetoptError:
    print 'lmxl.py -i <inputurl> -n <outputfilename>'
    sys.exit(2)
for opt, arg in opts:
    if opt == '-h':
        print 'lmxl.py -i <inputurl> -o <outputfilename>'
        sys.exit()
    elif opt in ("-i", "--inurl"):
        inurl = arg
    elif opt in ("-n", "--ofilename"):
        ofilename = arg
response = urllib2.urlopen(inurl)
html = response.read()
html = etree.HTML(html)
###新建结果文件夹
try:
    os.mkdir(ofilename)
except:
    shutil.rmtree(ofilename)
    os.mkdir(ofilename)
###获取游记主体
contentMainBody = html.xpath(u'//div[@class="ctd_content"]')[0]
###获取游记抬头
topics = []
topics.append(getTopic("days",contentMainBody))
topics.append(getTopic("times",contentMainBody))
topics.append(getTopic("costs",contentMainBody))
topics.append(getTopic("whos",contentMainBody))
topics.append(getTopic("plays",contentMainBody))
###获取游记经过地点
pois = contentMainBody.xpath(u'//div[@class="author_poi"]/descendant::a[@class="gs_a_poi"]')
###img节点替换src为data-original内容
imgs = contentMainBody.xpath(u'//img')
for img in imgs:
    img.set('src',img.get('data-original'))
###主体
body = contentMainBody.xpath(u'//p')
###生成HTML页面的模板
gsHTMLTemplate = '''
<html>
<head>
<link charset="utf-8" type="text/css" rel="stylesheet" href="../common.css" />
<link charset="utf-8" type="text/css" rel="stylesheet" href="../travel.css" />
<link charset="utf-8" type="text/css" rel="stylesheet" href="../fed.css" />
<script charset='utf-8' type='text/javascript' src='../common.js'></script>
<script charset='utf-8' type='text/javascript' src='../travel.js'></script>
<script charset='utf-8' type='text/javascript' src='../fed.js'></script>
<script charset='utf-8' type='text/javascript' src='../rms.js'></script>
</head>
<body><div class="bgf2f2f2"><div class="content cf"><div class="ctd_main"><div class="ctd_main_body">%s</div></div></div></div></body>
</html>
'''
pathPre = "./"+ofilename+"/"+ofilename
with codecs.open(pathPre+'.txt', 'wb', encoding='utf-8') as f:
    for topic in topics:
        if topic != '':
            f.write("\n"+topic)
    f.write(u"\n途经：")
    for idx,poi in enumerate(pois):
        if idx != 0:
            f.write("->")
        f.write(poi.xpath('string(.)').strip())
with codecs.open(pathPre+'.html', 'wb', encoding='utf-8') as f:
    f.write(gsHTMLTemplate % (etree.tostring(contentMainBody,encoding='unicode').replace("&#13;","")))
