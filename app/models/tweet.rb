class Tweet < ActiveRecord::Base
  attr_accessible :remark_id, :tweet_at
  belongs_to :remark

  def self.shuffle_tweet
    insert_all_remarks if empty?

    update_tweet
  end

  private

  def self.empty?
    return true if Tweet.count.zero?
    return true if Tweet.where(tweet_at: nil).count.zero?

    return false
  end

  def self.insert_all_remarks
    Remark.all.shuffle.each do |remark|
      Tweet.create(remark_id: remark.id)
    end
  end

  def self.update_tweet
    tweet = Tweet.where(tweet_at: nil).order(:id).first

    configure_twitter
    result = update_twitter(tweet.remark.phrase.chomp)
    return unless result

    puts "TWEET: #{result.text}"
    tweet.tweet_at = Time.zone.now
    tweet.save
  end

  def self.update_twitter(text)
    if Rails.env.development?
      text = text[0..135]
      suffix = Time.now.to_i.to_s[-4..-1]
      text += suffix
    end

    Twitter.update(text)
  rescue => e
    puts "ERROR: #{e.message}"
    nil
  end

  def self.configure_twitter
    if Rails.env.development? || Rails.env.test?
      Pit.get('chaplin_staging').each { |key, value| ENV["#{key}"] = "#{value}" }
    end

    Twitter.configure do |config|
      config.consumer_key       = ENV['TWITTER_CONSUMER_KEY']
      config.consumer_secret    = ENV['TWITTER_CONSUMER_SECRET']
      config.oauth_token        = ENV['TWITTER_OAUTH_TOKEN']
      config.oauth_token_secret = ENV['TWITTER_OAUTH_TOKEN_SECRET']
    end
  end
end
