defmodule Logsound.EventController do
  use Logsound.Web, :controller

  @events [
    "candidate_accept_invite",
    "candidate_decline_intite",
    "candidate_receive_feedback",
    "candidate_shortlisted",
    "candidate_sorted_to_no",
    "candidate_submitted",
    "employer_sign_up",
    "job_cast_accepted",
    "job_cast_rejected",
    "match_created_pull",
    "match_created_push",
    "question_answered",
    "question_asked",
    "recruiter_sign_up"
  ]

  def create(conn, %{"event" => "remove_video"}) do
    Logsound.Endpoint.broadcast "push:subtopic", "remove_video", %{}
    render(conn, "event.json")
  end
  def create(conn, %{"event" => "play_video", "video_id" => video_id}) do
    Logsound.Endpoint.broadcast "push:subtopic", "play_video", %{"video_id" => video_id}
    render(conn, "event.json")
  end
  def create(conn, %{"event" => event}) do
    if event in @events, do: Logsound.Endpoint.broadcast "push:subtopic", event, %{}
    render(conn, "event.json")
  end
  def create(conn, _params) do
    render(conn, "event.json")
  end
end
