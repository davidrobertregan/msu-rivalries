class UsersController < ApplicationController
    skip_before_action :confirm_authentication, only: [:create, :show]

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
            UserMailer.welcome_email(user).deliver_later
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy 
        user = User.find_by(id: params[:id])
        if user === current_user
            user.destroy
            render json: user
        else
            render json: {error: "You can only delete your own account"}, status: :not_found
        end
    end

    def update
        current_user.update(user_params)
        if current_user.valid?
            render json: current_user
        else
            render json: { errors: current_user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private 

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end

    # def send_welcome_email
    #     respond_to do |format|
    #         # Tell the UserMailer to send a welcome email after save
    #         UserMailer.with(user: @user).welcome_email.deliver_later
            
    #         format.html { redirect_to(@user, notice: 'User was successfully created.') }
    #         format.json { render json: @user, status: :created, location: @user }
    #     else
    #         format.html { render action: 'new' }
    #         format.json { render json: @user.errors, status: :unprocessable_entity }
    #     end
    # end

end
