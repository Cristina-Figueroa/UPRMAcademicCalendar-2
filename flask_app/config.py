# Configuration settings

import os
import psycopg2
from dotenv import load_dotenv

# Load environment variables from .env file (if using for local development)
load_dotenv()

# Get the Heroku database URL
DATABASE_URL = os.environ.get('DATABASE_URL')

# Connect to PostgreSQL
def get_db_connection():
    conn = psycopg2.connect(DATABASE_URL, sslmode='require')
    return conn
