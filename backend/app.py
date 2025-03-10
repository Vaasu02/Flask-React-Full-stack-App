from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///friends.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Import routes after app is created to avoid circular imports
from routes import *

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)





