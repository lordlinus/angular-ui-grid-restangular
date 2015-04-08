from os import environ
from os.path import dirname, abspath
from eve import Eve
from flask import Config
import simplejson as json
from eve.methods.post import post_internal

# Create a Flask Config object

settings = {
    # Server config
    'DEBUG': True,
    'XML': False,



    # Mongo DB config
    'SERVER_NAME': None,  # Run on all interfaces not just 127.0.0.1
    'MONGO_HOST': 'localhost',
    'MONGO_PORT': 27017,
    # MONGO_USERNAME : 'user',
    # MONGO_PASSWORD : 'user',
    'MONGO_DBNAME': 'twitter',

    # Headers config
    'CACHE_CONTROL': 'max-age:20',
    'CACHE_EXPIRES': 20,
    'X_DOMAINS': '*',
    # 'X_HEADERS': 'accept, content-type',
    'X_HEADERS': ['Content-Type', 'If-Match'],
    'RESOURCE_METHODS': ['GET', 'POST', 'DELETE'],
    'ITEM_METHODS': ['GET', 'PATCH', 'DELETE', 'PUT'],
    'PUBLIC_METHODS': ['GET', 'PATCH', 'POST', 'DELETE', 'PUT'],
    'ALLOWED_WRITE_ROLES': ['POST', 'PUT']


}

# Data sources
tweets = {
    # 'item_title': 'testing',
    'tweet': 'body',
    # 'cache_control': 'max-age=10,must-revalidate',
    # 'cache_expires': 10,
    'resource_methods': ['GET', 'POST', 'DELETE'],
    'item_methods': ['GET', 'PATCH', 'DELETE', 'PUT'],
    'schema': {
        'body': {
            'type': 'string',
            'minlength': 1,
            'maxlength': 320,
        },
        'postedTime': {
            'type': 'string',
            'minlength': 1,
            'maxlength': 50,
        },
        'userScore': {
            'type': 'number',
            'required': True
        },
        'restangularEtag': {
            'type': 'string',
        }

    }
}

# Adding data sources to the api
settings['DOMAIN'] = {'twitter_historical_stream_copy': tweets}

app = Eve(settings=settings)


# def fix_metadata(*args):
#     with app.test_request_context() as c:
#         for doc in db.twitter_historical_stream_copy.find():
# Before inserting doc as a new document, we must remove it
# metadata which will be added internally by eve (_etag, _created
# and _updated) and mongodb (_id)
#             for metafield in ['_id', '_updated', '_created', '_etag']:
#                 payload.pop(metafield, None)
#             result = patch_internal(resource, payload)
#             assert result[-1] == 201, result


# @app.after_request
# def after_request(response):
# print dir(response.headers)
#     response.headers.remove('Access-Control-Allow-Methods')
#     response.headers.add(
#         'Access-Control-Allow-Methods', 'OPTIONS, HEAD, DELETE, POST, GET, PATCH, PUT')
#     return response

# print dir(app)

if __name__ == '__main__':
    app.run(port=3000)
