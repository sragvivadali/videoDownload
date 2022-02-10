from flask import Flask
import youtube_dl

app = Flask(__name__)

@app.route('/')
def home():
    return 'Flask with docker!'
