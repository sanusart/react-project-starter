import React from 'react';

class CoolJs extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onSubmit() {
    if (this.search.value && this.search.value.length > 0) {
      this.props.actions.api_call(this.search.value);
    }
  }

  onKeyPress(ev) {
    if (ev.key === 'Enter') {
      this.onSubmit();
    }
  }

  render() {
    return (
      <div className='cool-js-wrapper'>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>
                <strong>{this.props.cooljs.appName}</strong>
              </h3>
              <div className="input-group col-md-12">
                <input onKeyPress={this.onKeyPress} type="text" ref={ref => this.search = ref}
                       className=" search-query form-control" placeholder="GitHub Username"/>
                <span className="input-group-btn">
                  <button onClick={this.onSubmit} className="btn" type="button">
                    <span className="glyphicon glyphicon-search"></span>
                  </button>
                </span>
              </div>
              <hr/>
            </div>

            {this.props.cooljs.user[0].hasOwnProperty('login')
              ? this.props.cooljs.user.map((u, key) => {
                return (
                  <div key={key} className="container">
                    <div className="row">
                      <div className="col-xs-12">
                        <div key={key} className="media">
                          <div className="media-left">
                            <a href="#">
                              <img width="300" className="media-object" src={u.avatar_url} alt={u.login}/>
                            </a>
                          </div>
                          <div className="media-body">
                            <h2 className="media-heading">{u.login}</h2>
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <p>Name: {u.name}</p>
                                    <p>Company: {u.company}</p>
                                    <p>Blog: {u.blog}</p>
                                    <p>Location: {u.location}</p>
                                    <p>email: {u.email ? u.email : '--'}</p>
                                    <p>hireable: {u.hireable ? 'yes' : 'no'}</p>
                                  </td>
                                  <td>
                                    <p>Bio: {u.bio ? u.bio : '--'}</p>
                                    <p>Public_repos: {u.public_repos}</p>
                                    <p>Public_gists: {u.public_gists}</p>
                                    <p>Followers: {u.followers}</p>
                                    <p>Following: {u.following}</p>
                                    <p>
                                      <a className="btn btn-default" href={u.html_url}>View Profile</a>
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <hr/>
                      </div>
                    </div>
                  </div>
                );
              }) : null}

            {this.props.cooljs.res.length !== 0
              ? this.props.cooljs.res.sort((a, b) => b.stargazers_count - a.stargazers_count).map((repo, key) => {
                return (
                  <div className="col-md-2" key={key}>
                    <div className="thumbnail">
                      <div className="caption">
                        <h4 style={{height: '40px'}} className="">{repo.name}</h4>
                        <p style={{height: '100px', overflow: 'hidden'}} className="">{repo.description}</p>
                        <a href={repo.html_url} className="btn btn-default btn-xs pull-right" role="button">More
                          Info</a>
                        <span className="">
                          <i className="glyphicon glyphicon-star"></i> {repo.stargazers_count}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
              : <div className="col-xs-12">Nothing found</div>}
          </div>
        </div>
      </div>
    );
  }
}

CoolJs.displayName = 'CoolJs';

CoolJs.propTypes = {
  appName: React.PropTypes.string
};

CoolJs.defaultProps = {
  appName: 'APP'
};

export default CoolJs;
