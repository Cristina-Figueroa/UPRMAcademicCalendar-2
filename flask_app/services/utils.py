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




# ====================AcademicPeriod========================
import holidays
from datetime import datetime, date

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


# Function to get Puerto Rico holidays for the current year
def get_pr_holidays(year):
    # Get Puerto Rico holidays for the given year
    pr_holidays = holidays.PuertoRico(years=year)
    return pr_holidays


# Update the date format before returning it in the response
def format_date_for_display(date_obj):
    # Format the date to 'Mon, 26 Aug 2024'
    return date_obj.strftime("%a, %d %b %Y")