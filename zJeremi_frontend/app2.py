from flask import Flask, render_template, url_for, request, redirect, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__) 
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)
current_profile_info = None
ROLES = ["student", "teacher", "parent"]

@app.route('/', methods=['POST', 'GET'])
def index():
    return render_template("login.html")

#   function for getting the id and name of current logged in user
@app.route('/profile_process', methods=['POST'])
def profile_process():
    global current_profile_info # [name, surname, id, role]
    data = request.json['profile_data'] # retrieve the data sent from JavaScript
    print(data)
    current_profile_info = [data["first_name"], data["last_name"], data["id"], data["role"]]
    return redirect('/')
    

    

    
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)
    