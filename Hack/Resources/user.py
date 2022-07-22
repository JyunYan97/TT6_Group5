from flask import render_template, jsonify
from flask_restful import Resource, request
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
from db import db

# Accessing Collections
user_col = db['user']

class User(Resource):

    def login():
        username = request.json.get("username", None)
        password = request.json.get("password", None)
        for user in user_col.find():
            if username == user['username'] and password == user['password']:
                name = user['name']
                access_token = create_access_token(identity=username)
                return jsonify(access_token=access_token), name
        
        return {'message': "Invalid username or password!"}, 401
    

    @jwt_required()
    def protected():
        current_user = get_jwt_identity()
        return jsonify(logged_in_as=current_user), 200