# Tweet class
class Tweet < ActiveRecord::Base
  belongs_to :remark

  def self.shuffle_tweet
    reset(Remark.all.shuffle) if empty?
    update_tweet
  end

  def self.empty?
    count.zero? || where(tweeted_at: nil).count.zero?
  end

  def self.reset(remarks)
    delete_all
    remarks.each { |remark| create(remark_id: remark.id) }
  end

  def self.latest
    where(tweeted_at: nil).order(:id).first
  end

  def used
    self.tweeted_at = Time.zone.now
    save
  end

  def text
    remark.phrase
  end

  private

  def self.update_tweet
    twitter = configure_twitter
    return unless twitter

    tweet = latest
    result = update_twitter(twitter, tweet.text)
    return unless result

    puts "TWEET: #{result.text}"
    tweet.used
  end

  def self.update_twitter(twitter, text)
    twitter.update(text)
  rescue => e
    puts "ERROR: #{e.message}"
    nil
  end

  def self.configure_twitter
    Twitter::REST::Client.new do |config|
      config.consumer_key       = ENV['TWITTER_CONSUMER_KEY']
      config.consumer_secret    = ENV['TWITTER_CONSUMER_SECRET']
      config.oauth_token        = ENV['TWITTER_OAUTH_TOKEN']
      config.oauth_token_secret = ENV['TWITTER_OAUTH_TOKEN_SECRET']
    end
  end
end
# == Schema Information
#
# Table name: tweets
#
#  id         :integer         not null, primary key
#  remark_id  :integer         not null
#  tweeted_at :datetime
#  created_at :datetime        not null
#  updated_at :datetime        not null
#

