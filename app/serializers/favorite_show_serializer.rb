class FavoriteShowSerializer < ActiveModel::Serializer
    attributes :id, :favorite_moment, :img_url, :location, :created_at, :updated_at
    
    has_one :game
end