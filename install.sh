#!/bin/bash
sudo apt install -y unzip npm
npm install
wget https://mtgjson.com/json/AllCards.json.zip
unzip AllCards.json.zip 
rm AllCards.json.zip