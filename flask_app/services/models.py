import psycopg2
from flask_app.config import get_db_connection

def create_important_dates_table():
    conn = get_db_connection()
    cur = conn.cursor()
    
    # SQL query to create the important_dates table
    create_table_query = '''
    CREATE TABLE IF NOT EXISTS important_dates (
        id SERIAL PRIMARY KEY,
        date VARCHAR(100) NOT NULL,
        event VARCHAR(255) NOT NULL
    );
    '''
    
    try:
        # Execute the SQL command
        cur.execute(create_table_query)
        conn.commit()  # Commit the transaction
        print("Table 'important_dates' created successfully.")
    except Exception as e:
        print(f"Error creating table: {e}")
    finally:
        cur.close()  # Close the cursor
        conn.close()  # Close the connection