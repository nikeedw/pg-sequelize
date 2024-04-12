require('dotenv').config();
const express = require('express');
const sequelize = require('./db.js');
const models = require('./models/models.js');
const cors = require('cors');
const router = require('./routes/index.js');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const fileUpload = require('express-fileupload')
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);
app.use(errorHandler);

const start = async () => {
	try {
		await sequelize.authenticate();
		await sequelize.sync();
		app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
	} catch (error) {
		console.log(error)
	}
}

start();