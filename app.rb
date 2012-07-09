require 'rubygems'
require 'sinatra'
require './model.rb'
require './tweet.rb'

get '/' do
  'under construction'
end

get '/list' do
  Tweet.new
  Post.all(:tweet_num.gt => 0, :order => [:tweet_num.desc]).map {|r| "#{r.tweet_num}, #{r.id}, #{r.created_at}, #{r.title} <br>" }
end

