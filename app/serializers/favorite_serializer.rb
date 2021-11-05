class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :description

  has_one :game

end
