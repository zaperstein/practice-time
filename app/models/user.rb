class User < ApplicationRecord
  has_many :setlists
  has_many :instruments
  has_many :songs, through: :setlists
end
