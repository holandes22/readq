import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  link(i) {
    return `http:\/\/a${i}.com`;
  },
  archived() {
    return faker.random.boolean();
  },
  notes(i) {
    return `some notes for ${i}`;
  },
  createdAt() {
    return faker.date.recent();
  },
  tags() {
    let limit = faker.random.number({ min: 0, max: 5 });
    return faker.lorem.words(limit);
  }
});
