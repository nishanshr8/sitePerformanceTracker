const express = require('express');
let bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });
const port = process.env.PORT || 5000;

import sitelist from './data/sitelist';

//for execute command
const { spawn, exec } = require('child_process');

const fs = require('fs')

var urlencodedParser = bodyParser.urlencoded({ extended: true })

//routes
const recordRoutes = express.Router();

app.use(cors());
app.use(express.json());
app.use(require('./routes/record'));
//get driver connection
// const dbo = require('./db/conn');

app.get('/', (req: any, res: any) => {
  res.sendFile(__dirname + '/views/index.html');
});




function getScoreByindex(index: number) {
  const sitename: string = sitelist[index].sitename;
  exec(`lighthouse ${sitelist[index].siteurl} --output=json --quiet --only-categories=performance `, async (error: any, stdout: any, stderr: any) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    let stdoutArr: any = JSON.parse(stdout);
    let result: number = stdoutArr.categories.performance.score;
    console.log(`stdout ${sitename}: ${JSON.stringify(stdoutArr.categories.performance.score)}`);

    //todo: push data into other json
    const content: string = `${sitename}: ${result} \r\n`

    fs.appendFile('./data/score.log', content, (err: any) => {
      if (err) {
        console.error(err)
        return
      }
      //done!
    })

    //recursive
    if (index + 1 < sitelist.length) {
      getScoreByindex(index + 1);
    } else {
      console.log("Audit Complete!!");
    }
  });
}



function getScore() {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  fs.appendFile('./data/score.log', `\r\n \n \n ---------------------- \n ${today.toDateString()}\r\n ---------------------- \r\n \n \n`, (err: any) => {
    if (err) {
      console.error(err)
      return
    }
    //done!
  })

  getScoreByindex(0);
}

app.post('/', urlencodedParser, (req: any, res: any) => {
  console.log('Got body:', req.body);
  // res.sendStatus(200);
  let score: number;
  // const lighthouseResult = getScore();


  res.send(`score`);

});

app.listen(port, () => {

  // dbo.connectToServer(function(err) {
  //   if (err) console.error(err);
  // });

  console.log(`Server is running on port: localhost:${port}`);
});