class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { errors: ["Wrong username or password"] }, status: :not_found
        end
    end

    def destroy
        if current_user
            session.delete :user_id
        else 
            render json: { error: "No active session" }, status: :unprocessable_entity
        end
    end

end
