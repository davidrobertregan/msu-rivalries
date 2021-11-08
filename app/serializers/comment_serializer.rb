class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :author
  # has_one :user
  # has_one :game

  def author
    self.object.user.username
  end
end
