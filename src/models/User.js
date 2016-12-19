import validate from 'validate.js';

export default class User {
  constructor() {
    this.username = '';
    this.password = '';

    this.constraints = {
      username: {
        presence: true
      },
      password: {
        presence: true
      }
    };
  }

  isValid() {
    return validate(this, this.constraints) === undefined;
  }

  getError(key) {
    let message = validate({ [key]: this[key] }, this.constraints);

    return message[key] ? message[key][0] : '';
  }
}