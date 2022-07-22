import os

from flask import Flask
from flask_restful import Api
from flask_jwt_extended import JWTManager

from Resources.Wallets import Wallets
from Resources.Transaction import Transaction
from Resources.Currency import Currency
from Resources.user import User

# FLASK
app = Flask(__name__)
app.secret_key = os.urandom(20)    
app.config['PROPAGATE_EXCEPTIONS'] = True       # To allow flask to display proper errors from JWT
api = Api(app)

jwt = JWTManager(app)


api.add_resource(User, '/login')
api.add_resource(Wallets, '/wallets')
api.add_resource(Currency, '/wallets/<int:wallet_id>/currency')
api.add_resource(Transaction, '/wallets/<int:wallet_id>/transaction')

# runs flask API
if __name__ == '__main__':
    app.run(debug=True)