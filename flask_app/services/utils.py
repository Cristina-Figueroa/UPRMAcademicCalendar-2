# Utility functions
from flask_app.config import get_db_connection
from flask_app.services.models import create_important_dates_table


# Execute POST, PUT, DELETE from holidays, guideline and important_dates
def execute_query(query, params=()):
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

# ====================Holidays========================

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



def execute_query_get_holidays2(query, params=()):
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
        result_list = [{"holiday_name": row[0], "formatted_date": row[1]} for row in result]
        return result_list

    except Exception as e:
        conn.rollback()
        print(f"Error executing query: {e}")
        return []
    finally:
        conn.close()




def execute_query_get_filtered_holidays(query, params=()):
    # Connect to the database using the function from the database module
    conn = get_db_connection()
    
    try:
        # Create a cursor object to interact with the database
        cursor = conn.cursor()
        cursor.execute(query, params)  # Execute the query with the given parameters
        print(f"Executing query: {query} with params: {params}")
        print(type(params[0]))
        # Fetch all results from the query execution
        result = cursor.fetchall()
        print({result})
        cursor.close()
        conn.close()
        
        # Convert the result into a list of dictionaries
        result_list = [{"holiday_date": row[0], "holiday_name": row[1], "formatted_date": row[2]} for row in result]
        
        return result_list

    except Exception as e:
        conn.rollback()  # In case of error, rollback the transaction
        print(f"Error executing query: {e}")
        return []  # Return an empty list in case of error

    finally:
        conn.close()  # Ensure the connection is always closed
















# ====================Guidelines========================

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
        result_list = [{"guideline_id": row[0], "guideline_name": row[1], "shift_days": row[2], "day_type": row[3], "start": row[4], "period_type": row[5]} for row in result]
        return result_list

    except Exception as e:
        conn.rollback()
        print(f"Error executing query: {e}")
        return []
    finally:
        conn.close()




# ====================AcademicPeriod========================
import holidays
from datetime import datetime, date


def execute_query_get_dates(query, params=()):
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
        result_list = [{"id": row[0], "date": row[1], "event": row[2], "formatted_dates": row[3]} for row in result]
        return result_list

    except Exception as e:
        conn.rollback()
        print(f"Error executing query: {e}")
        return []
    finally:
        conn.close()



def get_academic_period(startdate):
    # Convert startdate to a date object
    start_date = datetime.strptime(startdate, '%Y-%m-%d').date()

    # Define the academic periods as date objects
    fall_start = date(start_date.year, 8, 1)
    fall_end = date(start_date.year, 12, 25)

    spring_start = date(start_date.year, 1, 1)
    spring_end = date(start_date.year, 5, 20)

    summer_v1_start = date(start_date.year, 6, 1)
    summer_v1_end = date(start_date.year, 6, 30)

    summer_v2_start = date(start_date.year, 7, 1)
    summer_v2_end = date(start_date.year, 7, 31)

    extended_summer_start = date(start_date.year, 6, 1)
    extended_summer_end = date(start_date.year, 7, 31)

    # Determine which academic period the startdate falls under
    if fall_start <= start_date <= fall_end:
        return "Fall"
    elif spring_start <= start_date <= spring_end:
        return "Spring"
    elif summer_v1_start <= start_date <= summer_v1_end:
        return "Summer V1"
    elif summer_v2_start <= start_date <= summer_v2_end:
        return "Summer V2"
    elif extended_summer_start <= start_date <= extended_summer_end:
        return "Extended Summer"
    else:
        return None


def get_filtered_holidays(year, startdate):
    # Get Puerto Rico holidays
    pr_holidays = holidays.PuertoRico(years=year)

    # Filter holidays based on the academic period
    academic_period = get_academic_period(startdate)

    filtered_holidays = []

    # Define holiday ranges based on academic periods
    if academic_period == "Fall":
        holiday_range = (date(year, 8, 1), date(year, 12, 25))
    elif academic_period == "Spring":
        holiday_range = (date(year, 1, 1), date(year, 5, 20))
    elif academic_period == "Summer V1":
        holiday_range = (date(year, 6, 1), date(year, 6, 30))
    elif academic_period == "Summer V2":
        holiday_range = (date(year, 7, 1), date(year, 7, 31))
    elif academic_period == "Extended Summer":
        holiday_range = (date(year, 6, 1), date(year, 7, 31))
    else:
        holiday_range = None

    if holiday_range:
        # Filter holidays within the range for the selected academic period
        for date_obj, name in pr_holidays.items():
            if holiday_range[0] <= date_obj <= holiday_range[1]:
                filtered_holidays.append(f"{date_obj}: {name}")

    return filtered_holidays


def insert_important_dates(important_dates):
    conn = get_db_connection()
    cur = conn.cursor()

    # Insert the important dates into the table
    insert_query = '''
    INSERT INTO important_dates (date, event, formatted_date)
    VALUES (%s, %s, %s);
    '''
    
    try:
        # Execute the insert for each date
        for item in important_dates:
            cur.execute(insert_query, (item['date'], item['event'], item['formatted_date']))
        
        conn.commit()  # Commit the transaction
        print("Important dates inserted successfully.")
    except Exception as e:
        print(f"Error inserting data: {e}")
    finally:
        cur.close()  # Close the cursor
        conn.close()  # Close the connection


def replace_important_dates(important_dates):
    conn = get_db_connection()
    cur = conn.cursor()

    # Step 1: Delete all existing records in the important_dates table
    delete_query = 'DELETE FROM important_dates;'
    try:
        # Execute delete command
        cur.execute(delete_query)
        conn.commit()  # Commit the transaction

        # Step 2: Insert the new data into the important_dates table
        insert_query = '''
        INSERT INTO important_dates (date, event, formatted_date)
        VALUES (%s, %s, %s);
        '''
        # Execute the insert for each new date
        for item in important_dates:
            cur.execute(insert_query, (item['date'], item['event'], item['formatted_date']))

        conn.commit()  # Commit the transaction
        print("Important dates replaced successfully.")
    except Exception as e:
        print(f"Error replacing data: {e}")
    finally:
        cur.close()  # Close the cursor
        conn.close()  # Close the connection
