class RemoveDateFromGames < ActiveRecord::Migration[6.1]
  def change
    remove_column :games, :date, :string
    add_column :games, :date, :string
  end
end
