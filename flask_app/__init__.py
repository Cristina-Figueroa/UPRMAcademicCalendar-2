# App factory

from flask import Flask
from flask_app.routes import holidays, guidelines, academicPeriod
from flask_app.extensions import cors

def create_app():
    app = Flask(__name__)
    cors.init_app(app)

    # Register blueprints
    app.register_blueprint(holidays.bp)
    app.register_blueprint(guidelines.bp)
    app.register_blueprint(academicPeriod.bp)

    return app
