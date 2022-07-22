from flask import render_template, jsonify
from flask_restful import Resource, request
from flask_jwt_extended import jwt_required
from db import db

# Accessing Collections
currency_col = db['currency']

class Currency(Resource):
    
    def get(self, wallet_id):

        transaction_list = list(currency_col.aggregate([{"$project": {"_id": 0}}, {"$sort": {"wallet_id": 1}}]))

        return transaction_list


    @jwt_required()
    def delete(self, name):

        try:
            currency_col.delete_one({'Name': name})
            return {'message': "Item deleted"}
        except:
            return {'message': "Item cannot be found"}, 404