import os, json, multiprocessing
from random import sample

from flask import Flask, request
import redis, youtube_dl

from models import video

app = Flask(__name__)

YOUTUBE_BASE: str = "https://youtube.com"
YOUTUBE_SEARCH_BASE: str = f"{YOUTUBE_BASE}/results?search_query="
YOUTUBE_VIDEO_BASE: str = f"{YOUTUBE_BASE}/watch?v="

REDIS_HOST: str = "redis"
REDIS_PORT: int = 6379

HOST_DOWNLOAD_DIR: str = "./youtube"
CONTAINER_DOWNLOAD_DIR: str = "/youtube"

db = redis.Redis(host=REDIS_HOST, port=REDIS_PORT)

@app.route('/search/<query>')
def search(query: str):
    """
    GET /search
    Search youtube for videos related to a given query

    Path Parameters
    :query - the search query
    """

    #! This functionality probably wont even be created

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

    videos: list = []

    for key in db.keys():
        videos.append(json.loads(db.get(key)))

    return {"videos": videos}

@app.route(
    '/video/<video_id>',
    methods=["GET"]
)
def download(video_id: str):
    """
    GET /video
    Queue a new video to be downloaded. Will be automatically inserted into the
    database upon completion

    Path Parameters
    :video_id - the youtube video id corresponding to the video to be downloaded
    """

    query_strings = request.args

    # If the skip_download query string is present, don't download
    skip_download: bool = False
    for k, v in query_strings.items():
        if k == "skip_download":
            skip_download = True

    with youtube_dl.YoutubeDL() as ytdl:
        video_url: str = f"{YOUTUBE_VIDEO_BASE}{video_id}"

        # Grab information about the video
        video_dict = ytdl.extract_info(video_url, download=False)

        video_id: str = video_dict["id"]
        video_title: str = video_dict["title"]
        download_path: str = f"{HOST_DOWNLOAD_DIR}/{video_title}.mp4"

        # Now let's download the video
        # YoutubeDL downloads just aren't async, so let's create a new background process
        # and make it do that
        # Meanwhile, we'll dump it in the database and give a response back to the user

        if not skip_download:
            download_process = multiprocessing.Process(
                target=os.system,
                args=(f"youtube-dl -o '/youtube/%(title)s.%(ext)s' https://youtube.com/watch?v={video_id}",)
            )

            download_process.start()

        # Since that's running in the background, let's dump this data into redis

        # We need to convert this scraped response into our specific format (which greatly 
        # slims down the information we store)

        structured_video_data: dict = video.Video(
            video_id=video_id,
            title=video_title,
            channel=video_dict["channel"],
            thumbnail_url=video_dict["thumbnail"],
            description=video_dict["description"],
            length=video_dict["duration"],
            codec=video_dict["acodec"],
            disk_path=download_path
        ).as_json()

        db.set(video_id, json.dumps(structured_video_data))

        return structured_video_data

@app.route(
    "/video/<video_id>",
    methods=["DELETE"]
)
def delete(video_id: str):
    """
    DELETE /video
    Delete a video from the database and potentially from disk

    Path Parameters
    :video_id - the youtube video id corresponding to the video to delete
    """

    return ""

if __name__ == "__main__":
    app.run()
