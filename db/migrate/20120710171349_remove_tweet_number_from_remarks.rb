class RemoveTweetNumberFromRemarks < ActiveRecord::Migration
  def up
    remove_column :remarks, :tweet_number
  end

  def down
    add_column :remarks, :tweet_number, :string
  end
end
