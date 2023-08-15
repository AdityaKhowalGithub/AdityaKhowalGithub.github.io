import React from "react";
// import mainport from "./mainport";
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { repos: [], showAll: false };
    this.handleSeeMore = this.handleSeeMore.bind(this);
    this.handleSeeLess = this.handleSeeLess.bind(this);
  }

  componentDidMount() {
    fetch('https://api.github.com/users/AdityaKhowalGithub/repos')
      .then(response => response.json())
      .then(data => {
        this.setState({ repos: data });
      });
  }

  handleSeeMore() {
    this.setState({ showAll: true });
  }

  handleSeeLess() {
    this.setState({ showAll: false });
  }

  render() {
    // Create an array of projects to exclude
    const excludeProjects = ["adityakhowal", "AdityaKhowalGithub", "LC-Solver", "first-contributions", "website", "AdityaKhowalGithub.github.io"];

    // Filter the repos array to exclude the projects in the excludeProjects array
    const filteredRepos = this.state.repos.filter(repo => !excludeProjects.includes(repo.name));

    // If showAll is false, only show the first 3 projects
    const reposToDisplay = this.state.showAll ? filteredRepos : filteredRepos.slice(0, 3);

    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h4 className="title-a">other projects</h4>

                <p className="subtitle-a">
                  Below are all my projects pulled directly from github! Check out some of my projects below! Remember some are still in progress.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          {/* Add the fade-out class to the row element if showAll is false */}
          <div className={`row ${!this.state.showAll ? "fade-out" : ""}`}>
            {reposToDisplay.map(repo => (
              <div className="col-md-4" key={repo.id}>
                <div className="work-box">
                  <a href={repo.html_url}>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">{repo.name}</h2>
                          <div className="w-more">
                            {/* You can add more information here, such as the repo description or language */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* Only show the See More/Less button if there are more than 3 projects */}
          {filteredRepos.length > 3 && (
            <div style={{ textAlign: "center" }}>
              {this.state.showAll ? (
                <button onClick={this.handleSeeLess} style={{ borderRadius: "20px" }}>
                  See Less
                </button>
              ) : (
                <button onClick={this.handleSeeMore} style={{ borderRadius: "20px" }}>
                  See More
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Portfolio;

