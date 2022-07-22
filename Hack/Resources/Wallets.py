from flask import render_template, jsonify
from flask_restful import Resource, request
from flask_jwt_extended import jwt_required
from db import db

# Accessing 'Items' Collection
collection = db['wallet']

class Wallets(Resource):
    
    def get(self):

        return list(collection.find({}, {'_id': 0}))

        # return list(collection.aggregate([{"$project": {"_id": 0}},
        #                                   {"$sort": {"Name": 1}}]))

    
