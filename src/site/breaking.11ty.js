
class Breaking {

  data() {
    return {
      title: "News: Breaking!",
      layout: "layouts/base.11ty.js",
    };
  }

  render({trello}) {
    var html = [
      `<p>
        This page generated during the build, but all the story pages are generated on demand
        from a serverless function which queries the content API directly.
      </p>`
    ];
    for (let index = 0; index < trello.BreakingNews.cards.length; index++) {
      const story = trello.BreakingNews.cards[index];
      html.push(`
        <li class="news-item">
          <a href="/breaking/${story.id}">${story.name}</a>
        </li>
      `);      
    }
    return html.join("");
  }
}

module.exports = Breaking;