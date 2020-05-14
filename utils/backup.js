const util = require('util');
const exec = util.promisify(require('child_process').exec);
const process = require('process')
const express = require('express');
const mailer = require('./mailTrap')
const nodemailer = require('nodemailer')


const createFileName = () => {
  const extension = '.json'
  date = new Date();

  const day = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
  const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

  return `backup_${day}_${time}${extension}`
}

exports.createBackUp = async () => {
  try {
      const fileName = createFileName();
      const commandCreateFile = `cd <Path> && touch ${fileName}`;
      const commandCreateBackup = '<Get the command from mongo db to export the collections>';

      await exec(commandCreateFile);
      await exec(commandCreateBackup);
      await mailer.sendEmail("The backup have been created succefully");


  }
  catch (e) {
        await mailer.sendEmail("The backup haven't been created succefully, for more informtion se the log file");
  }
}
