from flask import Flask, render_template

# Initialize the Flask application
app = Flask(__name__)

# Define the route for the home page
@app.route('/')
def home():
    return render_template("main.html")

# Run the app
if __name__ == '__main__':
    app.run(debug=True)