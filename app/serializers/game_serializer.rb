class GameSerializer < ActiveModel::Serializer
  attributes :id, :date, :location, :score, :notes, :rivalry_name
  has_many :comments
  has_one :winner
  has_one :loser

  # def winning_team
  #   self.object.winner.name
  # end

  # def losing_team
  #   self.object.loser.name
  # end

  def rivalry_name
    self.object.rivalry.name
  end

end
