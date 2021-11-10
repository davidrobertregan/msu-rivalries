class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :author, :game_id, :time, :user_can_modify
  has_one :game

  def author
    self.object.user.username
  end

  def time
    self.object.created_at.strftime('%b %e, %l:%M %p')
  end

  def user_can_modify
    current_user.admin? || self.object.user == current_user
  end

end
