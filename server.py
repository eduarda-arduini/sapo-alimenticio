#!/usr/bin/env python

import os

from api import data, repository
from flask import Flask, render_template, request, jsonify


app = Flask(__name__)

@app.before_first_request
def _run_on_start():
    data.read_all_files() 

@app.route("/")
def index():        
    return render_template('index.html')

@app.route("/getmacro/<macro>")
def get_macro(macro):    
    items = repository.get_macro(macro)
    return jsonify(items), 200

if __name__ == "__main__":   
    app.run(host='0.0.0.0', port=os.environ.get('PORT', 3000), debug=True) 

  
