class FavoritesController < ApplicationController
    
    def index
        if current_user
            render json: current_user.favorites.all
        else
            render json: {error: "You must be logged in"}, status: :unauthorized
        end
    end
end
