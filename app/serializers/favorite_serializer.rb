class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :description
  has_one :user
  has_one :game
end
