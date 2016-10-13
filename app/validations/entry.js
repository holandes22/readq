import {
  validateLength,
  validateFormat,
  validatePresence
} from 'ember-changeset-validations/validators';


export default {
  link: [
    validatePresence(true),
    validateFormat({ type: 'url' })
  ],
  notes: validateLength({ max: 140 })
};
