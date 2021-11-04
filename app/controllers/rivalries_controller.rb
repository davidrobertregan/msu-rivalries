class RivalriesController < ApplicationController

    def index
        render json: Rivalry.all
    end

    def show
        rivalry = Rivalry.find_by(id: params[:id])
        if rivalry
            render json: rivalry, status: :ok, serializer: RivalryShowSerializer
        else
            render json: { error: "Rivalry does not exist"}, status: :not_found
        end
    end

end
