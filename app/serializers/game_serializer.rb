class GameSerializer < ActiveModel::Serializer
  attributes :id, :year, :winning_score, :losing_score, :notes
  has_one :rivalry
end
