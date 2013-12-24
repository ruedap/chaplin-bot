namespace :tweet do
  desc 'Post shuffle tweet to Twitter'
  task shuffle: :environment do
    Tweet.shuffle_tweet
  end
end
