class Rivalry < ApplicationRecord
  belongs_to :team_one, class_name: "Team", foreign_key: "team_one_id"
  belongs_to :team_two, class_name: "Team", foreign_key: "team_two_id"
  has_many :games

  def teams
    [self.team_one, self.team_two]
  end

  def record

    team1wins = 0
    team2wins = 0
    ties = 0

    self.games.all.each do |g| 
      if g.winner_id == self.team_one.id
        team1wins += 1
      elsif g.winner_id == team_two.id
        team2wins += 1
      else
        ties += 1
      end
    end
    
    if team1wins > team2wins 
      "#{team_one.name} leads #{team1wins} - #{team2wins} - #{ties}"
    else
      "#{team_two.name} leads #{team2wins} - #{team1wins} - #{ties}"
    end
  end

end

