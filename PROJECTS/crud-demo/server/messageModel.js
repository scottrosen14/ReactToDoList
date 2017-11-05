var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  createdBy: {type: String, required: true},
  // created_at: {type: Date, default: Date.now},
  message: {type: String, required: true}
});

module.exports = mongoose.model('Message', messageSchema);