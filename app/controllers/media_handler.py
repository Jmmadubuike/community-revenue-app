from nexios.routing import Router
from nexios.http.request import Request
from nexios.http import Response as NexiosResponse
from datetime import datetime
import uuid,os
from pathlib import Path
BASE_UPLOAD_DIR = "/tmp/media"
Path(BASE_UPLOAD_DIR).mkdir(parents=True, exist_ok=True)
media_upload_router = Router(prefix="/api/media/upload")

async def upload_file(file):
    current_date = datetime.now().strftime("%Y-%m-%d")
    date_folder = os.path.join(BASE_UPLOAD_DIR, current_date)
    Path(date_folder).mkdir(parents=True, exist_ok=True)
    file_name = f"{str(uuid.uuid4())}.png"
    file_path = os.path.join(date_folder, file_name)
    with open(file_path,"xb") as _file:
        _file.write(await file.read())
    return file_path

@media_upload_router.route("/new",methods=['post'])
async def upload_media(request :Request, response :NexiosResponse):
    files = await request.files
    multi = request.query_params.get("multi")
    if not multi:
        file = files.get("file")
        file_path = await upload_file(file)
        return response.json({
            "success":True,
            "file_url":request.build_absolute_uri(file_path)
        })
    

    file_urls = []
    for file_name, file in files.items():
        file_path = await upload_file(file)
        file_urls.append(request.build_absolute_uri(file_path))
    
    return response.json({
        "success":True,
        "file_urls":file_urls
    })

#TODO : ADD delete, put 
@media_upload_router.route("/delete",methods=['delete'])
async def delete_media(request :Request, response :NexiosResponse):
    file_path = request.query.get("file_path")
    if not file_path:
        return response.json({
            "success":False,
            "message":"file_path is required"
        })
    if not os.path.exists(file_path):
        return response.json({
            "success":False,
            "message":"file not found"
        })
    os.remove(file_path)
    return response.json({
        "success":True,
        "message":"file deleted successfully"
    })