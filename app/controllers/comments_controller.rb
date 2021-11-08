class CommentsController < ApplicationController

    def index
        render json: Comment.all
    end

    def create
        if current_user
            comment = current_user.comments.create(comment_params)
            if comment.valid?
                render json: comment, status: :created
            else
                render json: { errors: comment.errors.full_messages }
            end
        else
            render json: { error: "You must be logged in" }, status: :unauthorized
        end
    end

    def destroy
        if current_user
            comment = current_user.comments.find_by(id: params[:id])
            if comment
                comment.destroy
                head :no_content
            else
                render json: {error: "Comment does not exist"}, status: :not_found
            end
        else
            render json: { error: "You must be logged in" }, status: :unauthorized
        end
    end

    def comment_params
        params.permit(:content, :game_id)
    end
end
