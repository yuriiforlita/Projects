import React, { Component, Fragment } from "react";
import SearchUser from "./SearchUser";
import UserInfo from "./UserInfo";
import Repositories from "./Repositories";
import Loading from "./Loading";
import "./style.css";

class GetInfo extends Component {
  state = {
    name: "a",
    repos: [],
    loading: true
  };

  componentDidMount() {
    this.getUser(this.state.name);
    this.getRepsWithPulls(this.state.name);
  }

  getUser = user => {
    this.setState({ loading: true });
    const url = `https://api.github.com/users/${user}`;
    return fetch(url)
      .then(response => response.json())
      .then(parsedJSON => {
        this.setState({ avatar: parsedJSON.avatar_url });
        return parsedJSON;
      })
      .catch(err => alert(err));
  };

  getRepsWithPulls = user => {
    const url = `https://api.github.com/users/${user}/repos`;
    fetch(url)
      .then(response => response.json())
      .then(parsedJSON => {
        if (Array.isArray(parsedJSON)) {
          const repoWithPullPromiseArray = parsedJSON.map(repoInfo => {
            const pullRequestPromise = this.getPullRequestFromRepos(
              repoInfo.full_name
            );
            return pullRequestPromise.then(pullRequestData => {
              const repo = {
                name: repoInfo.name,
                id: repoInfo.id,
                language: repoInfo.language,
                pulls: pullRequestData
              };
              return repo;
            });
          });

          Promise.all(repoWithPullPromiseArray).then(reposWithPulls => {
            this.setState({ repos: reposWithPulls, loading: false });
          });

          return parsedJSON;
        }
        alert(`There is no ${this.state.name} user`);
        window.location.reload();
      });
  };

  getPullRequestFromRepos = repoName => {
    const url = `https://api.github.com/repos/${repoName}/pulls`;
    return fetch(url).then(response => response.json());
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const value = this.state.value;
    this.setState({
      name: value
    });
    this.getUser(value);
    this.getRepsWithPulls(value);
  };

  render() {
    return (
      <Fragment>
        {this.state.loading && <Loading />}
        <SearchUser
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div className="user_wrapper">
          <UserInfo info={this.state.avatar} />
          <Repositories
            pullReque={this.pullReque}
            repos={this.state.repos}
            pulls={this.state.pulls}
          />
        </div>
      </Fragment>
    );
  }
}

export default GetInfo;
