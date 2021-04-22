module.exports = (data) => { 

  const title = data.title || "News";
  const timestamp = data.time || data.site.timestamp;
  
  return `<html>
    <head>
      <title>${title}</title>
      <link rel="stylesheet" href="/css/main.css">
    </head>
    <body>
      <header>
        <small>Page built at ${ timestamp }</small>
        <p>
          <a href="/">Home</a> |
          <a href="/breaking">Breaking news</a> |
          <a href="/current">Current news</a> |
          <a href="/archive">News archives</a>
        </p>
      
        <h1>${title}</h1>
      </header>
      <div class="container">
      ${ data.content }
      </div>
      <footer>
        <div class="container">
          <p>Content sourced either at build time or on-demand from <a href="https://trello.com/b/u3QFpXib/news-demo">This trello board</a></p>
          <p>View the code on <a href="https://github.com/philhawksworth/demo-odb-news">GitHub</a></p>
        </div>
        </footer>
    </body>
    </html>`;
}