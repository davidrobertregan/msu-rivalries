class UsersController < ApplicationController

    def show
        if current_user
            render json: current_user
        else
            render json: { error: "No active session" }, status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy 
        user = User.find_by(id: params[:id])
        if user
            user.destroy
            render json: user
        else
            render json: {error: "User does not exist"}, status: :not_found
        end
    end

    private 

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end
end
