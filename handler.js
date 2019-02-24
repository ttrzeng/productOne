const createCharge = require('./functions/createCharge');

module.exports.createCharge = (event, context, callback) => {
  createCharge(event, context, callback);
};
