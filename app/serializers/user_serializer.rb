class UserSerializer < ActiveModel::Serializer
  attributes :id, :uid, :email, :name, :roles
end
