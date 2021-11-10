class User < ApplicationRecord
    has_many :favorites, dependent: :destroy
    has_many :comments, dependent: :destroy

    validates :username, uniqueness: :true, presence: :true
    validates :email, uniqueness: :true, presence: :true
    has_secure_password
end
