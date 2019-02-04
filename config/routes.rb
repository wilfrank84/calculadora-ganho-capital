Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth', defaults: { format: :json }

  root 'hello_angular#index'

  get 'hello_angular/index'
  get 'hello_angular/name'

  resources :users, only: [:index]
  resources :stock_exchange_transactions, only: [:index, :show, :create, :update, :destroy]
end
