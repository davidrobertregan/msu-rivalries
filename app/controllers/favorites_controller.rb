class FavoritesController < ApplicationController
    
    def index
        if current_user
            render json: current_user.favorites.all
        else
            render json: {error: "You must be logged in"}, status: :unauthorized
        end
    end

    def create
        if current_user
            new_fav = current_user.favorites.create(favorite_params)
            if new_fav.valid?
                render json: new_fav, status: :created
            else
                render json: { errors: new_fav.errors.full_messages }, status: :unprocessable_entity
            end
        else
            render json: {error: "You must be logged in"}, status: :unauthorized
        end
    end

    private 

    def favorite_params
        params.permit(:description, :game_id)
    end
end
