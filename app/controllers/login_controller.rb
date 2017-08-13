class LoginController < ApplicationController
  def home
  end

  def register
    @user = User.new
  end

  def login
    email = params['email']
    password = params['password']

    user = User.find_by(email: email)
    if user.authenticate(password)
      redirect_to controller: "timeline", action: "timeline", id: user.id
    else
      # TODO: give proper views
      render html: "Invalid credentials"
    end
  end
end
