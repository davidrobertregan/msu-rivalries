class Rivalry < ApplicationRecord
  belongs_to :team_one, class_name: "Team", foreign_key: "team_one_id"
  belongs_to :team_two, class_name: "Team", foreign_key: "team_two_id"
  has_many :games

  def teams
    [self.team_one, self.team_two]
  end

end

