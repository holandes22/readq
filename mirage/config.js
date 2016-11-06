export default function() {

  this.urlPrefix = 'http://localhost:4000';

  this.get('/auth/github/callback', () => {
    return {user: { email: 'user@example.com' }, token: 'aaafff'};
  });

  this.namespace = 'api';
  this.timing = 400;

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
