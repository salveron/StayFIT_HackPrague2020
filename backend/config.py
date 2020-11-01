import os


class Config(object):
    SECRET_KEY = os.environ.get("SECRET_KEY") or "super-secret-key"
    DEBUG = True
    CSRF_ENABLED = True
    AUTHY_API_KEY = 'nTzk00XPD02V1v3hevVRTc7PQzkiHk0C'
    SESSION_TYPE = 'filesystem'
