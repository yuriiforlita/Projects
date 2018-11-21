import React, { PureComponent } from "react";
import "./style.css";

class Repositories extends PureComponent {
  render() {
    return (
      <div className="repos_wrapper">
        <h2>Repositories:</h2>
        <ul className="repos_list">
          {this.props.repos.map(repoInfo => (
            <li className="repos_item" key={repoInfo.id}>
              {repoInfo.name}
              <br />
              <br />
              <span className="repos_lang">{repoInfo.language}</span>
              <br />
              <h3>
                Pull Requests:
                {repoInfo.pulls.length}
              </h3>
              <br />
              <table className="repos_pullInfo">
                <tbody>
                  {repoInfo.pulls.map(pullsInfo => (
                    <tr key={pullsInfo.id}>
                      <td>
                        <a
                          target="_blank"
                          className="repos_pull"
                          rel="noopener noreferrer"
                          href={pullsInfo.html_url}
                        >
                          {pullsInfo.title}
                        </a>
                      </td>
                      <td
                        className={
                          pullsInfo.state === "open"
                            ? "reposStatus_open"
                            : "reposStatus_closed"
                        }
                      >
                        {pullsInfo.state}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Repositories;
