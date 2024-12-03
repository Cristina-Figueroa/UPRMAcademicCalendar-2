# Guidelines logic

from flask_app.services.utils import execute_query_guidelines, execute_query_get_guidelines

def fetch_guidelines():
    return execute_query_get_guidelines("SELECT * FROM guidelines")

def add_guideline_to_db(data):
    query = "INSERT INTO guidelines (guideline_name, shift_days, day_type, start) VALUES (%s, %s, %s, %s)"
    execute_query_guidelines(query, (data['guideline_name'], data['shift_days'], data['day_type'], data['start']))

def update_guideline_in_db(guideline_id, data):
    fields = []
    params = []

    if 'guideline_name' in data:
        fields.append("guideline_name = %s")
        params.append(data['guideline_name'])
    if 'shift_days' in data:
        fields.append("shift_days = %s")
        params.append(data['shift_days'])
    if 'day_type' in data:
        fields.append("day_type = %s")
        params.append(data['day_type'])
    if 'start' in data:
        fields.append("start = %s")
        params.append(data['start'])
    query = f"UPDATE guidelines SET {', '.join(fields)} WHERE guideline_id = %s"
    params.append(guideline_id)
    execute_query_guidelines(query, params)

def delete_guideline_from_db(guideline_id):
    query = "DELETE FROM guidelines WHERE guideline_id = %s"
    execute_query_guidelines(query, (guideline_id,))
