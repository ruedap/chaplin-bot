class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.integer :remark_id, null: false
      t.datetime :tweet_at

      t.timestamps
    end
  end
end
