# React Gallery App
### TechDegree Project 7  
Disclaimer: I completed this project as part of my Treehouse Full Stack JavaScript Techdegree. CSS and HTML were provided.

## About
This project bootstraps an image gallery application using the Create React App and the Flickr API.  After submitting a query, users receive a collection of related-images.

### Technologies
* ReactJS
* VSCode
* GitHub

## Installation
You will need a Flickr API key.  To obtain an API key, you must first create an account at: www.flickr.com.
Once you have an account, you will need to go to www.flickr.com/services to request an API key.

```shell
$ git clone https://github.com/browe83/React-Gallery-App.git
$ cd React-Gallery-App
$ npm install
```

Then create a `config.js` file in the `src` folder.

```shell
$ touch src/config.js
```

In the `config.js` file create and export const variable called `apiKey` set equal to the key you received 
from Flickr.  Now you are ready to launch the app.

```shell
$ npm start
```
