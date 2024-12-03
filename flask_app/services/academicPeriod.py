# Academic logic
from flask_app.services.utils import get_academic_period, get_filtered_holidays

from datetime import datetime, date, timedelta
from flask_app.services.utils import get_pr_holidays, format_date_for_display  # Import the holiday utility function

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
    current_time = date.today()  # Get today's date
    currentyear = current_time.year
    return currentyear

def get_academic_period(startdate):
    start_date = datetime.strptime(startdate, '%Y-%m-%d').date()
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
    pr_holidays = get_pr_holidays(year)
    academic_period = get_academic_period(startdate)

    filtered_PR_holidays = []
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

def combine_holidays(fixed_holidays, year, startdate):
    dynamic_holidays = get_filtered_PR_holidays(year, startdate)
    fixed_holidays = [{"holiday_date": datetime.strptime(holiday["holiday_date"], '%Y-%m-%d').date(), "holiday_name": holiday["holiday_name"]} for holiday in fixed_holidays]
    
    fixed_holiday_dates = {holiday["holiday_date"]: holiday["holiday_name"] for holiday in fixed_holidays}
    dynamic_holiday_dates = {holiday["holiday_date"]: holiday["holiday_name"] for holiday in dynamic_holidays}

    repeated_holidays = fixed_holiday_dates.keys() & dynamic_holiday_dates.keys()

    if repeated_holidays:
        print("Warning: The following holidays appear in both the fixed and dynamic holiday lists:")
        for date in repeated_holidays:
            print(f"  {date} - Fixed: {fixed_holiday_dates[date]}, Dynamic: {dynamic_holiday_dates[date]}")

    combined_holidays = []
    combined_holidays.extend([{"holiday_date": date, "holiday_name": fixed_holiday_dates[date]} for date in fixed_holiday_dates])

    for date, name in dynamic_holiday_dates.items():
        if date not in fixed_holiday_dates:
            combined_holidays.append({"holiday_date": date, "holiday_name": name})

    return sorted(combined_holidays, key=lambda x: x["holiday_date"])


# Update the date format before returning it in the response
def format_date_for_display(date_obj):
    # Format the date to 'Mon, 26 Aug 2024'
    return date_obj.strftime("%a, %d %b %Y")


# Main function to calculate important dates
def calculate_important_dates(start_date, weeks_of_classes, fixed_holidays, year):
    combined_holidays = combine_holidays(fixed_holidays, year, start_date)
    start_date = datetime.strptime(start_date, '%Y-%m-%d').date()
    semester_end_date = start_date + timedelta(weeks=weeks_of_classes)
    dates = []

    def adjust_for_holidays(start_date, semester_end_date, holidays):
        extended_days = 0
        for holiday in holidays:
            if start_date <= holiday["holiday_date"] <= semester_end_date:
                extended_days += 1
        return semester_end_date + timedelta(days=extended_days)

    semester_end_date = adjust_for_holidays(start_date, semester_end_date, combined_holidays)

    for holiday in combined_holidays:
        # Format the date before appending it
        # formatted_date = format_date_for_display(holiday["holiday_date"])
        dates.append({"date": holiday["holiday_date"], "event": f"Holiday: {holiday['holiday_name']}"})

    def shift_if_holiday(calculated_date, holidays):
        holiday_dates = {holiday["holiday_date"] for holiday in holidays}
        while calculated_date in holiday_dates:
            calculated_date += timedelta(days=1)
        return calculated_date


    # Append important dates like exams and reviews
    dates.append({"date": shift_if_holiday(add_labor_days(semester_end_date, -10), combined_holidays), "event": "Last Day of Parcial Exams"})
    dates.append({"date": shift_if_holiday(add_normal_days(semester_end_date, -30), combined_holidays), "event": "Last Day of Oral Exams for Graduates"})
    dates.append({"date": shift_if_holiday(add_normal_days(start_date, 15), combined_holidays), "event": "Final Day for Special Permissions"})
    dates.append({"date": shift_if_holiday(add_normal_days(start_date, 50), combined_holidays), "event": "Online Evaluation of Professors Start"})
    dates.append({"date": shift_if_holiday(add_labor_days(start_date, 10), combined_holidays), "event": "50% Return"})
    dates.append({"date": shift_if_holiday(add_labor_days(start_date, 20), combined_holidays), "event": "Last Day to Claim to Professor"})
    dates.append({"date": shift_if_holiday(add_labor_days(start_date, 40), combined_holidays), "event": "Last Day to Claim to Department"})
    dates.append({"date": shift_if_holiday(add_labor_days(start_date, 60), combined_holidays), "event": "Last Day to Claim to Committee"})
    dates.append({"date": shift_if_holiday(add_labor_days(semester_end_date, -15), combined_holidays), "event": "Last Day of Downs"})

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

    dates.sort(key=lambda x: x["date"])

    # Format the dates after sorting and before sending the response
    formatted_dates = [{"date": format_date_for_display(item['date']), "event": item['event']} for item in dates]

    return formatted_dates

