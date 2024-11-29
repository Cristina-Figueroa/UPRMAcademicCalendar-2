# Flask extensions (e.g., CORS)
from flask_cors import CORS
from flask import Flask


app = Flask(__name__)

cors = CORS(app) #react corre aqui


# from flask_sqlalchemy import SQLAlchemy
# from flask_migrate import Migrate
# from flask_login import LoginManager

# # Instantiate the extensions
# db = SQLAlchemy()
# migrate = Migrate()
# login_manager = LoginManager()




# Enable CORS with a specific origin
# CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}) #react corre aqui
