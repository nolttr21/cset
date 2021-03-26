from flask import Flask,render_template
app = Flask(__name__)

@app.route('/')
def store():
   return render_template("store.html")

@app.route('/cart/<id>')
def hello_e(id):
   return render_template("cart.html", tran = id)

@app.route('/checkout/')
def hello_guest():
   return "<h1>checkout successful!</h1>"

if __name__ == '__main__':
   app.debug = True
   app.run()
   app.run(debug = True)
