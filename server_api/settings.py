# Let's just use the local mongod instance. Edit as needed.

# Please note that MONGO_HOST and MONGO_PORT could very well be left
# out as they already default to a bare bones local 'mongod' instance.

SERVER_NAME = None  # Run on all interfaces not just 127.0.0.1
SERVER_PORT = 3000
MONGO_HOST = 'localhost'
MONGO_PORT = 27017
# MONGO_USERNAME = 'user'
# MONGO_PASSWORD = 'user'
MONGO_DBNAME = 'test'

CACHE_CONTROL = 'max-age=20'
CACHE_EXPIRES = 20

tweets = {
    'item_title': 'testing',
    'tweet': 'body',
    'resource_methods': ['GET', 'POST'],
    'cache_control': 'max-age=10,must-revalidate',
    'cache_expires': 10,
    'schema': {
        'body': {
            'type': 'string',
            'minlength': 1,
            'maxlength': 300,
        },
        'postedTime': {
            'type': 'string',
            'minlength': 1,
            'maxlength': 15,
            'required': True,
            'unique': True,
        },
    }
}
DOMAIN = {'twitter_historical_stream_copy': tweets}
X_DOMAINS = '*'
