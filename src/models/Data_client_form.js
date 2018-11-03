const mongoose = require('mongoose');
const { Schema } = mongoose;

const Data_client_form = new Schema({
	email: String,
	message: String
});

module.exports = mongoose.model('Data_client_form', Data_client_form);