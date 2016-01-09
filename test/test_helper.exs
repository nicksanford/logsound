ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Logsound.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Logsound.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Logsound.Repo)

