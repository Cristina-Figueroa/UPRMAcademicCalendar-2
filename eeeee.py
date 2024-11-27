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
DATABASE_PATH = r"C:\Users\crist\VSCode\UPRMAcademicCalendar-2\database\calendaruprm.db"

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


def generate_dates(start_date, weeks):
    """Generate a list of tuples for dates in the academic period."""
    tuple_list = []
    start = datetime.strptime(start_date, "%Y-%m-%d")
    
    # Define weeks based on academic period
    periods = {
        "fall": 15, "spring": 15,
        "summerV1": 4, "summerV2": 4,
        "summerExtended": 6
    }
    weeks = periods.get(period, 0) 

    # Fetch holidays from the database
    holidays = fetch_holidays()
    end_date = calculate_end_date(startdate, holidays, weeks)
    print(end_date.date())

    # Add YYYY to MM-DD
    formatted_holidays = add_year_to_formatted_date(holidays)
    # # Pasa las fechas por los holidays
    countExtraDaysNeeded = 0

    for i in range(weeks * 7):  # Loop through days in the period
        # New day in period
        current_date = start + timedelta(days=i)
        # print("Day to be checked:" , current_date.date())  # True

        # Check if the current date matches any holiday
        description = None  # Default to None if not a holiday
        weekday = None  # Default to None if not a holiday

        for holiday in formatted_holidays:
            holiday_date = datetime.strptime(holiday[3], "%Y-%m-%d")  # Convert holiday's formatted_date to datetime
            # print(current_date.date(), holiday_date.date(), current_date.date() == holiday_date.date())  # True
            if current_date.date() == holiday_date.date():
                description = holiday[2]  # Use holiday_description if it matches
                weekday = "HOLIDAY"
                countExtraDaysNeeded = countExtraDaysNeeded + 1
                break  # Exit the loop once we find the matching holiday
        
        # print("Day to be added:" , current_date.date())  # True

        # Add the current date to the tuple_list
        tuple_list.append((
            f"{current_date.year}-{current_date.month}-{current_date.day}", 
            current_date.weekday(),
            description if description else 'null',  # Set 'null' if not a holiday
            f"{monthnumber_to_month(current_date.month)} {current_date.day:02d}, {current_date.year}",
            weekday if weekday else f"{print_dayoftheweek(current_date.weekday())}"
            ))
    # formatted_dates = [f"{monthnumber_to_month(m)} {d:02d}, {y}, {print_dayoftheweek(weekday)}" for y, m, d, weekday in dates]

        # tuple_list.append((
        #     current_date.year, 
        #     current_date.month, 
        #     current_date.day, 
        #     current_date.weekday(),  # Get the weekday (0=Monday, 6=Sunday)
        #     description if description else 'null'  # Set 'null' if not a holiday
        # ))


    # Add extra days

    # for extra_day in range(countExtraDaysNeeded):
    #         current_date = start + timedelta(days=weeks * 7 + extra_day)  # Start after the main period

    #         # Add extra days to the tuple_list
    #         tuple_list.append((
    #             f"{current_date.year}-{current_date.month}-{current_date.day}",  # Formatted date
    #             current_date.weekday(),  # Weekday number (0=Monday, 6=Sunday)
    #             'null',  # No description since these are extra days
    #             f"{monthnumber_to_month(current_date.month)} {current_date.day:02d}, {current_date.year}",  # Formatted string
    #             f"{print_dayoftheweek(current_date.weekday())}"  # Day of the week as a string
    #         ))



    # return removeduplicates(tuple_list), formatted_holidays
    return tuple_list, formatted_holidays



startdate = '2024-8-12'
period = 'fall'
# print(generate_dates(startdate, period))
dates, holidays = generate_dates(startdate, period)

for d in dates:
    # print("Dates:", dates)
    print(d)


print("Holidays:") #, holidays)
for h in holidays:
    print(h)





# Example Inputs
required_occurrences = 15  # Each weekday must occur 15 times

# Calculate the end date
end_date = calculate_end_date(startdate, holidays, required_occurrences)

# Output the result
print("Calculated End Date:", end_date.strftime("%Y-%m-%d"))


