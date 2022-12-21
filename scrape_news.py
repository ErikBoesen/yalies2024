import requests
from bs4 import BeautifulSoup

url = "https://news.yale.edu/search?sort=created&order=desc&search_api_views_fulltext="
soup = BeautifulSoup(requests.get(url).text, "html.parser").find('div', {'id': 'block-system-main'})
# TODO: protect against exact link index being changed
a = soup.find_all('div', {'class': 'views-row'})
href = a.get("href")
# If no results are found, send recommendation
if "/search?" in href:
    print(f"No results found. Did you mean '{a.text}'?")
    # TODO: Use recursion to get that result automatically?
print("https://news.yale.edu" + href)
