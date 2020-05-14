const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cron = require('node-cron');
const app = express();

const dbBackup = require('./utils/backup.js')

//Run the cron to execute de function responsable of creating de backup
cron.schedule('0 12 * * 0', () => {
  dbBackup.createBackUp();
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const port = 3000;
app.listen(3000, () => {
  console.log(`app running on ${port}`);
})

module.exports = app;
