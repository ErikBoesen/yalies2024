import requests
from bs4 import BeautifulSoup
import yaml

HOST = 'https://news.yale.edu'
url = HOST + '/search?sort=created&order=desc&search_api_views_fulltext='
soup = BeautifulSoup(requests.get(url).text, "html.parser").find('div', {'id': 'block-system-main'})
# TODO: protect against exact link index being changed
rows = soup.find_all('div', {'class': 'views-row'})
articles = []
for row in rows:
    link = row.find('a')
    url = HOST + link['href']
    title = link.text
    date = row.find('div', {'class': 'date'}).text
    teaser = row.find('div', {'class': 'teaser'}).text
    articles.append({
        'url': url,
        'title': title.strip(),
        'date': date.strip(),
        'teaser': teaser.strip(),
    })

with open('_data/articles.yml', 'w') as f:
    yaml.dump(articles, f)
