from flask import Blueprint, send_file
import pandas as pd
from io import BytesIO
from flask_app.config import get_db_connection


bp = Blueprint('download', __name__, url_prefix='/download')

# Route for downloading Excel file
@bp.route('/', methods=['GET'])
def download_file():
    # Connect to the database
    conn = get_db_connection()

   # Query to fetch data from the important_dates table
    query = "SELECT * FROM important_dates"

    # Create a cursor and execute the query
    cursor = conn.cursor()
    cursor.execute(query)

    # Fetch all rows from the query result
    rows = cursor.fetchall()

    # Get column names from the cursor description
    columns = [desc[0] for desc in cursor.description]

    # Convert the data into a pandas DataFrame
    df = pd.DataFrame(rows, columns=columns)

    # Create a BytesIO object to hold the Excel file in memory
    output = BytesIO()
    df.to_excel(output, index=False)
    output.seek(0)

    # Close the database connection
    conn.close()

    # Send the Excel file to the client
    return send_file(
        output, 
        as_attachment=True, 
        download_name="dias-de-calendario.xlsx", 
        mimetype="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        )

