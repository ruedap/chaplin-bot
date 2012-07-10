class AddTweetNumberToRemarks < ActiveRecord::Migration
  def change
    add_column :remarks, :tweet_number, :integer, null: false, default: 0
  end
end
