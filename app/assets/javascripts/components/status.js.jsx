var Status = React.createClass({
  render: function(){
    return(
      <div className="status_component">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Share what do you feel today..!"/>
          <span className="input-group-btn" id="basic-addon2">
            <button className="btn btn-secondary" type="button">Post!</button>
          </span>
        </div>
        <hr/>
      </div>
    )
  }
});

