import sys
import os

# Set the base directory to the root of the project (no longer inside venv)
base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "."))
sys.path.insert(0, base_dir)

from flask_app import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)