require 'rubygems'
require 'role_model'

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  include DeviseTokenAuth::Concerns::User

  has_many :stock_exchange_transactions

  # SETUP TO ROLE MODEL GEM
  # https://github.com/martinrehfeld/role_model
  include RoleModel
  roles_attribute :roles_mask
  roles :admin, :client

end
