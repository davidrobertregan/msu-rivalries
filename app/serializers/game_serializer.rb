class GameSerializer < ActiveModel::Serializer
  attributes :id, :date, :location, :score, :winning_team, :losing_team, :notes, :rivalry_name
  has_many :comments

  def winning_team
    self.object.winner.name
  end

  def losing_team
    self.object.loser.name
  end

  def rivalry_name
    self.object.rivalry.name
  end

end
