from flask import render_template, jsonify
from flask_restful import Resource, request
from flask_jwt_extended import jwt_required
from db import db

# Accessing Collections
currency_col = db['currency']

class Currency(Resource):
    
    def get(self, wallet_id):

        currency_list = currency_col.find({"wallet_id": wallet_id}, {'_id': 0})

        if currency_list is not None:
            return list(currency_list.sort("id", 1))
        else:
            return {'message': "Item cannot be found"}, 404


    @jwt_required()
    def delete(self, wallet_id):

        try:
            currency_col.delete_many({'wallet_id': wallet_id})
            return {'message': "Item deleted"}
        except:
            return {'message': "Item cannot be found"}, 404