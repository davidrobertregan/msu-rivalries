class AddLocationToGames < ActiveRecord::Migration[6.1]
  def change
    add_column :games, :location, :string
  end
end
