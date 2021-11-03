class CreateRivalries < ActiveRecord::Migration[6.1]
  def change
    create_table :rivalries do |t|
      t.string :name
      t.string :trophy
      t.string :trophy_img_url
      t.string :description
      t.integer :team_one_id
      t.integer :team_two_id

      t.timestamps
    end
  end
end
