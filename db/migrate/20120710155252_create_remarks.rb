class CreateRemarks < ActiveRecord::Migration
  def change
    create_table :remarks do |t|
      t.string :phrase, null: false, limit: 140

      t.timestamps
    end
  end
end
