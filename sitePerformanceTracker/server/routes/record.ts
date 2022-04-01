const express = require('express');
const path = require('../appPath');
const conn = require('../db/connect');

let bodyParser = require('body-parser');

let urlencodedParser = bodyParser.urlencoded({ extended: true })

const recordRoutes = express.Router();

recordRoutes.route('/dashboard').get(function (req: any, res: any) {
  let jsonArray = { 'hello': 'world', 'world': 'hello' };
  let jsonVal: string = JSON.stringify(jsonArray);
  res.json(jsonVal);
});

recordRoutes.route('/sites').get((req: any, res: any) => {
  res.send('get lists of sites');
})

recordRoutes.route('/sites/:id').get((req: any, res: any) => {
  const id: number = req.params.id;
  res.send(`get info on ${id} site`);
})

recordRoutes.route('/site/add').get((req: any, res: any) => {
  res.sendFile(path.getBasePath() + '/views/addSite.html');
})

recordRoutes.route('/site/add').post(urlencodedParser, (req: any, res: any) => {
  console.log(req.body);

  if (!req.body) { return res.send('should have entered values'); }

  //todo:validation if site exist for user id
  //todo: check if user logged in
  //todo: grav user id

  const addSiteQuery: string = `INSERT INTO SITES (sitename, siteurl, user_id) VALUES ( '${req.body.sitename}', '${req.body.siteurl}', 1)`;
  conn.getConnection().query(addSiteQuery, (err: any, results: any) => {
    if (err) { return console.log(err.message); }

    if (results) {
      console.log(results);
      // res.send(`${req.body.sitename} added to the list`);
    }

  })

  res.send(req.body);
})

module.exports = recordRoutes;