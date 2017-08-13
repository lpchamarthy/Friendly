class UsersController < ApplicationController
  def new
  end

  def create
    user = User.new(name: params['user']['name'], email: params['user']['email'],
                     password: params['user']['password'], 
                     password_confirmation: params['user']['password_confirmation'])
    if user.save
      redirect_to controller: "timeline", action: "timeline", id: user.id
    else
      # TODO: give proper views
      render html: user.errors.full_messages
    end
  end



end
