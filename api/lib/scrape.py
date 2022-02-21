import requests, re, json
import redis
import youtube_dl
from bs4 import BeautifulSoup

# from video import Video, Videos

BASE_URL: str = "https://www.youtube.com/results"

def scrape(query: str) -> None:
    """
    Scrape youtube search results for video data and cache in Redis
    """

    response = requests.get(f"{BASE_URL}?search_query={query}").text
    tag_tree = BeautifulSoup(response, "html.parser")

    script = tag_tree.find_all("script")

    print(script)

def get_video_data(id: str) -> dict:
    """
    Fetch video data from redis
    """

    pass

def get_ids() -> list:
    """
    Get a list of all video ids retrieved from a scrape
    """

    pass
