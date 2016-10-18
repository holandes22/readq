import {
  validateLength,
  validateFormat,
  validatePresence
} from 'ember-changeset-validations/validators';

import validateSlugList from '../validators/slug-list';


export default {
  link: [
    validatePresence(true),
    validateFormat({ type: 'url' })
  ],
  notes: validateLength({ max: 140 }),
  tags: [
    validateLength({ max: 10, message: 'Maximum allowed {description} is {max}' }),
    validateSlugList()
  ]
};
