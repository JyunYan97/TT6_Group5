from flask import render_template
from flask_restful import Resource, request
from flask_jwt_extended import jwt_required
from db import db
from Resources.user import User

# Accessing Collections
transaction_col = db['transaction']

class Transaction(Resource):
    
    def get(self, wallet_id):

        transaction_list = transaction_col.find({"wallet_id": wallet_id}, {'_id': 0})

        if transaction_list is not None:
            return list(transaction_list.sort("id", 1))
        else:
            return {'message': "Item cannot be found"}, 404


    # @jwt_required()
    def post(self, wallet_id):

        data = request.get_json()

        transaction_col.insert_one({"wallet_id": wallet_id,
                                    "debit_id": data["debit_id"],
                                    "debit_currency": data["debit_currency"],  
                                    "debit_amount": data["debit_amount"],
                                    "credit_id": data["credit_id"],
                                    "credit_currency": data["credit_currency"],
                                    "credit_amount": data["credit_amount"],
                                    "description": data["description"],
                                    "created_at": data["created_at"],
                                    "created_by": User.login,
                                    "updated_at": data["updated_at"],
                                    "updated_by": User.login,
                                    })
        return {'message': "Item has been added successfully!"}