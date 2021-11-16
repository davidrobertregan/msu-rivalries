class FavoriteShowSerializer < ActiveModel::Serializer
    attributes :id, :favorite_moment, :img_url, :location, :created_at, :updated_at, :user_can_modify, :nickname, :owner
    
    has_one :game
    
    def user_can_modify
        current_user.admin? || self.object.user == current_user
    end

    def owner
        self.object.user.username
      end

end