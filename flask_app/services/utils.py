# Shared utility functions
import sqlite3
import os

DATABASE_PATH = os.path.join(os.path.dirname(__file__), '../../database/calendaruprm.db')

def execute_query(query, params=()):
    if not os.path.exists(DATABASE_PATH):
        raise FileNotFoundError(f"Database not found at {DATABASE_PATH}")
    conn = sqlite3.connect(DATABASE_PATH)
    cursor = conn.cursor()
    cursor.execute(query, params)
    results = cursor.fetchall()
    conn.commit()
    conn.close()
    return results
