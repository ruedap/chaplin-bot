require './tweet.rb'
require './database.rb'

task :cron do
  Tweet.new.tweet
end

desc 'Bot Tweet'
task 'bot:tweet' do
  puts 'Bot Tweeting...'
  Tweet.new.tweet
end

desc 'Setup Database'
task 'db:set' do
  puts 'Setup Database...'
  Database.new.connect.migrate.create
end

