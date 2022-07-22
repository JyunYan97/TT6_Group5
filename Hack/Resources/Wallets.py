from flask import render_template, jsonify
from flask_restful import Resource, request
from flask_jwt_extended import jwt_required
from db import db

# Accessing Collections
wallet_col = db['wallet']
ER_col = db['exchangeRate']

class Wallets(Resource):
    
    def get(self):

        wallet_list = list(wallet_col.aggregate([{"$project": {"_id": 0}}, {"$sort": {"Name": 1}}]))
        currency_list = list(ER_col.aggregate([{"$project": {"_id": 0}}, {"$sort": {"Name": 1}}]))

        return wallet_list


    @jwt_required()
    def delete(self, name):

        try:
            wallet_col.delete_one({'Name': name})
            return {'message': "Item deleted"}
        except:
            return {'message': "Item cannot be found"}, 404

 

    
