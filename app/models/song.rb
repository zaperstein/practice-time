class Song < ApplicationRecord
  has_many :practice_notes
  has_many :instruments
end
