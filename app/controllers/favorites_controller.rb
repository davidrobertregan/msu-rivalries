class FavoritesController < ApplicationController
    
    def index
        render json: current_user.favorites.all
    end

    def show 
        fav = Favorite.find(params[:id])
        if fav
            render json: fav
        else
            render json: {error: "Favorite does not exit"}, status: :not_found
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

    def destroy
        if current_user
            fav = Favorite.find_by(id: params[:id])
            if fav
                fav.destroy
                head :no_content
            else
                render json: {error: "Favorite does not exit"}, status: :not_found
            end
        else
            render json: {error: "You must be logged in"}, status: :unauthorized
        end
    end

    def update 
        if current_user
            fav = Favorite.find_by(id: params[:id])
            if fav
                fav.update(favorite_params)
                render json: fav, status: :ok
            else
                render json: {error: "Favorite does not exist"}, status: :not_found
            end
        else
            render json: {error: "You must be logged in"}, status: :unauthorized
        end
    end

    private 

    def favorite_params
        params.permit(:location, :img_url, :favorite_moment, :game_id)
    end
end
