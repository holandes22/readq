import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  link() {
    return faker.internet.url();
  },
  archived() {
    return faker.random.boolean();
  },
  notes() {
    return faker.lorem.sentence();
  },
  createdAt() {
    return faker.date.recent();
  },
  tags() {
    let limit = faker.random.number({ min: 0, max: 5 });
    return faker.lorem.words(limit);
  }
});
