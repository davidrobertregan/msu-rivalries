class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :favorite_moment, :img_url, :owner, :winning_team, :losing_team, :game_date, :game_id

  def owner
    self.object.user.username
  end

  def winning_team
    self.object.game.winner.name
  end

  def losing_team
    self.object.game.loser.name
  end

  def game_date
    self.object.game.date
  end

end
