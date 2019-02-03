Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  root 'hello_angular#index'
  get 'hello_angular/index'
  get 'hello_angular/name'
end
