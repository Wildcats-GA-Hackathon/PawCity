const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const requestLogger = require('./middleware/request_logger');
app.use(requestLogger);

const userControllers = require('./controllers/users.js');
app.use('/users', userControllers);

const { handleErrors } = require('./middleware/custom_errors');
app.use(handleErrors);

app.listen(process.env.PORT || 5000, () => {
	console.log('App Launched');
});
