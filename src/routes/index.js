const express = require('express');
const router = express.Router();
const Data_client_form = require('../models/Data_client_form');

router.get('/', (req, res) => {
	res.render('index.html', { title: 'Codeurb' });
});

router.get('/contact', (req, res) => {
	res.render('contact.html', { title: 'Contact Page' });
});

router.post('/contact', async (req, res, next) => {
	const Data_cli_form = new Data_client_form(req.body);
	await Data_cli_form.save();
	res.redirect('/contact');
});

module.exports = router;