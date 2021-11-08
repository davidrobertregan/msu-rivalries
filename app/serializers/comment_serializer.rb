class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :author, :game_id
  # has_one :user
  # has_one :game

  def author
    self.object.user.username
  end
end
