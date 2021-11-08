class User < ApplicationRecord
    has_many :favorites
    has_many :comments

    validates :username, uniqueness: :true
    validates :email, uniqueness: :true
    has_secure_password
end
