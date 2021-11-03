class Team < ApplicationRecord
    has_many :first_rivalries, class_name: "Rivalry", foreign_key: "team_one_id"
    has_many :second_rivalries, class_name: "Rivalry", foreign_key: "team_two_id"

    # I'm not sure I need this method, but how can I do has many games through rivalries?

    # has_many :winning_games, through: :first_rivalries, source: "games", foreign_key: "winner_id"

    has_many :first_games, through: :first_rivalries, source: "games"
    has_many :second_games, through: :second_rivalries, source: "games"


    def rivalries
        self.first_rivalries.to_a + self.second_rivalries.to_a
    end

    def games
        self.first_games.to_a + self.second_games.to_a
    end

end

