class AddDefaultValueToImgUrlInFavorites < ActiveRecord::Migration[6.1]
  def change
    change_column_default :favorites, :img_url, "https://cdn.shopify.com/s/files/1/1058/4992/products/MSU-Gruff-Sparty-Throwback-Sticker.jpg?v=1571721153"
  end
end
