import requests

url = "https://platform.stgtelematics.com/api/tracks"
response = requests.get(url)
print(response.json())  # This will fetch tracking data
