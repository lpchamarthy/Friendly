class Profile < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :address1, presence: true
  validates :address2, presence: true
  validates :contact, presence: true
end
