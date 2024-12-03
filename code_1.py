from datetime import datetime, timedelta
from datetime import datetime, date
import holidays


# =======================Calculate by LABOR or NORMAL days=============================

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

# Get Last Day of Saturday Class
def get_last_day_of_saturday_classes(start_date, weeks_of_classes):
    saturdays = []
    for i in range(weeks_of_classes):
        saturday = start_date + timedelta(weeks=i, days=(5 - start_date.weekday() + 7) % 7)  # Find Saturdays
        saturdays.append(saturday)
    return saturdays[-1]  # Last Saturday in the semester

# Get the current year
def get_current_year():
    # Get the Year
    current_time = date.today() #.datetime.now()
    currentyear = current_time.year
    return currentyear

def get_academic_period(startdate):
    # Convert startdate to a date object using strptime
    start_date = datetime.strptime(startdate, '%Y-%m-%d').date()  # Parse 'YYYY-MM-DD' string to date object

    # Define the academic periods as date objects
    fall_start = date(start_date.year, 8, 1)
    fall_end = date(start_date.year, 12, 31)
    
    spring_start = date(start_date.year, 1, 1)
    spring_end = date(start_date.year, 5, 30)
    
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

def get_filtered_PR_holidays(year, startdate):
    # Get Puerto Rico holidays
    # pr_holidays = holidays.PR(years=year)
    pr_holidays = get_pr_holidays(year)

    # Filter holidays based on the academic period
    academic_period = get_academic_period(startdate)

    filtered_PR_holidays = []

    # Define holiday ranges based on academic periods
    if academic_period == "Fall":
        holiday_range = (date(year, 8, 1), date(year, 12, 31))
    elif academic_period == "Spring":
        holiday_range = (date(year, 1, 1), date(year, 5, 30))
    elif academic_period == "Summer V1":
        holiday_range = (date(year, 6, 1), date(year, 6, 30))
    elif academic_period == "Summer V2":
        holiday_range = (date(year, 7, 1), date(year, 7, 31))
    elif academic_period == "Extended Summer":
        holiday_range = (date(year, 6, 1), date(year, 7, 31))
    else:
        holiday_range = None

    if holiday_range:
        for date_obj, name in pr_holidays.items():
            if holiday_range[0] <= date_obj <= holiday_range[1]:
                filtered_PR_holidays.append({"holiday_date": date_obj, "holiday_name": name})
    

    return filtered_PR_holidays


# Function to get Puerto Rico holidays for the current year
def get_pr_holidays(year):
    # Get Puerto Rico holidays for the given year
    pr_holidays = holidays.PuertoRico(years=year)
    return pr_holidays

# Combine fixed holidays and dynamic holidays
def combine_holidays(fixed_holidays, year, startdate):
    # Get dynamic holidays filtered by academic period
    dynamic_holidays = get_filtered_PR_holidays(year, startdate)
    
    # Convert fixed holidays to datetime.date objects and add names
    fixed_holidays = [{"holiday_date": datetime.strptime(holiday["holiday_date"], '%Y-%m-%d').date(), "holiday_name": holiday["holiday_name"]} for holiday in fixed_holidays]
    
    # Check for duplicates: Find repeated holiday dates between fixed and dynamic holidays
    fixed_holiday_dates = {holiday["holiday_date"]: holiday["holiday_name"] for holiday in fixed_holidays}
    dynamic_holiday_dates = {holiday["holiday_date"]: holiday["holiday_name"] for holiday in dynamic_holidays}
    
    # Find any repeated holidays, prioritize the fixed holiday
    repeated_holidays = fixed_holiday_dates.keys() & dynamic_holiday_dates.keys()

    if repeated_holidays:
        print("Warning: The following holidays appear in both the fixed and dynamic holiday lists:")
        for date in repeated_holidays:
            print(f"  {date} - Fixed: {fixed_holiday_dates[date]}, Dynamic: {dynamic_holiday_dates[date]}")
    
    # Combine the fixed holidays first (prioritize them) and then add the dynamic holidays without duplicates
    combined_holidays = []
    
    # Add all fixed holidays first (no duplicates)
    combined_holidays.extend([{"holiday_date": date, "holiday_name": fixed_holiday_dates[date]} for date in fixed_holiday_dates])
    
    # Add dynamic holidays that are not in the fixed holidays list
    for date, name in dynamic_holiday_dates.items():
        if date not in fixed_holiday_dates:
            combined_holidays.append({"holiday_date": date, "holiday_name": name})

    # Sort combined holidays by date
    return sorted(combined_holidays, key=lambda x: x["holiday_date"])

def get_academic_weeks(academic_period):
    # Mapping the academic periods to the number of weeks
    academic_weeks = {
        "Fall": 15,
        "Spring": 15,
        "Summer V1": 4,
        "Summer V2": 4,
        "Extended Summer": 6
    }
    # Return the number of weeks for the given academic period
    return academic_weeks.get(academic_period, "Invalid academic period")


# Example usage






# Input: Start date, weeks of classes, and list of holidays
start_date = "2024-08-12"  # The start date (e.g., first day of classes)
weeks_of_classes = 15  # Number of weeks the semester runs
fixed_holidays = [
    {"holiday_date": "2024-09-01", "holiday_name": "Labsdfghjor Day"},
    {"holiday_date": "2024-09-22", "holiday_name": "Indasdzfxependence Day"},
    {"holiday_date": "2024-09-02", "holiday_name": "Labsdfor Day (Observed)"},
    {"holiday_date": "2024-09-23", "holiday_name": "Natsdfghional Day"},
    {"holiday_date": "2024-10-14", "holiday_name": "Colgumbus Day"},
    {"holiday_date": "2024-11-05", "holiday_name": "Elezxcvction Day"},
    {"holiday_date": "2024-11-06", "holiday_name": "Vetdedf grans Day"},
    {"holiday_date": "2024-11-07", "holiday_name": "dtfgh j Day"},
    {"holiday_date": "2024-11-11", "holiday_name": "Veterxtcyjkans Day (Observed)"},
    {"holiday_date": "2024-11-19", "holiday_name": "Puertxtcfyvgbhjo Rico Day"},
    {"holiday_date": "2024-11-28", "holiday_name": "Thankxcfvghbjsgiving"},
    {"holiday_date": "2024-11-29", "holiday_name": "Blaczxtcyvghbk Friday"}
]
# ["2024-11-05", "2024-11-06","2024-11-07", "2024-09-01", "2024-09-22","2024-09-02", "2024-09-23", "2024-10-14", "2024-11-11", "2024-11-19", "2024-11-28", "2024-11-29"]  # Example fixed holidays (e.g., national holidays)
year = 2024



current_year = get_current_year()
holidays_in_period = get_filtered_PR_holidays(year, start_date)



'''print("Dynamic Holidays depending on academic period")
# Print the holidays for the given academic period
for holiday in holidays_in_period:
    print(holiday)'''



# Convert holidays to datetime objects
# fixed_holidays = [datetime.strptime(holiday, '%Y-%m-%d') for holiday in fixed_holidays]


# Verify holidays are not repeated



# Combine fixed and dynamic holidays
combined_holidays = combine_holidays(fixed_holidays, year, start_date)




# Convert start date string to datetime object
start_date = datetime.strptime(start_date, '%Y-%m-%d').date()
# start_date = datetime.strptime(startdate, '%Y-%m-%d').date()  # Convert start date to date


# Calculate the semester end date by adding the number of weeks
semester_end_date = start_date + timedelta(weeks=weeks_of_classes)




# Define key dates based on the given rules
dates = []

# Fixed holidays
# for holiday in fixed_holidays:
#     dates.append({"date": holiday, "event": f"Holiday: {holiday.strftime('%Y-%m-%d')}"})





# Step 1: Adjust the semester end date based on holidays
def adjust_for_holidays(start_date, semester_end_date, holidays):
    extended_days = 0
    # Loop through each holiday to check if it falls within the semester
    for holiday in holidays:
        if start_date <= holiday["holiday_date"] <= semester_end_date:
            extended_days += 1  # Add one day to the semester for each holiday
    # Adjust the semester end date by adding the extended days
    return semester_end_date + timedelta(days=extended_days)



# Adjust the semester end date to account for holidays
semester_end_date = adjust_for_holidays(start_date, semester_end_date, combined_holidays)


# Fixed holidays
for holiday in combined_holidays:
    # dates.append({"date": holiday, "event": f"Holidaysssssssss: {holiday['holiday_name']}"})
    dates.append({"date": holiday["holiday_date"], "event": f"Holiday: {holiday['holiday_name']}"})
    # print(f"{holiday['holiday_date']} - {holiday['holiday_name']}")

# print(dates)













# Step 2: Define key dates based on the given rules

# Calculated dates
def shift_if_holiday(calculated_date, holidays):
    # Convert the list of holidays into a set of unique dates to avoid duplicates
    holiday_dates = {holiday["holiday_date"] for holiday in holidays}
    
    # If the calculated date falls on a holiday, shift to the next day
    while calculated_date in holiday_dates:
        calculated_date += timedelta(days=1)
    return calculated_date

dates.append({"date": shift_if_holiday(add_labor_days(semester_end_date, -10), combined_holidays), "event": "Last Day of Parcial Exams"})
dates.append({"date": shift_if_holiday(add_normal_days(semester_end_date, -30), combined_holidays), "event": "Last Day of Oral Exams for Graduates"})
dates.append({"date": shift_if_holiday(add_normal_days(start_date, 15), combined_holidays), "event": "Final Day for Special Permissions"})
dates.append({"date": shift_if_holiday(add_normal_days(start_date, 50), combined_holidays), "event": "Online Evaluation of Professors Start"})
dates.append({"date": shift_if_holiday(add_labor_days(start_date, 10), combined_holidays), "event": "50% Return"})
dates.append({"date": shift_if_holiday(add_labor_days(start_date, 20), combined_holidays), "event": "Last Day to Claim to Professor"})
dates.append({"date": shift_if_holiday(add_labor_days(start_date, 40), combined_holidays), "event": "Last Day to Claim to Department"})
dates.append({"date": shift_if_holiday(add_labor_days(start_date, 60), combined_holidays), "event": "Last Day to Claim to Committee"})
dates.append({"date": shift_if_holiday(add_labor_days(semester_end_date, -15), combined_holidays), "event": "Last Day of Downs"})
# dates.append({"date": shift_if_holiday(get_last_day_of_saturday_classes(start_date, weeks_of_classes), holidays), "event": "Last Day of Saturday Classes"})




# Add the Period of Final Exams and Period of Review for Final Exams
exam_review_start = shift_if_holiday(add_normal_days(semester_end_date, 2), combined_holidays)  # 2 days after semester end
exam_review_end = shift_if_holiday(exam_review_start + timedelta(days=1), combined_holidays)  # 1 day after review start
exam_start_date = shift_if_holiday(exam_review_end + timedelta(days=1), combined_holidays)  # 1 day after review end
exam_end_date = shift_if_holiday(exam_start_date + timedelta(days=5), combined_holidays)  # 5 days after exam start
period_of_grade_start = shift_if_holiday(exam_end_date + timedelta(days=1), combined_holidays)  # 1 day after exam end
period_of_grade_end = shift_if_holiday(period_of_grade_start + timedelta(days=2), combined_holidays)  # 2 days after period start

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

print("==================Calculated Dates Fixed Holidays Only=============================")

# Output all calculated dates
for item in dates:
    print(f"{item['date'].strftime('%Y-%m-%d')}: {item['event']}")

# print("=================Comprehensive List=======================")
# # Of all the days in a specific period, just to see all days

# # Generate a comprehensive list of all dates from start to semester end, excluding duplicates
# all_dates = []
# current_date = start_date
# while current_date <= semester_end_date:
#     if not any(date["date"] == current_date for date in dates):  # Avoid duplicates
#         all_dates.append({"date": current_date, "event": ""})
#     current_date += timedelta(days=1)

# # Add holidays and calculated dates into the comprehensive list
# for date in dates:
#     all_dates.append(date)

# # Sort the complete list by date
# all_dates.sort(key=lambda x: x["date"])

# # Output the full comprehensive list with no description for missing days
# for item in all_dates:
#     print(f"{item['date'].strftime('%Y-%m-%d')}: {item['event']}")



