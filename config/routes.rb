Rails.application.routes.draw do
  resources :comments, only: [:index, :create, :destroy]
  resources :favorites, only: [:index, :create, :destroy, :update]
  resources :games, only: [:index]
  resources :rivalries, only: [:index, :show]
  resources :users, only: [:destroy, :update]
  # resources :teams
  # resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
