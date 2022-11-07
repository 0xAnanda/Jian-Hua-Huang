# Connecting to MySQL
from re import L
import mysql.connector
from password import MySQLpassword

dbconfig= {
    "database": "weHelp",
    "user": "root"
}
connection = mysql.connector.connect(

                        password=MySQLpassword(),
                        pool_name = "mypool",       
                        pool_size = 3,              
                        **dbconfig                  
                        )
print("成功連線MySQL")


# 載入Flask 所有相關的工具
from flask import *
# 建立 Application 物件， 靜態檔案處理設定
app= Flask(
    __name__,
    static_folder="public",
    static_url_path="/"
)

@app.route("/api/member/<username>")
def api(username):
    username= request.args.get("username")
    cursor= connection.cursor(buffered=True)
    sql_email="SELECT id, name, username FROM members WHERE username = %s "           #'"+ email +"'
    cursor.execute(sql_email, [username])
    datas= cursor.fetchone()
    print(datas)
    return jsonify(datas)








if __name__ == '__main__':
    app.run(port=3000 ,debug=True)