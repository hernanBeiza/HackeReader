# HackeReader
APP para leer noticias de nodejs desde HackerNews.

## To make it run
### Before starts
You need npm and mongodb installed in your system
### Docs
If you need to read the documentation, can you check Documentacion.md (made it with jsdoc2md) and HN Docs where are sequence and classes diagrams (made it with draw.io).
### Install 
Install packages using NPM

	npm install
### Configure it
Check the MongoDB port in config/database.js. *readerdb* is the name that I choose for this

	    'url' : 'mongodb://localhost:27017/readerdb' 
	    
### Run WebAPP
Then run it using npm. Then open http://localhost:5000
	
	npm start

### API Dev
For dev the API, use nodemon. I made this for testing and async task using JQuery

	npm run api

## Details about API routes
	app.get('/');// Open the webapp
	app.get("/api/noticias"); //Get the news from the local DB using Mongo + Mongoose
	app.get("api/actualizar"); //Get the news from the HackerNews API
	app.delete('/api/noticias/:idnoticia');  //Delete a new from the LocalDB

## Tools

- moongose: Modelador de objetos para MongoDB
- nodemon: reload helper for dev environment
- express: Server
- pug: template render
- SublimeText: TextEditor
- clor: Colorful terminar messages :)
- momentjs: For "A few seconds ago" in the datetime col 
- browsersyn: Live reload
- jsdoc2md: to make documentation from jsdoc
- draw.io: to make classes and sequence diagrams