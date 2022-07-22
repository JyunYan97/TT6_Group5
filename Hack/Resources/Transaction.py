from flask import render_template, jsonify
from flask_restful import Resource, request
from flask_jwt_extended import jwt_required
from marshmallow import Schema, fields
from db import db

# Accessing Collections
transaction_col = db['transaction']
# datetime_format = "%Y-%m-%d %H:%M:%S"

class InsertSchema(Schema):
    debit_id = fields.Int(required=True)
    debit_currency = fields.Str(required=True)
    debit_amount = fields.Float(required=True)
    credit_id = fields.Int(required=True)
    credit_currency = fields.Str(required=True)
    credit_amount = fields.Float(required=True)
    description = fields.Str(default="")
    created_at = fields.Str()
    created_by = fields.Str(default="")
    updated_at = fields.Str()
    updated_by = fields.Str(default="")

    
class Transaction(Resource):
    
    def get(self, wallet_id):

        transaction_list = transaction_col.find({"wallet_id": wallet_id}, {'_id': 0})

        if transaction_list is not None:
            return list(transaction_list.sort("id", 1))
        else:
            return {'message': "Item cannot be found"}, 404


    # @jwt_required()
    def post(self, wallet_id):

        data = InsertSchema().load(request.get_json())

        transaction_col.insert_one({"wallet_id": wallet_id,
                                    "debit_id": data["debit_id"],
                                    "debit_currency": data["debit_currency"],  
                                    "debit_amount": data["debit_amount"],
                                    "credit_id": data["credit_id"],
                                    "credit_currency": data["credit_currency"],
                                    "credit_amount": data["credit_amount"],
                                    "description": data["description"],
                                    "created_at": data["created_at"],
                                    "created_by": data["created_by"],
                                    "updated_at": data["updated_at"],
                                    "updated_by": data["updated_by"],
                                    })
        return {'message': "Item has been added successfully!"}