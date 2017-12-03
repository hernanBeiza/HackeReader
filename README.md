# HackeReader
APP para leer noticias de nodejs desde HackerNews.

## First
Install packages using NPM

	npm install

## Run WebAPP
Then make it run
	
	npm start

## Dev
For dev the API, use nodemon

	npm run api

## Details about DBs

	app.get("/api/noticias"); //Get the news from the local DB using Mongo + Mongoose
	app.get("api/actualizar"); //Get the news from the HackerNews API

### Tools

- moongose: Modelador de objetos para MongoDB
- nodemon: 
- express: Servidor
- pug: template render
- angularjs: javascript framework mvc
- SublimeText: TextEditor
- clor: Colorful terminar messages :)
- momentjs: For "A few seconds ago" in the datetime col