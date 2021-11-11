class SessionsController < ApplicationController

    skip_before_action :confirm_authentication, only: [:create]

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { errors: ["Hmmm... we couldn't find that username or password. Please try again."] }, status: :not_found
        end
    end

    def destroy
        session.delete :user_id
    end

end
