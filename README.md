# Breaking/Archived news demo

**See the demo https://odb-news.netlify.app/**:


This example news site shows news items of three types:

### Current News
Most common news type. These are all pages generated as part of the build and served as static assets.

### Archived News
Older news articles which are no longer being updated or in regular display rotation can be removed from the build and only rendered on the occasion that somebody first requests them, (via a an ODB function which then persists that view to the CDN)

### Breaking News
Breaking news is updated all the time and shouldn't trigger a re-build. We should source those stories directly form the content API via a sereverless function for each request.

## Content source
To help visualise the content abstraction, this demo source its news content from a [trello board](https://trello.com/b/u3QFpXib/news-demo)'s [JSON API](https://trello.com/b/u3QFpXib/news-demo.json). Content is pulled in either at build time or on demand via serverless functions as required.