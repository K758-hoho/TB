import sys
import os
import requests
from bs4 import BeautifulSoup
import json

# Add the BeautifulSoup folder to the Python path if needed
bs4_path = r'C:\Users\Dell\Downloads\beautifulsoup4-4.12.3'  # Update this path
if bs4_path not in sys.path:
    sys.path.append(bs4_path)

# Import BeautifulSoup from the added path
from bs4 import BeautifulSoup

# URL of the latest comic page
comic_page_url = 'https://targetboskval.webcomic.ws/comics/'

# Send a GET request to the comic page
response = requests.get(comic_page_url)
response.raise_for_status()  # Check that the request was successful

# Parse the HTML content of the page
soup = BeautifulSoup(response.content, 'html.parser')

# Extract metadata (adjust the selectors based on your page's structure)
title = soup.find('meta', property='og:title')['content']
image_url = soup.find('meta', property='og:image')['content']
post_date = soup.find('meta', property='article:published_time')['content']
description = soup.find('meta', property='og:description')['content']

# Create a dictionary to store the metadata
comic_metadata = {
    'title': title,
    'imageUrl': image_url,
    'postDate': post_date,
    'description': description,
}

# Save the metadata to a JSON file
json_path = os.path.join(os.path.dirname(__file__), 'latest_comic.json')
with open(json_path, 'w') as json_file:
    json.dump(comic_metadata, json_file, indent=4)

print('Latest comic metadata saved to latest_comic.json')
