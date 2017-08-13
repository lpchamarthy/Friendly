require 'test_helper'

class TimelineControllerTest < ActionDispatch::IntegrationTest
  test "should get timeline" do
    get timeline_timeline_url
    assert_response :success
  end

end
