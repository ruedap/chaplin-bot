begin
  require 'rspec/core/rake_task'
  RSpec::Core::RakeTask.new(:spec)
  # default rake task
  task default: :spec
rescue LoadError
end
