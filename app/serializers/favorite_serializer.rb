class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :location, :favorite_moment, :img_url

  has_one :game

end
