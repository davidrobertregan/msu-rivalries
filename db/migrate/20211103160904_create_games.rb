class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.integer :date
      t.string :score
      t.text :notes
      t.belongs_to :rivalry, null: false, foreign_key: true
      t.integer :winner_id
      t.integer :loser_id

      t.timestamps
    end
  end
end
