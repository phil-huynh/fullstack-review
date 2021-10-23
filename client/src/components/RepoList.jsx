import React from 'react';
import RepoEntry from './RepoEntry.jsx';

const RepoList = ({repos}) => (
  <div>
    <h4> Repo List Component </h4>
    There are {repos.length} repos.
    <ul>
      <div>
        {repos.map((repo) =>
          <RepoEntry
          key={repo.repoId}
          repo={repo}
          />
        )}
      </div>
    </ul>
  </div>
)

export default RepoList;