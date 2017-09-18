require 'test_helper'

class ProfileTest < ActiveSupport::TestCase

  def setup
    @profile = Profile.new(first_name: "Example First Name", last_name: "Example Last Name",
                           address1: "Example Address1", address2: "Example Address1",
                           contact:"123-884-2506")
  end
  
  test "should be valid" do
    assert @profile.valid?
  end

  test "first_name should be present" do
    @profile.first_name = "     "
    assert_not @profile.valid?
  end

  test "last_name should be present" do
    @profile.last_name = "     "
    assert_not @profile.valid?
  end

  test "address1 should be present" do
    @profile.address1 = "      "
    assert_not @profile.valid?
  end

  test "address2 should be present" do
    @profile.address2 = "     "
    assert_not @profile.valid?
  end

  test "contact should be present" do
    @profile.contact = "     "
    assert_not @profile.valid?
  end
end
