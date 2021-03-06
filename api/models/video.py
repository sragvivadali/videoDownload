from dataclasses import dataclass

from nvelope import CompoundConv, Obj, Arr, int_conv, string_conv

@dataclass
class Video(Obj):
    _conversion = {
        "video_id": string_conv,
        "title": string_conv,
        "channel": string_conv,
        "thumbnail_url": string_conv,
        "description": string_conv,
        "length": int_conv,
        "codec": string_conv,
        "disk_path": string_conv
    }

    video_id: str
    title: str
    channel: str
    thumbnail_url: str
    description: str
    length: int
    codec: str
    disk_path: str

@dataclass
class Videos(Arr):
    conversion = CompoundConv(Video)
