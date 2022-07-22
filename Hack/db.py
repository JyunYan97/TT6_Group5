import pymongo

# MONGODB
connection_string = "mongodb+srv://JunYan97:Abc123@application.uod6451.mongodb.net/?retryWrites=true&w=majority"

mongo_client = pymongo.MongoClient(connection_string, serverSelectionTimeoutMS=5000)

db = mongo_client['Application']