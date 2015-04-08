# Let's just use the local mongod instance. Edit as needed.

# Please note that MONGO_HOST and MONGO_PORT could very well be left
# out as they already default to a bare bones local 'mongod' instance.

# SERVER_NAME = None  # Run on all interfaces not just 127.0.0.1
# SERVER_PORT = 3000
# MONGO_HOST = 'localhost'
# MONGO_PORT = 27017
# MONGO_USERNAME = 'user'
# MONGO_PASSWORD = 'user'
# MONGO_DBNAME = 'twitter'

# CACHE_CONTROL = 'max-age=20'
# CACHE_EXPIRES = 20
# X_DOMAINS = '*'
# X_HEADERS = 'accept, content-type'
# X_HEADERS = ['Content-Type', 'If-Match', '_etag']
# XML = False
# DEBUG = True
# RESOURCE_METHODS = ['GET', 'POST', 'DELETE']
# ITEM_METHODS = ['GET', 'PATCH', 'DELETE', 'PUT']
# PUBLIC_METHODS = ['GET', 'PATCH', 'POST', 'DELETE', 'PUT']


# tweets = {
#     'item_title': 'testing',
#     'tweet': 'body',
# 'cache_control': 'max-age=10,must-revalidate',
# 'cache_expires': 10,
#     'resource_methods': ['GET', 'POST', 'DELETE'],
#     'schema': {
#         'body': {
#             'type': 'string',
#             'minlength': 1,
#             'maxlength': 320,
#         },
#         'postedTime': {
#             'type': 'string',
#             'minlength': 1,
#             'maxlength': 15,
#             'required': True,
#             'unique': True,
#         },
#         'userScore': {
#             'type': 'string',
#             'required': True
#         }
#     }
# }
# DOMAIN = {'twitter_historical_stream_copy': tweets}
