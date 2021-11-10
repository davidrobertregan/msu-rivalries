class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :admin

  has_many :comments
  has_many :favorites
end
