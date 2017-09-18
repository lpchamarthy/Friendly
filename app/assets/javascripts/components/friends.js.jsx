var Friends = React.createClass({
  render: function() {
      var data = ['Jake', 'Jon', 'Thruster'];
      var description = ['I love India', 'I love Europe', 'I love USA']
      var dataList = data.map(function(data){
                      return (
                          <div className="row">
                                <div className="col-sm-4 text-center">
                                   <img className="profile_pic_feed" src="profile_avatar_placeholder.jpg" alt="profile image"/>
                                   <h2>{data}</h2>
                                   <p>{description}</p>
                                </div>
                          </div>
                      );
                    })

      return  (
          <div>
            <div>
              <div> { dataList }</div>
            </div>
          </div>
      )
  }
});


