# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the endpoint
config :logsound, Logsound.Endpoint,
  url: [host: "localhost"],
  root: Path.dirname(__DIR__),
  secret_key_base: "u7Iun1xspJ/v7SzQiEAeWvuKpVU5kAAw1NoDdsJT8OnxXNdCBPggLb2j131tkji1",
  render_errors: [accepts: ~w(html json)],
  pubsub: [name: Logsound.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

# Configure phoenix generators
config :phoenix, :generators,
  migration: true,
  binary_id: false

config :api,
  key: "D0wp+SKKZsEP4jwbniDFB8uFjPknZDF4uSIHC7/whDyRbCqa+Jtc3CZjO+DMR60y"
