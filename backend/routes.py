from app import app, db
from flask import request, jsonify
from models import Friend

@app.route('/')
def index():
    return "Server is started"

@app.route('/api/friends', methods=['GET']) #its a decorator 
def get_friends():
    friends = Friend.query.all() #query is a method that returns all the friends from the database
    friend_list = [friend.to_json() for friend in friends]
    return jsonify(friend_list)

@app.route('/api/friends',methods=['POST'])
def creat_friend():
    try:
        data = request.json
        # print(data)

        required_fields = ['name', 'role', 'description', 'gender']
        for field in required_fields:
            if field not in data:
                return jsonify({'error':f'{field} is required'}), 400
    
        name = data.get('name')
        role = data.get('role')
        description = data.get('description')
        gender = data.get('gender')
    
        #for image url
        if gender == 'male':
            img_url = f'https://avatar-iran.liara.run/public/boy?username={name}'
        elif gender == 'female':
            img_url = f'https://avatar-iran.liara.run/public/girl?username={name}'
        else:
            img_url = None

        new_friend = Friend(name=name, role=role, description=description, gender=gender, img_url=img_url)
        db.session.add(new_friend)
        db.session.commit()
        return jsonify({'friend':new_friend.to_json(),'message':'Friend created successfully'}), 201
    
    except Exception as e:
        db.session.rollback()
        return jsonify({'error':str(e)}), 500
    