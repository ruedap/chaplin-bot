# coding: utf-8

desc 'Shuffle tweet'
task cron: :environment do
  Tweet.shuffle_tweet
end

