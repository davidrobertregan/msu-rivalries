class AddColumnsToFavorites < ActiveRecord::Migration[6.1]
  def change
    remove_column :favorites, :description, :string
    add_column :favorites, :location, :string
    add_column :favorites, :favorite_moment, :text
    add_column :favorites, :img_url, :string
  end
end
