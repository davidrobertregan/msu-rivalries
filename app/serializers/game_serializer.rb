class GameSerializer < ActiveModel::Serializer
  attributes :id, :date, :location, :score, :notes, :rivalry_name, :winning_team, :losing_team, :winning_team_logo, :losing_team_logo
  has_many :comments
  has_one :winner
  has_one :loser

  def winning_team
    self.object.winner.name
  end

  def winning_team_logo
    self.object.winner.logo_url
  end
  
  def losing_team
    self.object.loser.name
  end

  def losing_team_logo
    self.object.loser.logo_url
  end
  
  def rivalry_name
    self.object.rivalry.name
  end

end
