class Game < ApplicationRecord
  belongs_to :rivalry
  belongs_to :winner, class_name: "Team", foreign_key: "winner_id"
  belongs_to :loser, class_name: "Team", foreign_key: "loser_id"
  has_many :favorites
end
