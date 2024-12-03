# Utility functions
from flask_app.config import get_db_connection

# ====================Holidays========================
def execute_query_holidays(query, params=()):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    try:
        cursor.execute(query, params)
        conn.commit()  # Make sure the data is committed
    except Exception as e:
        conn.rollback()  # Rollback if an error occurs
        raise e
    finally:
        cursor.close()
        conn.close()


def execute_query_get_holidays(query, params=()):
    # Connect to the database using the function from the database module
    conn = get_db_connection()
    try:
        cursor = conn.cursor()
        cursor.execute(query, params)
        
        # For SELECT queries, fetch all results
        result = cursor.fetchall()
        cursor.close()
        conn.close()
        
        # Convert the result into a list of dictionaries, if necessary
        result_list = [{"holiday_id": row[0], "holiday_date": row[1], "holiday_name": row[2], "formatted_date": row[3]} for row in result]
        return result_list

    except Exception as e:
        conn.rollback()
        print(f"Error executing query: {e}")
        return []
    finally:
        conn.close()



# ====================Guidelines========================
def execute_query_guidelines(query, params=()):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    try:
        cursor.execute(query, params)
        conn.commit()  # Make sure the data is committed
    except Exception as e:
        conn.rollback()  # Rollback if an error occurs
        raise e
    finally:
        cursor.close()
        conn.close()


def execute_query_get_guidelines(query, params=()):
    # Connect to the database using the function from the database module
    conn = get_db_connection()
    try:
        cursor = conn.cursor()
        cursor.execute(query, params)
        
        # For SELECT queries, fetch all results
        result = cursor.fetchall()
        cursor.close()
        conn.close()
        
        # Convert the result into a list of dictionaries, if necessary
        result_list = [{"guideline_id": row[0], "guideline_name": row[1], "shift_days": row[2], "day_type": row[3], "start": row[4]} for row in result]
        return result_list

    except Exception as e:
        conn.rollback()
        print(f"Error executing query: {e}")
        return []
    finally:
        conn.close()