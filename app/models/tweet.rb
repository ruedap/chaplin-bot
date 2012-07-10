class Tweet < ActiveRecord::Base
  attr_accessible :remark_id, :tweet_at
  belongs_to :remark
end
