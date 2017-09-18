var About = React.createClass({
  render: function() {
    return (
      <div className="about_component">
        <div className="row">
            <div className = "col-sm-4">
                <a href="/profile"><i className="fa fa-pencil-square fa-2x" aria-hidden="true" title="Edit"></i></a>
            </div>
            <div className = "col-sm-4">
                <a href="/wall"><i className="fa fa-flag fa-2x" aria-hidden="true" title="Wall"></i></a>
            </div>
            <div className = "col-sm-4">
                <a href="/friends"><i className="fa fa-users fa-2x" aria-hidden="true" title="Friends"></i></a>
            </div>
        </div>
      </div>
    )
  }
});

