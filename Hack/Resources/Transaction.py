from flask import render_template, jsonify
from flask_restful import Resource, request
from flask_jwt_extended import jwt_required
from db import db

# Accessing Collections
transaction_col = db['transaction']

class Transaction(Resource):
    
    def get(self):

        transaction_list = list(transaction_col.aggregate([{"$project": {"_id": 0}}, {"$sort": {"Name": 1}}]))

        return transaction_list

    @jwt_required()
    def post(self, wallet_id):

        data = request.get_json()

        transaction_col.insert_one({"wallet_id": wallet_id,
                                    "debit_id": data['debit_id'],
                                    "debit_currency": data['debit_currency'],  
                                    "debit_amount": data['debit_amount'],
                                    "credit_id": data['credit_id'],
                                    "credit_currency": data['credit_currency'],
                                    "credit_amount": data['credit_amount'],
                                    "description": data['description'],
                                    "created_at": data['created_at'],
                                    "created_by": data['created_by'],
                                    "updated_at": data['updated_at'],
                                    "updated_by": data['updated_by'],
                                    })
        return {'message': "Item has been added successfully!"}