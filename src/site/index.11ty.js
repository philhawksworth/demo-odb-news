
class Home {

  data() {
    return {
      title: "News",
      layout: "layouts/base.11ty.js"
    };
  }

  render() {
    return `
    <p>This news site brings you:</p>
    <ul>
      <li><a href="/breaking">Breaking news</a> - Hot of the press and often updated, so we serve it on demand from a function which is a fresh render for each request</li>
      <li><a href="/current">Current news</a> - Current news stories which have settled down. These are popular but are less likely to change now. We'll pre-generate them, in our build</li>
      <li><a href="/archive">News archives</a> - News from the archives. We don't generate all these zillions of older pages in each build. Just when somebody asks for them (with an ODB function)</li>
    </ul>
    `;
  }
}

module.exports = Home;