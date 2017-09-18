class ProfileController < ApplicationController
  def profile
     @profile = Profile.new
  end

end
