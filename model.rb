require 'rubygems'
require 'dm-core'
require 'dm-validations'
require 'dm-validations-i18n'

DataMapper::Validations::I18n.localize! 'ja'

class Post
  include DataMapper::Resource

  property :id, Serial
  property :title, String, :required => true, :unique => true, :length => 1..140
  property :tweet_num, Integer, :default  => 0
  property :created_at, DateTime
end

