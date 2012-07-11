# This file is used by Rack-based servers to start the application.

require ::File.expand_path('../config/environment',  __FILE__)
run Chaplin::Application

# http://qiita.com/items/75c5d13f5e8042432f9d
$stdout.sync = true
