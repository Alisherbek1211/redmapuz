from yandex_geocoder import Client
client = Client("c416d978-d245-4cb7-ab20-de5f357a01e9") 
client.coordinates("fergana")

print(client.coordinates("fergana"))