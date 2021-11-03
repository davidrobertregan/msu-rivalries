class GameSerializer < ActiveModel::Serializer
  attributes :id, :date, :location, :score, :winning_team, :losing_team, :notes

  def winning_team
    self.object.winner.name
  end

  def losing_team
    self.object.loser.name
  end

end
