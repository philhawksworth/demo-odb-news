const fetch         = require("node-fetch");
const pageTemplate  = require('../site/_includes/layouts/base.11ty.js');
const DATA_SOURCE   = "https://trello.com/b/u3QFpXib.json";


exports.handler = async event => {
  
  const storyid = event.path.split('/breaking/')[1];
  
  console.log("Returning a dynamic view on-demand for story with id:", storyid)

  // fetch the data for this news item directly from the content API when a view is requested.
  const story = await fetch(DATA_SOURCE, { headers: { Accept: "application/json" } })
    .then((response) => response.json())
    .then((data) => {
      return data.cards.find(obj => obj.id == storyid);
    })
    .catch((error) => ({ statusCode: 422, body: String(error) }));

  const data = {
    "time": new Date().toString(),
    "title": story.name,
    "content": story.desc
  }; 
  return {
    statusCode: 200,
    body: pageTemplate(data)
  }

};


