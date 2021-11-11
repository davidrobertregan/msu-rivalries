class GamesController < ApplicationController

    def index 
        if current_user
            render json: Game.all
        else
            render json: {error: "You must be logged in for this action"}, status: :unauthorized
        end
    end

end
