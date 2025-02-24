from flask import Flask
from flask import render_template,redirect,request,Response,session
from flask_mysqldb import MySQL,MySQLdb

app = Flask(__name__, template_folder="template")

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)