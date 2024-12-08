# Academic logic
import holidays
from datetime import datetime, date, timedelta
from flask_app.services.utils import get_academic_period, get_filtered_holidays, execute_query_get_dates, execute_query_get_filtered_holidays, execute_query_get_holidays2, execute_query
# from flask_app.services.holidays import execute_query_get_holidays

# Fetch Dates from DB
def fetch_important_dates():
    # Define your query and pass the parameters
    query = """
        SELECT id, date, event, formatted_date
        FROM important_dates
        ORDER BY formatted_date, event
    """
    
    # Call execute_query_get_dates with the query and parameters
    return execute_query_get_dates(query)

# Add Date to DB
def add_date_to_db(data):
    query = "INSERT INTO important_dates (date, event, formatted_date) VALUES (%s, %s, %s)"
    execute_query(query, (data['date'], data['event'], data['formatted_date']))



# Edit Date in DB
def update_date_in_db(id, data):
    fields = []
    params = []
    if 'date' in data:
        fields.append("date = %s")
        params.append(data['date'])
    if 'event' in data:
        fields.append("event = %s")
        params.append(data['event'])
    if 'formatted_date' in data:
        fields.append("formatted_date = %s")
        params.append(data['formatted_date'])
    query = f"UPDATE important_dates SET {', '.join(fields)} WHERE id = %s"
    params.append(id)
    execute_query(query, params)



# Delete Date in DB
def delete_date_from_db(id):
    query = "DELETE FROM important_dates WHERE id = %s"
    execute_query(query, (id,))


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
    while num_days != 0:
        current_date += timedelta(days=1) if num_days > 0 else timedelta(days=-1) #Add labor days
        if is_labor_day(current_date) and num_days > 0:  # If shift_day positive, subtract num_days
            num_days -= 1
        elif is_labor_day(current_date) and num_days < 0:  # If shift_day negative, add num_days, until num_days = 0
            num_days += 1
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
    
    summer_v1_start = date(start_date.year, 5, 20)
    summer_v1_end = date(start_date.year, 6, 30)
    
    summer_v2_start = date(start_date.year, 7, 1)
    summer_v2_end = date(start_date.year, 7, 31)
    
    extended_summer_start = date(start_date.year, 5, 20)
    extended_summer_end = date(start_date.year, 7, 31)

    if fall_start <= start_date <= fall_end:
        return "fall"
    elif spring_start <= start_date <= spring_end:
        return "spring"
    elif summer_v1_start <= start_date <= summer_v1_end:
        return "summerV1"
    elif summer_v2_start <= start_date <= summer_v2_end:
        return "summerV2"
    elif extended_summer_start <= start_date <= extended_summer_end:
        return "extendedSummer"
    else:
        return None


from datetime import datetime, timedelta

def get_academic_period_range(year, start_date):
    
    # Determine the academic period range based on the start date
    academic_period = get_academic_period(start_date)
    print(f"Determined academic period: {academic_period}")  # Debugging line

    if academic_period == "fall":
        start_range = f"{year}-08-01"
        end_range = f"{year}-12-31"
    elif academic_period == "spring":
        start_range = f"{year}-01-01"
        end_range = f"{year}-05-20"
    elif academic_period == "summerV1":
        start_range = f"{year}-05-20"
        end_range = f"{year}-06-30"
    elif academic_period == "summerV2":
        start_range = f"{year}-07-01"
        end_range = f"{year}-07-31"
    elif academic_period == "extendedSummer":
        start_range = f"{year}-05-20"
        end_range = f"{year}-07-31"
    else:
        return None  # Invalid academic period
    
    return start_range, end_range




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



def fetch_filtered_and_add_year_to_holidays(year, start_date):

    # Get Academic Period Range
    start_range, end_range = get_academic_period_range(year, start_date)

    if not start_range or not end_range:
        return []  # Return an empty list if the period is invalid

    # Convert the start and end ranges to date objects
    start_range_date = datetime.strptime(start_range, "%Y-%m-%d").date()
    end_range_date = datetime.strptime(end_range, "%Y-%m-%d").date()

    # Query to fetch holidays with the formatted_date in MM-DD format
    query = """
        SELECT holiday_name, formatted_date
        FROM holidays
        ORDER BY formatted_date
    """
    # Fetch holidays from the database
    holidays = execute_query_get_holidays2(query)
    
    # Prepare the list of fixed holidays with the year added to formatted_date
    fixed_holidays = []

    for holiday in holidays:
        # Add the year to the formatted_date (MM-DD -> YYYY-MM-DD)
        full_date = f"{year}-{holiday['formatted_date']}"
        
        # Append the holiday with the new full date
        fixed_holidays.append({
            "holiday_date": full_date,  # now the date is in YYYY-MM-DD format
            "holiday_name": holiday["holiday_name"]
        })

    # Filter the holidays that fall within the period range
    filtered_holidays = []
    
    for holiday in fixed_holidays:
        # Access the holiday date
        holiday_date = datetime.strptime(holiday["holiday_date"], "%Y-%m-%d").date()
        
        # Check if the holiday falls within the range
        if start_range_date <= holiday_date <= end_range_date:
            filtered_holidays.append(holiday)
    
    return filtered_holidays




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

# Function to get Puerto Rico holidays for the current year
def get_pr_holidays(year):
    # Get Puerto Rico holidays for the given year
    pr_holidays = holidays.PuertoRico(years=year)
    return pr_holidays

# Update the date format before returning it in the response
def format_date_for_display(date_obj):
    # Format the date to 'Mon, 26 Aug 2024'
    return date_obj.strftime("%a, %d %b %Y")

def format_date_for_display_formatted_date(date_obj):
    # Format the date to '2024-08-26'
    return date_obj.strftime("%Y-%m-%d")


# Main functions to calculate important dates
def calculate_important_dates_with_formatted_date(start_date, weeks_of_classes, fixed_holidays, guidelines_list, year):
    combined_holidays = combine_holidays(fixed_holidays, year, start_date)
    start_date = datetime.strptime(start_date, '%Y-%m-%d').date() # Converting str to date obj
    semester_end_date = start_date + timedelta(weeks=weeks_of_classes)
    
    dates = []
    dates.append({"date": start_date, "event": "Primer Dia de Clases", "formatted_date": start_date})

    def adjust_for_holidays(start_date, semester_end_date, holidays):
        extended_days = 0
        for holiday in holidays:
            if start_date <= holiday["holiday_date"] <= semester_end_date:
                extended_days += 1
        return semester_end_date + timedelta(days=extended_days)

    semester_end_date = adjust_for_holidays(start_date, semester_end_date, combined_holidays)
    
    # Adjust semester_end_date if it falls on a Saturday or Sunday, shifting to Friday
    if semester_end_date.weekday() == 5:  # Saturday (5)
        semester_end_date -= timedelta(days=1)  # Move to Friday
    elif semester_end_date.weekday() == 6:  # Sunday (6)
        semester_end_date -= timedelta(days=2)  # Move to Friday
    
    dates.append({"date": semester_end_date, "event": "Ultimo Dia de Clases", "formatted_date": semester_end_date})

    for holiday in combined_holidays:
        dates.append({"date": holiday["holiday_date"], "event": f"Feriado: {holiday['holiday_name']}", "formatted_date": holiday["holiday_date"]})

    def shift_if_holiday(calculated_date, holidays):
        holiday_dates = {holiday["holiday_date"] for holiday in holidays}
        while calculated_date in holiday_dates:
            calculated_date += timedelta(days=1)
        return calculated_date

    # Loop over the guidelines list and apply the correct function based on the day_type
    for guideline in guidelines_list:
        shift_days = guideline["shift_days"]
        day_type = guideline["day_type"]
        start = guideline["start"]

        # Check the day type and call the corresponding function
        if day_type == "LABORABLES" and start == "STARTDATE":
            # Adjust date by adding labor days
            adjusted_date = add_labor_days(start_date, shift_days)
        elif day_type == "LABORABLES" and start == "ENDDATE":
            # Adjust date by adding labor days
            adjusted_date = add_labor_days(semester_end_date, shift_days)
        elif day_type == "NORMALES" and start == "STARTDATE":
            # Adjust date by adding normal days (including weekends)
            adjusted_date = add_normal_days(start_date, shift_days)
        elif day_type == "NORMALES" and start == "ENDDATE":
            # Adjust date by adding normal days (including weekends)
            adjusted_date = add_normal_days(semester_end_date, shift_days)
        elif day_type == "NORMALES" and start == "PERIODO DE REPASO":
            # Adjust date by adding normal days (including weekends)
            adjusted_date = add_normal_days(semester_end_date, shift_days)
        elif day_type == "NORMALES" and start == "PERIODO DE EXAMENES FINALES":
            # Adjust date by adding normal days (including weekends)
            adjusted_date = add_normal_days(semester_end_date, shift_days)
        elif day_type == "SABADOS" and start == "STARTDATE":
            adjusted_date = get_last_day_of_saturday_classes(start_date, shift_days)
        else:
            continue  # Skip if the day type doesn't match

        # Append the calculated date for this guideline
        dates.append({"date": shift_if_holiday(adjusted_date, combined_holidays), 
                      "event": f"{guideline['guideline_name']}", 
                      "formatted_date": shift_if_holiday(adjusted_date, combined_holidays)})

    dates.sort(key=lambda x: x["date"])

    # Format the dates after sorting and before sending the response
    formatted_dates = [{"date": format_date_for_display(item['date']), 
                        "event": item['event'], 
                        "formatted_date": format_date_for_display_formatted_date(item['formatted_date']) } for item in dates]

    return formatted_dates










# Main functions to calculate important dates
def calculate_important_dates_using_guidelines(start_date, weeks_of_classes, fixed_holidays, guidelines_list, year):
    combined_holidays = combine_holidays(fixed_holidays, year, start_date)
    start_date = datetime.strptime(start_date, '%Y-%m-%d').date()
    semester_end_date = start_date + timedelta(weeks=weeks_of_classes)
    
    dates = []
    dates.append({"date": start_date, "event": "Primer Dia de Clases"})

    def adjust_for_holidays(start_date, semester_end_date, holidays):
        extended_days = 0
        for holiday in holidays:
            if start_date <= holiday["holiday_date"] <= semester_end_date:
                extended_days += 1
        return semester_end_date + timedelta(days=extended_days)

    semester_end_date = adjust_for_holidays(start_date, semester_end_date, combined_holidays)
    
    # Adjust semester_end_date if it falls on a Saturday or Sunday, shifting to Friday
    if semester_end_date.weekday() == 5:  # Saturday (5)
        semester_end_date -= timedelta(days=1)  # Move to Friday
    elif semester_end_date.weekday() == 6:  # Sunday (6)
        semester_end_date -= timedelta(days=2)  # Move to Friday
    
    dates.append({"date": semester_end_date, "event": "Ultimo Dia de Clases"})

    for holiday in combined_holidays:
        dates.append({"date": holiday["holiday_date"], "event": f"Feriado: {holiday['holiday_name']}"})

    def shift_if_holiday(calculated_date, holidays):
        holiday_dates = {holiday["holiday_date"] for holiday in holidays}
        while calculated_date in holiday_dates:
            calculated_date += timedelta(days=1)
        return calculated_date


    # # Initialize the dates for the important periods
    # repaso_start_date = None
    # examenes_finals_start_date = None
    # period_of_notes_start_date = None


    # Loop over the guidelines list and apply the correct function based on the day_type
    for guideline in guidelines_list:
        shift_days = guideline["shift_days"]
        day_type = guideline["day_type"]
        start = guideline["start"]

        # # Handle the "PERIODO DE EXAMENES FINALES" period
        # if day_type == "NORMALES" and start == "PERIODO DE REPASO" and repaso_start_date:
        #     # The start of the final exams is after the review period
        #     examenes_finals_start_date = shift_if_holiday(add_normal_days(repaso_start_date, shift_days), combined_holidays)
        #     dates.append({"date": examenes_finals_start_date, "event": "Periodo de Examenes Finales"})

        # # Handle the "PERIODO DE NOTAS" period
        # if day_type == "NORMALES" and start == "PERIODO DE EXAMENES FINALES" and examenes_finals_start_date:
        #     # The grade period is after the final exams
        #     period_of_notes_start_date = shift_if_holiday(add_normal_days(examenes_finals_start_date, shift_days), combined_holidays)
        #     dates.append({"date": period_of_notes_start_date, "event": "Periodo de Notas"})



        # Check the day type and call the corresponding function
        if day_type == "LABORABLES" and start == "STARTDATE":
            # Adjust date by adding labor days
            adjusted_date = add_labor_days(start_date, shift_days)
        elif day_type == "LABORABLES" and start == "ENDDATE":
            # Adjust date by adding labor days
            adjusted_date = add_labor_days(semester_end_date, shift_days)
        elif day_type == "NORMALES" and start == "STARTDATE":
            # Adjust date by adding normal days (including weekends)
            adjusted_date = add_normal_days(start_date, shift_days)
        elif day_type == "NORMALES" and start == "ENDDATE":
            # Adjust date by adding normal days (including weekends)
            adjusted_date = add_normal_days(semester_end_date, shift_days)
        elif day_type == "NORMALES" and start == "PERIODO DE REPASO":
            # Adjust date by adding normal days (including weekends)
            adjusted_date = add_normal_days(semester_end_date, shift_days)
        elif day_type == "NORMALES" and start == "PERIODO DE EXAMENES FINALES":
            # Adjust date by adding normal days (including weekends)
            adjusted_date = add_normal_days(semester_end_date, shift_days)
        elif day_type == "SABADOS" and start == "STARTDATE":
            adjusted_date = get_last_day_of_saturday_classes(start_date, shift_days)
        else:
            continue  # Skip if the day type doesn't match





        # Append the calculated date for this guideline
        dates.append({"date": shift_if_holiday(adjusted_date, combined_holidays), "event": f"{guideline['guideline_name']}"})




    # STATIC CALCULATION OF PERIODS
    # Add the Period of Final Exams and Period of Review for Final Exams
    # exam_review_start = shift_if_holiday(add_normal_days(semester_end_date, 2), combined_holidays)  # 2 days after semester end
    # exam_review_end = shift_if_holiday(exam_review_start + timedelta(days=1), combined_holidays)  # 1 day after review start
    # exam_start_date = shift_if_holiday(exam_review_end + timedelta(days=1), combined_holidays)  # 1 day after review end
    # exam_end_date = shift_if_holiday(exam_start_date + timedelta(days=5), combined_holidays)  # 5 days after exam start
    # period_of_grade_start = shift_if_holiday(exam_end_date + timedelta(days=1), combined_holidays)  # 1 day after exam end
    # period_of_grade_end = shift_if_holiday(period_of_grade_start + timedelta(days=2), combined_holidays)  # 2 days after period start

    # dates.append({"date": exam_review_start, "event": "Period of Review for Final Exams"})
    # dates.append({"date": exam_review_end, "event": "Period of Review for Final Exams"})
    # dates.append({"date": exam_start_date, "event": "Period of Final Exams"})
    # dates.append({"date": exam_end_date, "event": "Period of Final Exams"})
    # dates.append({"date": period_of_grade_start, "event": "Period of Grades"})
    # dates.append({"date": period_of_grade_end, "event": "Period of Grades"})


    # Add Last Day of Saturday Classes
    # last_saturday = get_last_day_of_saturday_classes(start_date, weeks_of_classes)
    # dates.append({"date": last_saturday, "event": "Last Day of Saturday Classes"})

    dates.sort(key=lambda x: x["date"])

    # Format the dates after sorting and before sending the response
    formatted_dates = [{"date": format_date_for_display(item['date']), "event": item['event']} for item in dates]

    return formatted_dates


# Main function to calculate important dates
def calculate_important_dates(start_date, weeks_of_classes, fixed_holidays, year):
    combined_holidays = combine_holidays(fixed_holidays, year, start_date)
    start_date = datetime.strptime(start_date, '%Y-%m-%d').date()
    semester_end_date = start_date + timedelta(weeks=weeks_of_classes)
    dates = []
    dates.append({"date": start_date, "event": "Start of Class"})

    def adjust_for_holidays(start_date, semester_end_date, holidays):
        extended_days = 0
        for holiday in holidays:
            if start_date <= holiday["holiday_date"] <= semester_end_date:
                extended_days += 1
        return semester_end_date + timedelta(days=extended_days)

    semester_end_date = adjust_for_holidays(start_date, semester_end_date, combined_holidays)

    for holiday in combined_holidays:
        dates.append({"date": holiday["holiday_date"], "event": f"Feriado: {holiday['holiday_name']}"})

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

