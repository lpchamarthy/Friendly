var Navigation = React.createClass({
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-primary bg-info">
          <div className="container-fluid">
            <div className="navbar-header ">
              <a className="navbar-brand" href="/home">Friendly</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="/home"><i className="fa fa-home" aria-hidden="true" title="Wall"></i> Home</a></li>
              <li><a href="/view"><i className="fa fa-user" aria-hidden="true" title="Wall"></i> Profile</a></li>
              <li><a href="/friends"><i className="fa fa-users" aria-hidden="true" title="Wall"></i> Friends List</a></li>
              <li><a href="/wall"><i className="fa fa-flag" aria-hidden="true" title="Wall"></i> My Wall</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
});
