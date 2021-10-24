import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.search = this.search.bind(this)
    this.retrieve = this.retrieve.bind(this)
  }
  componentDidMount(){
    this.updateRepos()
  }

  componentDidUpdate(){
    this.updateRepos()
  }

  retrieve (success, error = null) {
    $.ajax({
      type: 'GET',
      url: '/repos',
      dataType: 'json',
      success: success,
      error: error || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

  updateRepos() {
    this.retrieve((repoUpdate) => {
      this.setState({
        repos: repoUpdate
      })
    })
  }

  search (term, success, error = null) {
    console.log(`${term} was searched`);
    var username = { username: term }
    $.ajax({
      type: "POST",
      url: '/repos',
      data: JSON.stringify(username),
      contentType: 'application/json',
      success: () => this.updateRepos(),
      error: error || function(error) {
        console.error('Failed to Post User', error);
      }
    })
  }

  render () {
    return (
    <div>
      <h1>Github Fetcher</h1>
      <Search
        repos={this.state.repos}
        onSearch={this.search}
        update={this.updateRepos}
      />
      <RepoList repos={this.state.repos}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));