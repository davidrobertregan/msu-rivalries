class CommentsController < ApplicationController

    before_action :find_comment, only: [:destroy]
    before_action :authorize_user, only: [:destroy]
    

    def index
        render json: Comment.all
    end

    def create
        comment = current_user.comments.create(comment_params)
        if comment.valid?
            render json: comment, status: :created
        else
            render json: { errors: comment.errors.full_messages }
        end
    end

    def destroy
            @comment.destroy
            render json: @comment
    end

    private

    def find_comment
        @comment = Comment.find(params[:id])
    end

    def authorize_user
        user_can_modify = current_user.admin? || @comment.user == current_user
        if !user_can_modify
            render json: { error: "You don't have permission to perform that action" }, status: :forbidden
        end
    end

    def comment_params
        params.permit(:content, :game_id)
    end

end
