var Feed = React.createClass({
  render: function() {
      var names = ['Jake', 'Jon', 'Thruster'];
      var namesList = names.map(function(name){
                      return (
                          <div>
                            <ul className="list-group">
                              <li className="list-group-item">
                                  <div className="card border border-dark">
                                    <div className="card-body">
                                      <img className="profile_pic_feed" src="profile_avatar_placeholder.jpg" alt="profile image"/>
                                      <h4 className="card-title"><b>{name}</b></h4>
                                      <p className="card-text">{name}'s status posted</p>
                                    </div>
                                  </div>
                              </li>
                            </ul>
                          </div>
                      );
                    })

      return  (
          <div>
            <div>
              <div> { namesList }</div>
            </div>
          </div>
      )
  }
});


