from flask import Flask
from flask import request
from flask import render_template
from flask import redirect
from flask import session
from flask import url_for

app=Flask(__name__, static_folder="public", static_url_path="/")
app.secret_key="week4Secret"

@app.route("/", methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        number=request.form['number']
        return redirect(url_for('square', number=number))
    return render_template("index.html")
    # if session['password'] not in session:
    #     return render_template("index.html")
    # else:
    #     return redirect('/member')

    

@app.route("/signin", methods= ['POST', 'GET'])
def signin():
    if request.method == 'POST':
        account = request.form['account']
        password = request.form['password']
        session['name'] = request.form['name']
        if account == "test" and password == "test":
            session['account'] = account
            session['password'] = password
            session.permanent =True  # 長期有效，一個月的時間有效

            if session['account'] == "test" and session['password'] == "test":
                return redirect('/member')
        else:
            if account == "" or password == "" :
                message= "還沒輸入帳號 or 密碼。。"
            else:
                message= "帳號 or 密碼打錯哦"
            
            return redirect(url_for("error", message= message))



@app.route("/member")
def member():

    if session['account'] == "test" and session['password'] == "test":
        name = session['name']
        return render_template("member.html",name=name)
    else:
        return redirect(url_for('index'))



@app.route("/error" , methods=['GET'])
def error():
    message= request.args.get("message", "")
    # if session['account'] =="" or session['password'] == "" :
    #     message = "請輸入帳號、密碼"
    # else:
    #     message ="帳號、或密碼輸入錯誤"
    return  render_template('error.html', message= message)



@app.route('/logout')
def logout():
    # remove the username from the session if it's there
    session.clear()   #清除所有session內容
    # app.secret_key = os.urandom(11) 同上
    # session['account'] = False
    # session['password'] = False
    #flash('You were logged out')
    # print(session.get('username'))
    return redirect (url_for('index'))


@app.route("/square/<number>", methods = ["GET", "POST"])
def square(number):
    result= int(number) **2
    return render_template("square.html", result=result)


    

if __name__ == '__main__':
    app.run(port=3000 ,debug=True)




