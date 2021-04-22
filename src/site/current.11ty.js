class Latest {

  data() {
    return {
      title: "News: Latest",
      layout: "layouts/base.11ty.js"
    };
  }


  render({trello}) {

    var html = [
      `<p>
        This page and all the news article pages below are generated during the build.
      </p>`
    ];
    for (let index = 0; index < trello.CurrentNews.cards.length; index++) {
      const story = trello.CurrentNews.cards[index];
      html.push(`
        <li class="news-item">
          <a href="/news/${story.id}">${story.name}</a>
        </li>
      `);      
    }
    return html.join("");
  }
}

module.exports = Latest;