const { builder }       = require("@netlify/functions");
const { ArchivedNews }  = require('../site/_data/trello.json');
const pageTemplate      = require('../site/_includes/layouts/base.11ty.js');


const handler = event => {

  const storyid = event.path.split('/archived/')[1];
  const story = ArchivedNews.cards.find(obj => obj.id == storyid);
  
  console.log("Building a view on-demand for story with id:", storyid)

  const data = {
    "time": new Date().toString(),
    "title": story.name,
    "content": story.desc
  }; 

  console.log({ data });
  console.log(pageTemplate(data));
  

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
    },
    body: pageTemplate(data)
  }

};

exports.handler = builder(handler);
