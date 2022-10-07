# 要求一：Python 取得網路上的資料並儲存到檔案中
# 台北市政府提供景點公開資料連線網址如下：
# https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json
# 請撰寫一隻 Python 程式，能從以上網址取得資料，並且將景點資料用一行一筆資料，每個欄
# 位用逗號隔開的格式，輸出到 data.csv 的檔案中，請將生成的 data.csv 檔案包含在你的作業
# 資料夾中。
# 請根據 xpostDate 欄位，僅輸出 2015 年以後 ( 包含 2015 年 ) 的資料。
# 提醒：區域資料請參考原始資料的地址欄位，必須是三個字，並且為以下區域的其中一個：中
# 正區、萬華區、中山區、大同區、大安區、松山區、信義區、士林區、文山區、北投區、內湖區、
# 南港區。
# data.csv 的資料格式
# 景點名稱,區域,經度,緯度,第一張圖檔網址
# 景點名稱,區域,經度,緯度,第一張圖檔網址
# ...
# data.csv 的資料範例
# 新北投溫泉區,北投區,123.5446,24.5312,https://www.travel.taipei/pic/11000848.jpg
# 士林官邸,士林區,122.4564,23.546     ,https://www.travel.taipei/pic/11000999.jpg



import urllib.request as req
import json
import csv
src ="https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json"
with req.urlopen(src) as response:
    data= json.load(response)

info = data["result"]["results"]
with open("data.csv", "w", newline="" , encoding= "utf-8") as file:
    writer = csv.writer(file)
    result=[]
    for place in info:
        fileStrLong=place["file"].lower().find(".jpg")
        place["file"]=place["file"][0:fileStrLong+4]
        if int(place["xpostDate"][0:4]) >= 2015:
            datas= (place["stitle"], place["address"][5:8], place["latitude"], place["latitude"], place["file"] )
            result.append(datas)
    writer.writerows(result)

print("=========================================================================")

# 要求二：Python 網頁爬取資料並儲存到檔案中 (Optional)
# PTT 電影版的網址如下：
# https://www.ptt.cc/bbs/movie/index.html
# 請撰寫一隻 Python 程式，從以上網頁爬取每一篇文章的標題，並且能持續往上一頁爬取，總
# 共爬取十頁。本題開放使用 BeautifulSoup 這個第三方套件。
# 程式在取得標題後，以一行一標題的格式，輸出到 movie.txt 中，將生成的 movie.txt 檔案包含
# 在你的作業資料夾中，並符合以下規範：
# 1. 僅輸出開頭為 [好雷]、[普雷]、[負雷] 的文章標題。
# 2. 輸出時，先輸出 [好雷] 開頭的所有標題，然後依序輸出 [普雷] 和 [負雷] 開頭的所有標題。
# movie.txt 的資料格式
# [好雷] 某篇文章標題
# [好雷] 某篇文章標題
# …
# [普雷] 某篇文章標題
# [普雷] 某篇文章標題
# …
# [負雷] 某篇文章標題
# …
# movie.txt 的資料範例
# [好雷] 拉辛正傳
# [好雷] 海洋天堂
# [普雷] 沼澤謀殺案
# [普雷] 奇異博士2 (含汪達幻視雷)
# [負雷]怪獸與鄧不利多的秘密，是在演八點檔嗎？
# [負雷] 狼狩獵
# ...
# 要求二：Python 網頁爬取資料並儲存到檔案中 (Optional)
# PTT 電影版的網址如下：
# https://www.ptt.cc/bbs/movie/index.html
# 請撰寫一隻 Python 程式，從以上網頁爬取每一篇文章的標題，並且能持續往上一頁爬取，總
# 共爬取十頁。本題開放使用 BeautifulSoup 這個第三方套件。
# 程式在取得標題後，以一行一標題的格式，輸出到 movie.txt 中，將生成的 movie.txt 檔案包含
# 在你的作業資料夾中，並符合以下規範：
# 1. 僅輸出開頭為 [好雷]、[普雷]、[負雷] 的文章標題。
# 2. 輸出時，先輸出 [好雷] 開頭的所有標題，然後依序輸出 [普雷] 和 [負雷] 開頭的所有標題。
# movie.txt 的資料格式
# [好雷] 某篇文章標題
# [好雷] 某篇文章標題
# …
# [普雷] 某篇文章標題
# [普雷] 某篇文章標題
# …
# [負雷] 某篇文章標題
# …
# movie.txt 的資料範例
# [好雷] 拉辛正傳
# [好雷] 海洋天堂
# [普雷] 沼澤謀殺案
# [普雷] 奇異博士2 (含汪達幻視雷)
# [負雷]怪獸與鄧不利多的秘密，是在演八點檔嗎？
# [負雷] 狼狩獵
# ...
import urllib.request as req

dic ={
    "好雷" :[] ,
    "普雷":[] ,
    "負雷" :[]
    } 
def getData(url):

    request= req.Request(url, headers= {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
    })

    with req.urlopen(request) as respones:
        data = respones.read().decode("utf-8")

        # 解析資料原始碼
    import bs4
    root = bs4.BeautifulSoup(data, "html.parser")
    titles = root.find_all("div", class_= "title")


    for title in titles:
        if title.a != None and title.a.string[1:3] == "好雷":
            dic["好雷"].append(title.a.string)

        elif title.a != None and title.a.string[1:3] == "普雷" :
            dic["普雷"].append(title.a.string)

        elif title.a != None and title.a.string[1:3] == "負雷":
            dic["負雷"].append(title.a.string)




    
    # for key, value in dic.items():
        # for result in value:
        #     if "好雷" in result:
        #         result1.append(result)
        #     elif "普雷" in result:
        #         result2.append(result)
        #     elif "負雷" in result:
        #         result3.append(result)
        


    nextLink= root.find("a", string= "‹ 上頁")
    return nextLink["href"]

pageURL = "https://www.ptt.cc/bbs/movie/index.html"
count = 0
while count < 10:
    pageURL= "https://www.ptt.cc"+ getData(pageURL)
    count += 1

with open("movie.txt", "w", encoding="utf-8", ) as file:

    movie1=dic.get("好雷")
    movie2=dic.get("普雷")
    movie3=dic.get("負雷")
    
    for result1 in movie1:
        file.writelines(result1+ '\n') 
    for result2 in movie2:
        file.writelines(result2+ '\n')
    for result3 in movie3:
        file.writelines(result3+ '\n')



print("=========================================================================")
