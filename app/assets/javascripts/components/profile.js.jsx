var Profile = React.createClass({
  render: function() {
    return (
      <div>
          <form>
          <input type="text" placeholder="First Name" required/>
          <input type="text" placeholder="Last Name" required/>
          <input type="email" placeholder="Email" required/>
          <input type="tel" placeholder="Telephone Number" required/>
          <input type ="submit"/>
          </form>
      </div>
    )
  }
});