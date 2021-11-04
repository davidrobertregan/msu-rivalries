Rails.application.routes.draw do
  # resources :games
  resources :rivalries, only: [:index, :show]
  # resources :teams
  # resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "api/me", to: "users#show"
  post "api/signup", to: "users#create"
  post "api/login", to: "sessions#create"
  delete "api/logout", to: "sessions#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
