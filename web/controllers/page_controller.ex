defmodule Logsound.PageController do
  use Logsound.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
