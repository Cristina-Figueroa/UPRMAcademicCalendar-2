# import sqlite3
# import datetime





# """TUMBA EL BACKEND Y VUELVELO A CORRER
#     CTRL+C EN flask terminal
#     despues python -m flask --app flaskAPI run
# """

















# # DATABASE_PATH = r"C:\Users\crist\VSCode\UPRMAcademicCalendar-2\database\calendaruprm.db"
# # # Connect to the SQLite database (creates the file if it doesn't exist)
# # connection = sqlite3.connect(DATABASE_PATH)

# # # Create a cursor to interact with the database
# # cursor = connection.cursor()

# # connection.commit()  # Save changes

# # cursor.execute("SELECT * FROM holidays")
# # rows = cursor.fetchall()

# # for row in rows:
# #     print(row)  # Each row is a tuple (id, date, name)


# # cursor.execute("SELECT * FROM holidays ORDER BY formatted_date")  # Fetch all holidays
# # holidays = cursor.fetchall()
# # for row in holidays:
# #     print(row)  # Each row is a tuple (id, date, name)
# # connection.close()




# """Generate Academic Calendar"""

# # input
# '''
# datepicker - fecha
# select - period
# '''

# '''
# secuencias - i need los days of the week integrado a esto
# '''

# '''
# I already have a code that generates dates:
# '''












# import calendar
# import datetime
# from datetime import datetime, timedelta


# # Functions

# def monthnumber_to_month(month):
#     months = {
#         1: "January", 2: "February", 3: "March", 4: "April", 
#         5: "May", 6: "June", 7: "July", 8: "August", 
#         9: "September", 10: "October", 11: "November", 12: "December"
#     }
#     return months.get(month, "Invalid month")


# def print_dayoftheweek(dayoftheweek_number):
#     days = {
#         0: "Monday", 1: "Tuesday", 2: "Wednesday", 
#         3: "Thursday", 4: "Friday", 5: "Saturday", 6: "Sunday"
#     }
#     return days.get(dayoftheweek_number, "Invalid day")

# def is_labor_day(dayoftheweek_number):
#     # Define LABOR days as Monday (0) to Friday (4)
#     labor_days = {0, 1, 2, 3, 4}
#     return dayoftheweek_number in labor_days


# def format_tuple_to_date(date_tuple):
#     # Unpack the tuple
#     year, month, day, weekday_number = date_tuple
    
#     # Convert the numeric month and day of the week to their textual representations
#     month_text = monthnumber_to_month(month)
#     weekday_text = print_dayoftheweek(weekday_number)
    
#     # Format the date in the desired format
#     formatted_date = f"{month_text} {day}, {year}, {weekday_text}"
    
#     return formatted_date

# def format_tuples_to_dates(dates_list):
#     formatted_dates = []
#     for date_tuple in dates_list:
#         # Format each tuple using the earlier logic
#         formatted_date = format_tuple_to_date(date_tuple)
#         formatted_dates.append(formatted_date)
#     return formatted_dates



# def removeduplicates(tuplelist):
#     return sorted(list(set(tuplelist)))


# def generate_dates(start_date, weeks):
#     """Generate a list of tuples for dates in the academic period."""
#     tuple_list = []
#     start = datetime.strptime(start_date, "%Y-%m-%d")
#     # end = start + timedelta(weeks=weeks)

#     # html_calendar = calendar.HTMLCalendar()

#     # for month in range(start.month, end.month + 1):
#     #     for d in html_calendar.itermonthdays4(start.year, month):
#     #         year, month, day, weekday = d
#     #         if day > 0:  # Skip placeholder days
#     #             tuple_list.append((year, month, day, weekday))

#     # Add Holidays




#     for i in range(weeks * 7):  # Loop through days in the period
#         current_date = start + timedelta(days=i)
#         tuple_list.append((current_date.year, current_date.month, current_date.day, current_date.weekday()))
#         # tuple_list.append( (f"{current_date.year}-{current_date.month}-{current_date.day}", current_date.weekday()) )
    
#     # {row[0]}-{row[1]}-{row[2]}", row[3]

#     return removeduplicates(tuple_list)


# def count_occurrence(data):
    
#     occurrences = {}

#     for t in data:
#         value = t[3] #index position = 3, dayoftheweek
#         if value in occurrences:
#             occurrences[value] += 1
#         else:
#             occurrences[value] = 1

#     for value, count in occurrences.items():
#         print(f"{print_dayoftheweek(value)}: {count}")

#     return





# # List of the days from start date to end date
# # startdate = "August 12"
# # enddate = "December 23"
# start_date = "2024-10-12"


# # split text
# # start_date = startdate.split()
# period = 'summerV1'
# # enddate = enddate.split()
# # print(startdate,enddate)



# # Extract inputs
# # start_date = data.get('startDate')
# # period = data.get('academicPeriod')

# # Define weeks based on academic period
# periods = {
#     "fall": 15, "spring": 15,
#     "summerV1": 4, "summerV2": 4,
#     "summerExtended": 6
# }
# weeks = periods.get(period, 0) 


# # Validate input
# if not start_date or not period:
#     print("error startDate and academicPeriod are required")
# if weeks == 0:
#     print("error Invalid academicPeriod")

# # Generate dates
# try:
#     dates = generate_dates(start_date, weeks)
#     # formatted_dates = [f"{y}-{m:02d}-{d:02d}" for y, m, d in dates]
#     # formatted_dates = [f"{monthnumber_to_month(m)} {d:02d}, {y}, {print_dayoftheweek(weekday)}" for y, m, d, weekday in dates]
#     # formatted_dates = format_dates_with_weekdays(dates)
#     '''I could always, you know, dejarlo para despues el formattearlo
#     Like, at a later step, en vez de al principio jajajaja
#     Imma leave it al final, pero recuerda que desde el principio podias enviar el
#     text en formato MM DD, YYY, weekday :ok'''
#     formatted_dates_list = format_tuples_to_dates(dates)



#     # return jsonify({"dates": formatted_dates})
#     # print(formatted_dates_list)
#     # print(dates)

#     # Add Holidays




#     # count_occurrence(dates)


#     # for date in formatted_dates:

# except Exception as e:
#     # return jsonify({"error": str(e)}), 500
#     print("error: Generate Dates Exception: {}".format(e))




# # Add Holidays

# '''Access DB, call formatted_dates (MM-DD), add YYYY al principio
#     Compara estos dias con los del formato dates: YYYY-MM-DD vs YYYY-MM-DD
#     Cuando haya uno igual, 
#     VERIFY IF MONDAY == Dejalo ahi, pero quita / skip el conteo. Assign HOLIDAY to that day
#     Switch MARTES to be Lunes?
#     Manipula la data (if possible para que sea Lunes ese martes proximo)

#     IF NOT MONDAY: (Feriado some other day)
#         SWITCH ese dia para lunes, so el lunes de esa semana seria HOLIDAY, 
#         mientras el dia del holiday es 1. normal o 2. lunes

    

# '''

# # def fetch_all_holidays():

# DATABASE_PATH = r"C:\Users\crist\VSCode\UPRMAcademicCalendar-2\database\calendaruprm.db"
# # Connect to the SQLite database (creates the file if it doesn't exist)
# connection = sqlite3.connect(DATABASE_PATH)

# # Create a cursor to interact with the database
# cursor = connection.cursor()
# connection.commit()  # Save changes

# # Fetch all holidays
# cursor.execute("SELECT * FROM holidays ORDER BY formatted_date")  
# holidays = cursor.fetchall()
# hol = []
# for row in holidays:
#     # print(row)  # Each row is a tuple (id, date, name)
#     hol.append(row)
# connection.close()

# # print("hol:", hol)



# import datetime
# def add_year_to_formatted_date(holiday_list):

#     # Get the Year
#     current_time = datetime.datetime.now()
#     currentyear = current_time.year
#     updated_list = []
#     # Pass through each row, change value
#     for row in holiday_list:
#         # Update the tuple by replacing the last item with "YYYY-MM-DD"
#         updated_list_item = (row[0], row[1], row[2], f"{currentyear}-{row[3]}")
#         updated_list.append(updated_list_item)
#     # print(updated_list)
#     return updated_list

# # print("ADDED THE YEAAAAAAAAAAAAAAAR:", add_year_to_formatted_date(hol))
# holidays = add_year_to_formatted_date(hol)
# # Pasa las fechas por los holidays




# # All dates
# def unify_dates(date_list):

#     unified_dates = []
#     for row in date_list:
#         # Update the tuple by replacing the last item with "YYYY-MM-DD"
#         unified_date_item = (f"{row[0]}-{row[1]}-{row[2]}", row[3])

#         unified_dates.append(unified_date_item)

#     return unified_dates

# dates = unify_dates(dates)
# print("Dates to be checked:", dates)


# # All holidays
# print("Holidays List:", holidays)

# x = dates[0]
# y = holidays[0]

# print("Compare: {} with {}".format(x,y))

# # NOT Holiday
# new_dates = []
# for x in dates:
#     if x[0] not in holidays[3]:
#         # print("{} not in holidays".format(x[0]))
#         # day_type = 'LABOR'

#         new_item = (  x[0], x[1], "LABOR" )  #f"{row[0]}-{row[1]}-{row[2]}", row[3])
#         new_dates.append(new_item)
#     else: 
#         # print("{} in holidays".format(x[0]))
#         # day_type = 'HOLIDAY'
#         new_item = (  x[0], x[1], "HOLIDAY" )  #f"{row[0]}-{row[1]}-{row[2]}", row[3])
#         new_dates.append(new_item)

# print("New Dates: {} ".format(new_dates))


# def count_occurrences(data):
#     # ('2024-10-12', 5, 'LABOR')
#     occurrences = {}

#     for t in data:
#         value = t[1] #index position = 3, dayoftheweek
#         if t[2] == "LABOR":
#             if value in occurrences:
#                 occurrences[value] += 1
#             else:
#                 occurrences[value] = 1

#     for value, count in occurrences.items():
#         print(f"{print_dayoftheweek(value)}: {count}")

#     return

# # print("Ocurrences:" , count_occurrences(new_dates))




import sqlite3
from datetime import datetime, timedelta, date


# Access Database
DATABASE_PATH = r"C:\Users\crist\VSCode\UPRMAcademicCalendar-2\UPRMAcademicCalendar-2-1\database\calendaruprm.db"

def removeduplicates(tuplelist):
    return sorted(list(set(tuplelist)))

def monthnumber_to_month(month):
    months = {
        1: "January", 2: "February", 3: "March", 4: "April", 
        5: "May", 6: "June", 7: "July", 8: "August", 
        9: "September", 10: "October", 11: "November", 12: "December"
    }
    return months.get(month, "Invalid month")

def print_dayoftheweek(dayoftheweek_number):
    days = {
        0: "Monday", 1: "Tuesday", 2: "Wednesday", 
        3: "Thursday", 4: "Friday", 5: "Saturday", 6: "Sunday"
    }
    return days.get(dayoftheweek_number, "Invalid day")

def add_year_to_formatted_date(holiday_list):

    # Get the Year
    current_time = date.today() #.datetime.now()
    currentyear = current_time.year
    updated_list = []
    # Pass through each row, change value
    for row in holiday_list:
        # Update the tuple by replacing the last item with "YYYY-MM-DD"
        updated_list_item = (row[0], row[1], row[2], f"{currentyear}-{row[3]}")
        updated_list.append(updated_list_item)
    # print(updated_list)
    return updated_list


def fetch_holidays():
    """Fetch holiday data from the database."""
    conn = sqlite3.connect(DATABASE_PATH)     
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM holidays")
    holidays = cursor.fetchall()
    conn.close()
    return holidays


def calculate_end_date(start_date, holidays, required_occurrences):
    """
    Calculate the end date for an academic period while ensuring 
    each weekday has the required number of occurrences.

    Args:
        start_date (datetime): The start date of the academic period.
        holidays (set of datetime): A set of holiday dates.
        required_occurrences (int): The required number of each weekday (e.g., 15).

    Returns:
        datetime: The calculated end date.
    """
    # Initialize counters for each weekday (0=Monday, ..., 6=Sunday)
    weekday_count = {i: 0 for i in range(7)}

    # Current date pointer starting at the start date
    current_date = datetime.strptime(start_date, "%Y-%m-%d")


    # Loop until all weekdays meet the required occurrences
    while True:
        # Check if the current date is not a holiday
        if current_date not in holidays:
            # Increment the count for the weekday of the current date
            weekday_count[current_date.weekday()] += 1

        # Check if all weekdays meet the required occurrences
        if all(count >= required_occurrences for count in weekday_count.values()):
            break  # Stop the loop when criteria are met

        # Move to the next day
        current_date += timedelta(days=1)

    return current_date


# def generate_dates(start_date, weeks):
#     """Generate a list of tuples for dates in the academic period."""
#     tuple_list = []
#     start = datetime.strptime(start_date, "%Y-%m-%d")
    
#     # Define weeks based on academic period
#     periods = {
#         "fall": 15, "spring": 15,
#         "summerV1": 4, "summerV2": 4,
#         "summerExtended": 6
#     }
#     weeks = periods.get(period, 0) 

#     # Fetch holidays from the database
#     holidays = fetch_holidays()
#     end_date = calculate_end_date(startdate, holidays, weeks)
#     print(end_date.date())

#     # Add YYYY to MM-DD
#     formatted_holidays = add_year_to_formatted_date(holidays)
#     # # Pasa las fechas por los holidays
#     countExtraDaysNeeded = 0

#     for i in range(weeks * 7):  # Loop through days in the period
#         # New day in period
#         current_date = start + timedelta(days=i)
#         # print("Day to be checked:" , current_date.date())  # True

#         # Check if the current date matches any holiday
#         description = None  # Default to None if not a holiday
#         weekday = None  # Default to None if not a holiday

#         for holiday in formatted_holidays:
#             holiday_date = datetime.strptime(holiday[3], "%Y-%m-%d")  # Convert holiday's formatted_date to datetime
#             # print(current_date.date(), holiday_date.date(), current_date.date() == holiday_date.date())  # True
#             if current_date.date() == holiday_date.date():
#                 description = holiday[2]  # Use holiday_description if it matches
#                 weekday = "HOLIDAY"
#                 countExtraDaysNeeded = countExtraDaysNeeded + 1
#                 break  # Exit the loop once we find the matching holiday
        
#         # print("Day to be added:" , current_date.date())  # True

#         # Add the current date to the tuple_list
#         tuple_list.append((
#             f"{current_date.year}-{current_date.month}-{current_date.day}", 
#             current_date.weekday(),
#             description if description else 'null',  # Set 'null' if not a holiday
#             f"{monthnumber_to_month(current_date.month)} {current_date.day:02d}, {current_date.year}",
#             weekday if weekday else f"{print_dayoftheweek(current_date.weekday())}"
#             ))
#     # formatted_dates = [f"{monthnumber_to_month(m)} {d:02d}, {y}, {print_dayoftheweek(weekday)}" for y, m, d, weekday in dates]

#         # tuple_list.append((
#         #     current_date.year, 
#         #     current_date.month, 
#         #     current_date.day, 
#         #     current_date.weekday(),  # Get the weekday (0=Monday, 6=Sunday)
#         #     description if description else 'null'  # Set 'null' if not a holiday
#         # ))


#     # Add extra days

#     # for extra_day in range(countExtraDaysNeeded):
#     #         current_date = start + timedelta(days=weeks * 7 + extra_day)  # Start after the main period

#     #         # Add extra days to the tuple_list
#     #         tuple_list.append((
#     #             f"{current_date.year}-{current_date.month}-{current_date.day}",  # Formatted date
#     #             current_date.weekday(),  # Weekday number (0=Monday, 6=Sunday)
#     #             'null',  # No description since these are extra days
#     #             f"{monthnumber_to_month(current_date.month)} {current_date.day:02d}, {current_date.year}",  # Formatted string
#     #             f"{print_dayoftheweek(current_date.weekday())}"  # Day of the week as a string
#     #         ))



#     # return removeduplicates(tuple_list), formatted_holidays
#     return tuple_list, formatted_holidays



# startdate = '2024-8-12'
# period = 'fall'
# # print(generate_dates(startdate, period))
# dates, holidays = generate_dates(startdate, period)

# for d in dates:
#     # print("Dates:", dates)
#     print(d)


# print("Holidays:") #, holidays)
# for h in holidays:
#     print(h)





# # Example Inputs
# required_occurrences = 15  # Each weekday must occur 15 times

# # Calculate the end date
# end_date = calculate_end_date(startdate, holidays, required_occurrences)

# # Output the result
# print("Calculated End Date:", end_date.strftime("%Y-%m-%d"))














# from datetime import datetime, timedelta

# # Sample holiday and guidelines data
# holidays = [
#     {"date": "2024-09-02", "name": "Dia del trabajo"},
#     {"date": "2024-10-14", "name": "Dia de la Raza"},
#     {"date": "2024-11-11", "name": "Dia del Veterano"},
#     {"date": "2024-11-19", "name": "Dia de la Cultura"},
#     {"date": "2024-11-28", "name": "Dia de Accion de Gracias"},
#     {"date": "2024-12-25", "name": "Dia de Navidad"}
# ]

# guidelines = [
#     {"date": "2024-12-06", "description": "Last day to give any exams"},
# ]

# # Define the academic periods
# academic_periods = {
#     "Fall Semester": {"weeks": 15, "start_date": "2024-08-12"},
# }

# # Function to calculate the next weekday from a given date
# def next_weekday(d, weekday):
#     days_ahead = weekday - d.weekday()
#     if days_ahead <= 0:
#         days_ahead += 7
#     return d + timedelta(days=days_ahead)

# # Function to create the calendar
# def generate_academic_calendar(period, holidays, guidelines):
#     start_date = datetime.strptime(period["start_date"], "%Y-%m-%d")
#     num_weeks = period["weeks"]
    
#     # Initialize an empty list to store the calendar
#     calendar = []
    
#     # Counters for occurrences of each day
#     day_occurrences = {"Monday": 0, "Tuesday": 0, "Wednesday": 0, "Thursday": 0, "Friday": 0, "Saturday": 0, "Sunday": 0}
#     labor_day_count = 0  # Track labor days (Monday to Friday)
    
#     # Current date in the calendar
#     current_date = start_date
#     total_days = 0  # To count the total days in the semester
#     weeks_count = 0  # Track the number of weeks based on labor days (Monday to Friday)
    
#     # Loop to generate the calendar with the total number of weeks
#     while total_days < 90:  # 90 days for 15 weeks (counting weekends)
#         # Loop through Monday to Sunday of each week
#         for day_num in range(7):
#             # Check if the current day is a holiday
#             holiday = next((h for h in holidays if datetime.strptime(h['date'], "%Y-%m-%d").date() == current_date.date()), None)
            
#             if holiday:
#                 # Add holiday to the calendar with description, but skip counting this as a workday
#                 calendar.append({"date": current_date.date(), "description": f"Holiday - {holiday['name']}"})
#                 day_occurrences[current_date.strftime("%A")] += 1  # Count the holiday day
#                 current_date += timedelta(days=1)
#                 continue

#             # Add the date to the calendar with description if needed
#             if day_num < 5:  # Monday to Friday (labor days)
#                 calendar.append({"date": current_date.date(), "description": "Start of class" if day_num == 0 else ""})
#                 labor_day_count += 1
#                 total_days += 1
#                 day_occurrences[current_date.strftime("%A")] += 1  # Count the labor day
#             else:  # Saturday and Sunday (weekend days, no description)
#                 calendar.append({"date": current_date.date(), "description": ""})
#                 total_days += 1
#                 day_occurrences[current_date.strftime("%A")] += 1  # Count the weekend day
            
#             # If we've reached 90 total days, break the loop
#             if total_days >= 90:
#                 break
            
#             # Move to next day
#             current_date += timedelta(days=1)
        
#         # If we've reached 90 days, break out of the outer loop
#         if total_days >= 90:
#             break

#     # Add guidelines
#     for guideline in guidelines:
#         guideline_date = datetime.strptime(guideline["date"], "%Y-%m-%d")
#         calendar.append({"date": guideline_date.date(), "description": guideline["description"]})

#     # Print day occurrences and labor day count
#     print("Occurrences of each day in the calendar:")
#     for day, count in day_occurrences.items():
#         print(f"{day}: {count}")
    
#     print(f"\nTotal labor days counted (Monday to Friday): {labor_day_count}")
    
#     return calendar

# # Function to print the calendar in a human-readable format
# def print_calendar(calendar):
#     for entry in calendar:
#         print(f"{entry['date']} || {entry['description']}")

# # Choose the academic period, for example Fall Semester
# selected_period = academic_periods["Fall Semester"]

# # Generate and print the calendar
# calendar = generate_academic_calendar(selected_period, holidays, guidelines)
# print_calendar(calendar)





# Get Important dates by calculation & get ALL days in academic period, including 
# important dates like holidasy and the ones calculated
'''
# Calculation:

# Calculate the semester end date by adding the number of weeks to the start date.
# Use the semester end date to calculate the last day of services, exam start date, 
# and other key events.


from datetime import datetime, timedelta

# Helper function to check if a day is a labor day (Monday to Friday)
def is_labor_day(date):
    return date.weekday() < 5  # 0-4 represent Monday to Friday

# Function to calculate the number of labor days between two dates
def count_labor_days(start_date, end_date):
    current_date = start_date
    labor_days = 0
    while current_date <= end_date:
        if is_labor_day(current_date):
            labor_days += 1
        current_date += timedelta(days=1)
    return labor_days

# Function to calculate normal days (including weekends)
def count_normal_days(start_date, end_date):
    return (end_date - start_date).days + 1

# Adjust a date by adding labor days
def add_labor_days(start_date, num_days):
    current_date = start_date
    while num_days > 0:
        current_date += timedelta(days=1)
        if is_labor_day(current_date):
            num_days -= 1
    return current_date

# Adjust a date by adding normal days (including weekends)
def add_normal_days(start_date, num_days):
    return start_date + timedelta(days=num_days)



# Input: Start date, weeks of classes, and list of holidays
start_date = "2024-08-12"  # The start date (e.g., first day of classes)
weeks_of_classes = 15  # Number of weeks the semester runs
holidays = ["2024-11-05", "2024-11-06","2024-11-07", "2024-09-01", "2024-09-22","2024-09-02", "2024-09-23", "2024-10-14", "2024-11-11", "2024-11-19", "2024-11-28", "2024-11-29"]  # Example fixed holidays (e.g., national holidays)

# Convert start date string to datetime object
start_date = datetime.strptime(start_date, '%Y-%m-%d')

# Convert holidays to datetime objects
holidays = [datetime.strptime(holiday, '%Y-%m-%d') for holiday in holidays]

# Calculate the semester end date by adding the number of weeks
semester_end_date = start_date + timedelta(weeks=weeks_of_classes)

# Step 1: Adjust the semester end date based on holidays
def adjust_for_holidays(start_date, semester_end_date, holidays):
    extended_days = 0
    # Loop through each holiday to check if it falls within the semester
    for holiday in holidays:
        if start_date <= holiday <= semester_end_date:
            extended_days += 1  # Add one day to the semester for each holiday
    # Adjust the semester end date by adding the extended days
    return semester_end_date + timedelta(days=extended_days)

# Adjust the semester end date to account for holidays
semester_end_date = adjust_for_holidays(start_date, semester_end_date, holidays)

# Step 2: Define key dates based on the given rules
def get_last_day_of_services(semester_end_date):
    return semester_end_date - timedelta(days=7)

def get_exam_review_period(semester_end_date):
    review_start_date = semester_end_date + timedelta(days=2)
    review_end_date = review_start_date + timedelta(days=1)
    return review_start_date, review_end_date

def get_exam_period(exam_review_end_date):
    exam_start_date = exam_review_end_date + timedelta(days=1)
    exam_end_date = exam_start_date + timedelta(days=5)
    return exam_start_date, exam_end_date

def get_last_day_of_parcial_exams(semester_end_date):
    return semester_end_date - timedelta(days=5)

def get_last_day_of_oral_exams(semester_end_date):
    return semester_end_date - timedelta(days=30)

def get_special_permissions_end(start_date):
    return start_date + timedelta(days=15)

def get_online_evaluation_start(start_date):
    return start_date + timedelta(days=50)

def get_50_percent_return(start_date):
    return start_date + timedelta(days=15)

def get_last_day_to_claim_professor(start_date):
    return start_date + timedelta(days=20)

def get_last_day_to_claim_department(start_date):
    return start_date + timedelta(days=40)

def get_last_day_to_claim_committee(start_date):
    return start_date + timedelta(days=60)

def get_last_day_of_downs(semester_end_date):
    return semester_end_date

def get_last_day_of_parcial_downs(semester_end_date):
    return semester_end_date - timedelta(days=20)

def get_period_of_grades(exam_end_date):
    return exam_end_date + timedelta(days=2)

def get_last_day_of_saturday_classes(start_date, weeks_of_classes):
    saturdays = []
    for i in range(weeks_of_classes):
        saturday = start_date + timedelta(weeks=i, days=(5 - start_date.weekday() + 7) % 7)  # Find Saturdays
        saturdays.append(saturday)
    return saturdays[-1]  # Last Saturday in the semester

# # Calculate all important dates
# last_day_of_services = get_last_day_of_services(semester_end_date)
# exam_review_start, exam_review_end = get_exam_review_period(semester_end_date)
# exam_start_date, exam_end_date = get_exam_period(exam_review_end)
# last_day_of_parcial_exams = get_last_day_of_parcial_exams(semester_end_date)
# last_day_of_oral_exams = get_last_day_of_oral_exams(semester_end_date)
# special_permissions_end = get_special_permissions_end(start_date)
# online_evaluation_start = get_online_evaluation_start(start_date)
# percent_return = get_50_percent_return(start_date)
# last_day_to_claim_professor = get_last_day_to_claim_professor(start_date)
# last_day_to_claim_department = get_last_day_to_claim_department(start_date)
# last_day_to_claim_committee = get_last_day_to_claim_committee(start_date)
# last_day_of_downs = get_last_day_of_downs(semester_end_date)
# last_day_of_parcial_downs = get_last_day_of_parcial_downs(semester_end_date)
# period_of_grades = get_period_of_grades(exam_end_date)
# last_day_of_saturday_classes = get_last_day_of_saturday_classes(start_date, weeks_of_classes)

# # Output all calculated dates
# print(f"Start Date: {start_date.strftime('%Y-%m-%d')}")
# print(f"Semester End Date (Adjusted for Holidays): {semester_end_date.strftime('%Y-%m-%d')}")
# print(f"Last Day of Services: {last_day_of_services.strftime('%Y-%m-%d')}")
# print(f"Exam Review Period: {exam_review_start.strftime('%Y-%m-%d')} to {exam_review_end.strftime('%Y-%m-%d')}")
# print(f"Final Exam Period: {exam_start_date.strftime('%Y-%m-%d')} to {exam_end_date.strftime('%Y-%m-%d')}")
# print(f"Last Day of Parcial Exams: {last_day_of_parcial_exams.strftime('%Y-%m-%d')}")
# print(f"Last Day of Oral Exams for Graduates: {last_day_of_oral_exams.strftime('%Y-%m-%d')}")
# print(f"Final Day for Special Permissions: {special_permissions_end.strftime('%Y-%m-%d')}")
# print(f"Online Evaluation of Professors Start: {online_evaluation_start.strftime('%Y-%m-%d')}")
# print(f"50% Return: {percent_return.strftime('%Y-%m-%d')}")
# print(f"Last Day to Claim to Professor: {last_day_to_claim_professor.strftime('%Y-%m-%d')}")
# print(f"Last Day to Claim to Department: {last_day_to_claim_department.strftime('%Y-%m-%d')}")
# print(f"Last Day to Claim to Committee: {last_day_to_claim_committee.strftime('%Y-%m-%d')}")
# print(f"Last Day of Downs: {last_day_of_downs.strftime('%Y-%m-%d')}")
# print(f"Last Day of Parcial Downs: {last_day_of_parcial_downs.strftime('%Y-%m-%d')}")
# print(f"Period of Grades: {period_of_grades.strftime('%Y-%m-%d')}")
# print(f"Last Day of Saturday Classes: {last_day_of_saturday_classes.strftime('%Y-%m-%d')}")



# # Define key dates based on the given rules
# last_day_of_parcial_exams = add_labor_days(semester_end_date, -5)  # 5 labor days before semester end
# last_day_of_oral_exams = add_normal_days(semester_end_date, -30)  # 30 normal days before semester end
# special_permissions_end = add_normal_days(start_date, 15)  # 15 normal days from start date
# online_evaluation_start = add_labor_days(start_date, 50)  # 50 normal days from start date
# percent_return = add_labor_days(start_date, 10)  # 10 labor days after start date
# last_day_to_claim_professor = add_labor_days(start_date, 20)  # 20 labor days after start date
# last_day_to_claim_department = add_labor_days(start_date, 40)  # 40 labor days after start date
# last_day_to_claim_committee = add_labor_days(start_date, 60)  # 60 labor days after start date
# last_day_of_downs = add_labor_days(semester_end_date, -15)  # 15 labor days before semester end
# period_of_grades = add_normal_days(semester_end_date, 2)  # 2 normal days after final exam period
# last_day_of_saturday_classes = get_last_day_of_saturday_classes(start_date, weeks_of_classes)  # Last Saturday of the semester

# # Output all calculated dates
# print(f"Start Date: {start_date.strftime('%Y-%m-%d')}")
# print(f"Semester End Date (Adjusted for Holidays): {semester_end_date.strftime('%Y-%m-%d')}")
# print(f"Last Day of Parcial Exams: {last_day_of_parcial_exams.strftime('%Y-%m-%d')}")
# print(f"Last Day of Oral Exams for Graduates: {last_day_of_oral_exams.strftime('%Y-%m-%d')}")
# print(f"Final Day for Special Permissions: {special_permissions_end.strftime('%Y-%m-%d')}")
# print(f"Online Evaluation of Professors Start: {online_evaluation_start.strftime('%Y-%m-%d')}")
# print(f"50% Return: {percent_return.strftime('%Y-%m-%d')}")
# print(f"Last Day to Claim to Professor: {last_day_to_claim_professor.strftime('%Y-%m-%d')}")
# print(f"Last Day to Claim to Department: {last_day_to_claim_department.strftime('%Y-%m-%d')}")
# print(f"Last Day to Claim to Committee: {last_day_to_claim_committee.strftime('%Y-%m-%d')}")
# print(f"Last Day of Downs: {last_day_of_downs.strftime('%Y-%m-%d')}")
# print(f"Period of Grades: {period_of_grades.strftime('%Y-%m-%d')}")
# print(f"Last Day of Saturday Classes: {last_day_of_saturday_classes.strftime('%Y-%m-%d')}")








print("==================Calculate by LABOR or NORMAL days=============================")

# Define key dates based on the given rules
dates = []

# Fixed holidays
for holiday in holidays:
    dates.append({"date": holiday, "event": f"Holiday: {holiday.strftime('%Y-%m-%d')}"})


# Calculated dates
def shift_if_holiday(calculated_date, holidays):
    # If the calculated date falls on a holiday, shift to the next day
    while calculated_date in holidays:
        calculated_date += timedelta(days=1)
    return calculated_date

dates.append({"date": shift_if_holiday(add_labor_days(semester_end_date, -10), holidays), "event": "Last Day of Parcial Exams"})
dates.append({"date": shift_if_holiday(add_normal_days(semester_end_date, -30), holidays), "event": "Last Day of Oral Exams for Graduates"})
dates.append({"date": shift_if_holiday(add_normal_days(start_date, 15), holidays), "event": "Final Day for Special Permissions"})
dates.append({"date": shift_if_holiday(add_normal_days(start_date, 50), holidays), "event": "Online Evaluation of Professors Start"})
dates.append({"date": shift_if_holiday(add_labor_days(start_date, 10), holidays), "event": "50% Return"})
dates.append({"date": shift_if_holiday(add_labor_days(start_date, 20), holidays), "event": "Last Day to Claim to Professor"})
dates.append({"date": shift_if_holiday(add_labor_days(start_date, 40), holidays), "event": "Last Day to Claim to Department"})
dates.append({"date": shift_if_holiday(add_labor_days(start_date, 60), holidays), "event": "Last Day to Claim to Committee"})
dates.append({"date": shift_if_holiday(add_labor_days(semester_end_date, -15), holidays), "event": "Last Day of Downs"})
# dates.append({"date": shift_if_holiday(get_last_day_of_saturday_classes(start_date, weeks_of_classes), holidays), "event": "Last Day of Saturday Classes"})




# Add the Period of Final Exams and Period of Review for Final Exams
exam_review_start = shift_if_holiday(add_normal_days(semester_end_date, 2), holidays)  # 2 days after semester end
exam_review_end = shift_if_holiday(exam_review_start + timedelta(days=1), holidays)  # 1 day after review start
exam_start_date = shift_if_holiday(exam_review_end + timedelta(days=1), holidays)  # 1 day after review end
exam_end_date = shift_if_holiday(exam_start_date + timedelta(days=5), holidays)  # 5 days after exam start
period_of_grade_start = shift_if_holiday(exam_end_date + timedelta(days=1), holidays)  # 1 day after exam end
period_of_grade_end = shift_if_holiday(period_of_grade_start + timedelta(days=2), holidays)  # 2 days after period start

dates.append({"date": exam_review_start, "event": "Period of Review for Final Exams"})
dates.append({"date": exam_review_end, "event": "Period of Review for Final Exams"})
dates.append({"date": exam_start_date, "event": "Period of Final Exams"})
dates.append({"date": exam_end_date, "event": "Period of Final Exams"})
dates.append({"date": period_of_grade_start, "event": "Period of Grades"})
dates.append({"date": period_of_grade_end, "event": "Period of Grades"})

# Add Last Day of Saturday Classes
last_saturday = get_last_day_of_saturday_classes(start_date, weeks_of_classes)
dates.append({"date": last_saturday, "event": "Last Day of Saturday Classes"})






# Sort dates by date
dates.sort(key=lambda x: x["date"])

print("==================Calculated Dates=============================")

# Output all calculated dates
for item in dates:
    print(f"{item['date'].strftime('%Y-%m-%d')}: {item['event']}")

print("=================Comprehensive List=======================")
# Of all the days in a specific period, just to see all days

# Generate a comprehensive list of all dates from start to semester end, excluding duplicates
all_dates = []
current_date = start_date
while current_date <= semester_end_date:
    if not any(date["date"] == current_date for date in dates):  # Avoid duplicates
        all_dates.append({"date": current_date, "event": ""})
    current_date += timedelta(days=1)

# Add holidays and calculated dates into the comprehensive list
for date in dates:
    all_dates.append(date)

# Sort the complete list by date
all_dates.sort(key=lambda x: x["date"])

# Output the full comprehensive list with no description for missing days
for item in all_dates:
    print(f"{item['date'].strftime('%Y-%m-%d')}: {item['event']}")
'''







# Get PR Holidays using holidays library
'''import holidays
import datetime

def get_pr_holidays(year):
    # Get Puerto Rico holidays for the given year
    pr_holidays = holidays.PuertoRico(years=year)

    # Format and print the holidays
    holiday_list = []
    for date, name in pr_holidays.items():
        holiday_list.append(f"{date}: {name}")

    return holiday_list

# Get the current year
current_year = datetime.datetime.now().year

# Get the holidays for the current year
holidays_in_pr = get_pr_holidays(current_year)

# Print the list of holidays
for holiday in holidays_in_pr:
    print(holiday)
'''





# import holidays
# import datetime
# from datetime import datetime, timedelta, date

# # Helper function to check if a day is a labor day (Monday to Friday)
# def is_labor_day(date):
#     return date.weekday() < 5  # 0-4 represent Monday to Friday

# # Function to calculate the number of labor days between two dates
# def count_labor_days(start_date, end_date):
#     current_date = start_date
#     labor_days = 0
#     while current_date <= end_date:
#         if is_labor_day(current_date):
#             labor_days += 1
#         current_date += timedelta(days=1)
#     return labor_days

# # Function to calculate normal days (including weekends)
# def count_normal_days(start_date, end_date):
#     return (end_date - start_date).days + 1

# # Adjust a date by adding labor days
# def add_labor_days(start_date, num_days):
#     current_date = start_date
#     while num_days > 0:
#         current_date += timedelta(days=1)
#         if is_labor_day(current_date):
#             num_days -= 1
#     return current_date

# # Adjust a date by adding normal days (including weekends)
# def add_normal_days(start_date, num_days):
#     return start_date + timedelta(days=num_days)

# # Function to get Puerto Rico holidays for the current year
# def get_pr_holidays(year):
#     # Get Puerto Rico holidays for the given year
#     pr_holidays = holidays.PuertoRico(years=year)

#     # Return the holidays as a list of datetime objects
#     holiday_list = [datetime.strptime(str(date), '%Y-%m-%d') for date in pr_holidays.keys()]
#     return holiday_list

# # Get the current year
# def get_current_year():
#     # Get the Year
#     current_time = date.today() #.datetime.now()
#     currentyear = current_time.year

#     return currentyear


# current_year = get_current_year()


# # Get the holidays for the current year
# holidays_in_pr = get_pr_holidays(current_year)

# # Input: Start date, weeks of classes
# start_date = "2024-08-12"  # The start date (e.g., first day of classes)
# weeks_of_classes = 15  # Number of weeks the semester runs

# # Convert start date string to datetime object
# start_date = datetime.strptime(start_date, '%Y-%m-%d')

# # Calculate the semester end date by adding the number of weeks
# semester_end_date = start_date + timedelta(weeks=weeks_of_classes)

# # Adjust the semester end date based on holidays
# def adjust_for_holidays(start_date, semester_end_date, holidays):
#     extended_days = 0
#     for holiday in holidays:
#         if start_date <= holiday <= semester_end_date:
#             extended_days += 1  # Add one day for each holiday
#     return semester_end_date + timedelta(days=extended_days)

# # Adjust the semester end date to account for holidays
# semester_end_date = adjust_for_holidays(start_date, semester_end_date, holidays_in_pr)

# # Define key dates based on the given rules
# dates = []

# # Fixed holidays (dynamic from Puerto Rico holidays)
# for holiday in holidays_in_pr:
#     dates.append({"date": holiday, "event": f"Holiday: {holiday.strftime('%Y-%m-%d')}"})

# # Calculated dates (including the new periods)
# def shift_if_holiday(calculated_date, holidays):
#     # If the calculated date falls on a holiday, shift to the next day
#     while calculated_date in holidays:
#         calculated_date += timedelta(days=1)
#     return calculated_date

# # Add the important dates (with calculations)
# dates.append({"date": shift_if_holiday(add_labor_days(semester_end_date, -5), holidays_in_pr), "event": "Last Day of Parcial Exams"})
# dates.append({"date": shift_if_holiday(add_normal_days(semester_end_date, -30), holidays_in_pr), "event": "Last Day of Oral Exams for Graduates"})
# dates.append({"date": shift_if_holiday(add_normal_days(start_date, 15), holidays_in_pr), "event": "Final Day for Special Permissions"})
# dates.append({"date": shift_if_holiday(add_normal_days(start_date, 50), holidays_in_pr), "event": "Online Evaluation of Professors Start"})
# dates.append({"date": shift_if_holiday(add_labor_days(start_date, 10), holidays_in_pr), "event": "50% Return"})
# dates.append({"date": shift_if_holiday(add_labor_days(start_date, 20), holidays_in_pr), "event": "Last Day to Claim to Professor"})
# dates.append({"date": shift_if_holiday(add_labor_days(start_date, 40), holidays_in_pr), "event": "Last Day to Claim to Department"})
# dates.append({"date": shift_if_holiday(add_labor_days(start_date, 60), holidays_in_pr), "event": "Last Day to Claim to Committee"})
# dates.append({"date": shift_if_holiday(add_labor_days(semester_end_date, -25), holidays_in_pr), "event": "Ultimo Dia de Bajas Parciales"})
# dates.append({"date": shift_if_holiday(add_labor_days(semester_end_date, 0), holidays_in_pr), "event": "Ultimo Dia de Bajas"})


# # Add the Period of Final Exams and Period of Review for Final Exams
# exam_review_start = shift_if_holiday(add_normal_days(semester_end_date, 2), holidays_in_pr)  # 2 days after semester end
# exam_review_end = shift_if_holiday(exam_review_start + timedelta(days=2), holidays_in_pr)  # 2 days after review start
# exam_start_date = shift_if_holiday(exam_review_end + timedelta(days=1), holidays_in_pr)  # 1 day after review end
# exam_end_date = shift_if_holiday(exam_start_date + timedelta(days=5), holidays_in_pr)  # 5 days after exam start
# period_of_grades_start = shift_if_holiday(exam_end_date + timedelta(days=1), holidays_in_pr) # 1 day after end period of final exams
# period_of_grades_end = shift_if_holiday(exam_end_date + timedelta(days=2), holidays_in_pr) # 1 day after start of period of grades

# dates.append({"date": exam_review_start, "event": "Period of Review for Final Exams"})
# dates.append({"date": exam_review_end, "event": "Period of Review for Final Exams"})
# dates.append({"date": exam_start_date, "event": "Period of Final Exams"})
# dates.append({"date": exam_end_date, "event": "Period of Final Exams"})
# dates.append({"date": period_of_grades_start, "event": "Periodo de Notas"})
# dates.append({"date": period_of_grades_end, "event": "Periodo de Notas"})


# def get_last_day_of_saturday_classes(start_date, weeks_of_classes):
#     saturdays = []
#     for i in range(weeks_of_classes):
#         saturday = start_date + timedelta(weeks=i, days=(5 - start_date.weekday() + 7) % 7)  # Find Saturdays
#         saturdays.append(saturday)
#     return saturdays[-1]  # Last Saturday in the semester


# # Add Last Day of Saturday Classes
# last_saturday = get_last_day_of_saturday_classes(start_date, weeks_of_classes)
# dates.append({"date": last_saturday, "event": "Last Day of Saturday Classes"})

# # Sort dates by date
# dates.sort(key=lambda x: x["date"])

# # Generate a comprehensive list of all dates from start to semester end, excluding duplicates
# all_dates = []
# current_date = start_date
# while current_date <= semester_end_date:
#     if not any(date["date"] == current_date for date in dates):  # Avoid duplicates
#         all_dates.append({"date": current_date, "event": "No Description"})
#     current_date += timedelta(days=1)

# # Add holidays and calculated dates into the comprehensive list
# for date in dates:
#     all_dates.append(date)

# # Sort the complete list by date
# all_dates.sort(key=lambda x: x["date"])

# # Output the full comprehensive list with no description for missing days
# for item in all_dates:
#     print(f"{item['date'].strftime('%Y-%m-%d')}: {item['event']}")








import holidays
from datetime import datetime, date

def get_academic_period(startdate):
    # Convert startdate to a date object using strptime
    start_date = datetime.strptime(startdate, '%Y-%m-%d').date()  # Parse 'YYYY-MM-DD' string to date object

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



# Example usage
startdate = '2024-08-12'  # Change this to any date you'd like to check
year = 2024

holidays_in_period = get_filtered_holidays(year, startdate)


print("Dynamic Holidays depending on academic period")
# Print the holidays for the given academic period
for holiday in holidays_in_period:
    print(holiday)
