class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
      t.integer :remark_id, null: false
      t.time :tweet_at, default: nil

      t.timestamps
    end
  end
end
