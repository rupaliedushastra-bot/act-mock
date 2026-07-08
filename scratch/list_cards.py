from bs4 import BeautifulSoup

with open('index.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

cards = soup.find_all('div', class_='exam-card')
print(f"Total cards: {len(cards)}")
for idx, card in enumerate(cards):
    title_div = card.find('div', class_='card-title')
    num_div = card.find('div', class_='card-num')
    btn = card.find('a', class_='card-btn')
    
    title = title_div.text.strip() if title_div else "No Title"
    num = num_div.text.strip() if num_div else "No Num"
    btn_id = btn.get('id', 'No ID') if btn else "No Btn"
    btn_href = btn.get('href', 'No Href') if btn else "No Href"
    
    print(f"Card {idx}: Num={num}, Title='{title}', ButtonID='{btn_id}', Href='{btn_href}'")
