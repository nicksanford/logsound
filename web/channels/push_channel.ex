defmodule Logsound.PushChannel do
  use Logsound.Web, :channel

  def join("push:" <> subtopic, _params, socket) do
    :timer.send_interval(5000, :ping)
    {:ok, assign(socket, :subtopic, subtopic)}
  end

  def handle_info(:ping, socket) do
    count = socket.assigns[:count] || 1
    push socket, "ping", %{count: count}
    {:noreply, assign(socket, :count, count + 1)}
  end
end
