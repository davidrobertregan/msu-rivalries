class RivalrySerializer < ActiveModel::Serializer
  attributes :id, :name, :trophy, :trophy_img_url, :description
  has_one :team
  has_one :team
end
