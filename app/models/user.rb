class User < ApplicationRecord
    has_many :favorites

    validates :username, uniqueness: :true
    validates :email, uniqueness: :true
    has_secure_password
end
