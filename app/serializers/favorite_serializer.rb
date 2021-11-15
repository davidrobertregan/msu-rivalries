class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :img_url, :owner, :winning_team, :losing_team, :game_date, :game_id, :nickname, :preview

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

  def preview
    if self.object.favorite_moment
      "#{self.object.favorite_moment[0..40]}..."
    end
  end

end
