require 'rubygems'
require 'twitter'
require 'dm-core'

class Tweet
  def initialize
    DataMapper.setup(:default, ENV['DATABASE_URL'] || 'sqlite3:db.sqlite3')

    Twitter.configure do |config|
      config.consumer_key       = ENV['CONSUMER_KEY']
      config.consumer_secret    = ENV['CONSUMER_SECRET']
      config.oauth_token        = ENV['OAUTH_TOKEN']
      config.oauth_token_secret = ENV['OAUTH_TOKEN_SECRET']
    end

    shuffle if empty?
  end

  def shuffle
    @post = Post.all
    s = (1..@post.size).to_a.shuffle
    @post.each do |post|
      post.tweet_num = s.shift unless s.empty?
    end
    @post.save
  end

  def empty?
    Post.all.find {|post| post.tweet_num > 0 }.nil?
  end

  def tweet
    t = get_tweet
    r = tweet_to_twitter t.title
    set_tweet_num t unless r.nil?
  end

  private
  def get_tweet
    shuffle if empty?
    Post.all(:tweet_num.gt => 0, :order => [:tweet_num.desc]).first
  end

  def tweet_to_twitter tweet
    return nil unless tweet
    begin
      Twitter.update tweet.chomp
    rescue => ex
      nil
    end
  end

  def set_tweet_num record
    record.tweet_num = 0
    record.save
  end
end
