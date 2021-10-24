const express = require('express');
let app = express();
const db = require('../database/index.js')
const getRepos = require('../helpers/github.js')

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  const { username } = req.body;
  getRepos.getReposByUsername(username, (data) => {
    for (var object of data) {
      var obj = {
        repoId: object.id,
        repoName: object.name,
        username: object.owner.login,
        description: object.description,
        url: object.html_url,
        forks: object.forks
      }
      if (!db.Repo.find({ repoId: object.id }).length){
          db.save(obj)
      }
    }
    res.status(200).json(data)
  })
});

app.get('/repos', function (req, res) {
  db.Repo.find({}).sort({'forks': -1}).limit(25).exec((err, repos) => {
    if(err) {
      res.sendStatus(500)
    }
    res.json(repos)
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

