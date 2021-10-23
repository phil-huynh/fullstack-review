import React from 'react';

var RepoEntry = ({repo}) => (
  <div>
    <h3>___________________________________________________________________________________</h3>
    <h3><a href={repo.url}>{repo.repoName}</a></h3>
    <h4>{repo.description}</h4>
    <h5>{repo.username}</h5>
    <h5>This repo has been forked {repo.forks} times</h5>
  </div>
)

export default RepoEntry;
