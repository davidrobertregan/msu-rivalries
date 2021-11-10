class EditImgUrlInFavorites < ActiveRecord::Migration[6.1]
  def change
    remove_column :favorites, :img_url
    add_column :favorites, :img_url, :text
  
  end
end
