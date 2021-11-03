class Team < ApplicationRecord
    has_many :first_rivalries, class_name: "Rivalry", foreign_key: "team_one_id"
    has_many :second_rivalries, class_name: "Rivalry", foreign_key: "team_two_id"

    def rivalries
        self.first_rivalries.to_a + self.second_rivalries.to_a
    end

end

