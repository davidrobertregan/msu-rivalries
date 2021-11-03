class RivalryShowSerializer < ActiveModel::Serializer
    attributes :id, :name, :trophy, :trophy_img_url, :description

    belongs_to :team_one
    belongs_to :team_two

    has_many :games

end
