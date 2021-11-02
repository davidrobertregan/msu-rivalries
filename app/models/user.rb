class User < ApplicationRecord
    validates :username, uniqueness: :true
    validates :email, uniqueness: :true
    has_secure_password
end
