class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :author, :game_id, :time
  # has_one :user
  # has_one :game

  def author
    self.object.user.username
  end

  def time
    self.object.created_at.strftime('%b %e, %l:%M %p')
  end

end
