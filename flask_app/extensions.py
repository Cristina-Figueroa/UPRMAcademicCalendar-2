# Flask extensions (e.g., CORS)
from flask_cors import CORS
from flask import Flask


app = Flask(__name__)

cors = CORS(app) #react corre aqui