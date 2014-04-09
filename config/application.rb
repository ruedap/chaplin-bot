require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Chaplin
  class Application < Rails::Application
    config.i18n.default_locale = :en

    # Set to .sass as default for stylesheets
    config.sass.preferred_syntax = :sass

    # Set bower's assets path
    config.assets.paths << Rails.root.join('vendor/assets/components')
  end
end
