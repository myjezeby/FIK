from flask import Flask, render_template, url_for, request, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)


class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return '<Task %r>' % self.id

class Users(db.Model):  #error, need to debug
    name = db.Column(db.String(100), nullable=False, primary_key=True)

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
    
@app.route('/submit/', methods=['POST', 'GET'])
def submit():
    if request.method == 'POST':
        users = Users.query.all()
        user_name = request.form['user_input']
        for user in users:
            if user.name == user_name:
                print("There is already a user by that name!")
                return redirect('/')
                
        new_user = Users(name=user_name)

        try:
            db.session.add(new_user)
            db.session.commit()
            print(new_user)
            return redirect('/')
        except:
            return ("There was an error")
    

@app.route('/delete/<int:id>')
def delete(id):
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
            return 'There was an issu updating your event'
            
    else:
        return render_template('update.html', event=event)

    
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)
    
