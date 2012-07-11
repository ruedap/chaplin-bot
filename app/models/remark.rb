class Remark < ActiveRecord::Base
  attr_accessible :phrase
end
# == Schema Information
#
# Table name: remarks
#
#  id         :integer         not null, primary key
#  phrase     :string(140)     not null
#  created_at :datetime        not null
#  updated_at :datetime        not null
#

