import os, json

from flask import Flask
import redis, youtube_dl

from lib import scrape
from models import video

app = Flask(__name__)

YOUTUBE_BASE: str = "https://youtube.com"
YOUTUBE_SEARCH_BASE: str = f"{YOUTUBE_BASE}/results?search_query="
YOUTUBE_VIDEO_BASE: str = f"{YOUTUBE_BASE}/watch?v="

REDIS_HOST: str = "redis.localhost"
REDIS_PORT: int = 6379

DOWNLOAD_DIR: str = "/.youtube"

db = redis.Redis(host=REDIS_HOST, port=REDIS_PORT, db=0)

@app.route('/search/<query>')
def search(query: str):
    """
    GET /search
    Get a collection of videos (ids, thumbnails, titles, etc) for a given
    search query

    Path Parameters
    :query - the search query
    """

    return ""

@app.route(
    '/library',
    methods=["GET"]
)
def library():
    """
    GET /library
    Retrieves a collection of all downloaded videos
    """

    # TODO: Would be a good idea to implement pagination, but maybe another time

    return ""

@app.route(
    '/download/<video_id>',
    methods=["GET"]
)
def download(video_id: str):
    """
    GET /download
    Queue a new video to be downloaded. Will be automatically inserted into the
    database upon completion

    Path Parameters
    :video_id - the youtube video id corresponding to the video to be downloaded
    """

    with youtube_dl.YoutubeDL() as ytdl:
        video_dict = ytdl.extract_info(f"{YOUTUBE_VIDEO_BASE}{video_id}", download=False)

        return video_dict

if __name__ == "__main__":
    app.run()
