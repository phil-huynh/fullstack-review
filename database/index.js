const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true });

let repoSchema = mongoose.Schema({

  repoId: {
    type: Number,
    unique: true
  },
  repoName: String,
  username: {
    type: String,
    required: true
  },
  description: String,
  url: String,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (object) => {
  Repo.create(object)
}

module.exports.save = save;
module.exports.Repo = Repo