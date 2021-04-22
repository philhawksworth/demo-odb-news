
class Archive {

  data() {
    return {
      title: "News: News archives",
      layout: "layouts/base.11ty.js"
    };
  }

  render({trello}) {
    
    var html = [
      `<p>
        This index page is generated during the build, but none of the news article pages listed below are generated until they are first visited. 
        Visiting an archived news article will build a view and persist it to the CDN via an ODB function.
      </p>`
    ];
    for (let index = 0; index < trello.ArchivedNews.cards.length; index++) {
      const story = trello.ArchivedNews.cards[index];
      html.push(`
        <li class="news-item">
          <a href="/archived/${story.id}">${story.name}</a>
        </li>
      `);      
    }
    return html.join("");
  }
}

module.exports = Archive;