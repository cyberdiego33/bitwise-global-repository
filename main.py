from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')   #routing for homepage
def homepage():
    return render_template('index.html')

@app.route('/aboutPage')   #routing for aboutpage
def aboutpage():
    return render_template('aboutpage.html')

@app.route('/servicesPage')   #routing for services page
def servicesPage():
    return render_template('services.html')

@app.route('/contactPage')   #routing for contact Page
def contactPage():
    return render_template('contact.html')

@app.route('/loginpage')    #routing for login page
def loginPage():
    return render_template('loginpage.html')

@app.route('/signup')    #routing for signup page
def signup():
    return render_template('signup.html')

if __name__ == '__main__':
    app.run(debug=True)