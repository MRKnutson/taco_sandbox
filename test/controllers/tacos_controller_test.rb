require "test_helper"

class TacosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get tacos_index_url
    assert_response :success
  end

  test "should get show" do
    get tacos_show_url
    assert_response :success
  end

  test "should get new" do
    get tacos_new_url
    assert_response :success
  end

  test "should get create" do
    get tacos_create_url
    assert_response :success
  end

  test "should get edit" do
    get tacos_edit_url
    assert_response :success
  end

  test "should get update" do
    get tacos_update_url
    assert_response :success
  end

  test "should get destroy" do
    get tacos_destroy_url
    assert_response :success
  end
end
