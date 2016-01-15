defmodule Logsound.Auth do
  import Plug.Conn

  def init(opts) do
    opts
  end

  def call(conn, _opts) do
    authentication_headers = List.to_string(get_req_header(conn, "authentication"))

    if key_valid?(authentication_headers) do
      conn
    else
      conn
      |> send_resp(403, "{}")
      |> halt
    end
  end

  defp key_valid?("Bearer " <> key) do
    key == Application.get_env(:api, :key)
  end
  defp key_valid?(_) do
    false
  end
end
