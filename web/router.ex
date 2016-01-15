defmodule Logsound.Router do
  use Logsound.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug Logsound.Auth
  end

  scope "/", Logsound do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  scope "/api/v1", Logsound do
    pipe_through :api

    post "/", EventController, :create
  end
end
