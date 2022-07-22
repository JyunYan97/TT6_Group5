import pymongo

# MONGODB
connection_string = "mongodb://127.0.0.1:27017"

mongo_client = pymongo.MongoClient(connection_string, serverSelectionTimeoutMS=5000)

db = mongo_client['']