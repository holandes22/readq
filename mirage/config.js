export default function() {

  this.urlPrefix = 'http://localhost:4000';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = 'api';    // make this `api`, for example, if your API is namespaced
  this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.get('/entries');
  this.post('/entries');
  this.get('/entries/:id');
  this.patch('/entries/:id');
  this.delete('/entries/:id');

  this.get('/tags', (schema) => {
    let tags = [];
    let entries = schema.entries.all();

    tags = entries.map((entry) => {
      return entry.tags;
    });

    tags = [].concat(...tags);
    tags = new Set(tags);
    return [...tags];

  });
}
