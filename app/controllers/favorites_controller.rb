class FavoritesController < ApplicationController
    
    before_action :find_favorite, except: [:index, :create]
    before_action :authorize_user, only: [:update, :destroy]

    def index
        render json: Favorite.all
    end

    def show
        render json: @favorite, serializer: FavoriteShowSerializer
    end

    def create
        new_fav = current_user.favorites.create(favorite_params)
        if new_fav.valid?
            render json: new_fav, status: :created
        else
            render json: { errors: new_fav.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @favorite.destroy
    end

    def update 
        @favorite.update(favorite_params)
        render json: @favorite, status: :ok
    end

    private 

    def find_favorite
        @favorite = Favorite.find_by(id: params[:id])
        if !@favorite
            render json: {error: "favorite not found"}
        end
    end

    def authorize_user
        user_can_modify = current_user.admin? || @favorite.user == current_user
        render json: { error: "You don't have permission to perform that action" }, status: :forbidden unless user_can_modify
    end

    def favorite_params
        params.permit(:location, :img_url, :favorite_moment, :game_id, :nickname)
    end
end
