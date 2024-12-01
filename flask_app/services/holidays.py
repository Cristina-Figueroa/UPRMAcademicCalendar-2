# Holiday logic
from flask_app.services.utils import execute_query

def fetch_holidays():
    return execute_query("SELECT * FROM holidays ORDER BY formatted_date")

def add_holiday_to_db(data):
    query = "INSERT INTO holidays (holiday_date, holiday_name, formatted_date) VALUES (?, ?, ?)"
    execute_query(query, (data['holiday_date'], data['holiday_name'], data['formatted_date']))

def update_holiday_in_db(holiday_id, data):
    fields = []
    params = []
    if 'holiday_date' in data:
        fields.append("holiday_date = ?")
        params.append(data['holiday_date'])
    if 'holiday_name' in data:
        fields.append("holiday_name = ?")
        params.append(data['holiday_name'])
    if 'formatted_date' in data:
        fields.append("formatted_date = ?")
        params.append(data['formatted_date'])
    query = f"UPDATE holidays SET {', '.join(fields)} WHERE holiday_id = ?"
    params.append(holiday_id)
    execute_query(query, params)

def delete_holiday_from_db(holiday_id):
    query = "DELETE FROM holidays WHERE holiday_id = ?"
    execute_query(query, (holiday_id,))