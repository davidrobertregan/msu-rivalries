class User < ApplicationRecord
    has_many :favorites, dependent: :destroy
    has_many :comments, dependent: :destroy

    validates :username, uniqueness: :true
    validates :email, uniqueness: :true
    has_secure_password
end
