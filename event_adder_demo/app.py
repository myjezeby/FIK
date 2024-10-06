from flask import Flask, render_template, url_for, request, redirect, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)
current_profile_info = None
ROLES = ["student", "teacher", "parent"]

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Task %r>' % self.id

class Users(db.Model):  #error, need to debug
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return '<User %r>' % self.name


@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        event_content = request.form['content']
        new_event = Todo(content=event_content)
        
        try:
            db.session.add(new_event)
            db.session.commit()
            return redirect('/')
        except:
            return 'There was an error'
            
        
    else:
        events = Todo.query.all()
        users = Users.query.all()
        return render_template("index.html", events=events, users=users)

@app.route('/delete/<int:id>')
def delete_event(id):
    event_to_delete = Todo.query.get_or_404(id)
    
    try:
        db.session.delete(event_to_delete)
        db.session.commit()
        return redirect('/')
    except:
        return "There was a problem deleting that event"
    
@app.route('/update/<int:id>', methods={'GET', 'POST'})
def update(id):
    event = Todo.query.get_or_404(id)
    
    if request.method == 'POST':
        event.content = request.form['content']
        
        try:
            db.session.commit()
            return redirect('/')
        except:
            return 'There was an issue updating your event'
            
    else:
        return render_template('update.html', event=event)

#   function for getting the id and name of current logged in user
@app.route('/profile_process', methods=['POST'])
def profile_process():
    global current_profile_info # [name, surname, id, role]
    data = request.json['profile_data'] # retrieve the data sent from JavaScript
    print(data)
    current_profile_info = [data["first_name"], data["last_name"], data["id"], data["role"]]
    return redirect('/')
    
@app.route('/submit/', methods=['POST', 'GET'])
def submit():
    if request.method == 'POST':
        users = Users.query.all()
        user_name = current_profile_info[0] + " " + current_profile_info[1]
        user_id = current_profile_info[2]
        for user in users:
            if user.id == user_id:
                print("There is already a user by that name!")
                return redirect('/')
                
        new_user = Users(name=user_name, id=user_id)

        try:
            db.session.add(new_user)
            db.session.commit()
            print(new_user)
            return redirect('/')
        except:
            return ("There was an error")    
    
@app.route('/delete_user/<int:id>')
def delete_user(id):
    if current_profile_info == None:
        return "You have to log in!"
    if current_profile_info[2] != id:
        return "You can only delete yourself!"
    
    user_to_delete = Users.query.get_or_404(id)
    
    try:
        db.session.delete(user_to_delete)
        db.session.commit()
        return redirect('/')
    except:
        return "There was a problem deleting that user"  
    
@app.route('/role_permission/', methods=['POST', 'GET'])
def role_permission():
    role = request.form['role_name']
    print(role)
    if role in ROLES:
        if current_profile_info != None:
            current_profile_info[3] = role
    return redirect("/")
    
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)
    
