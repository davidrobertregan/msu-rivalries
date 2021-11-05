class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :game

  validates :game_id, uniqueness: { scope: :user_id, message: "- you've already favorited this one!" }
end
