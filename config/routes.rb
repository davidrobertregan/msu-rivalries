Rails.application.routes.draw do
  resources :comments, only: [:index, :create, :destroy]
  resources :favorites
  resources :games, only: [:index]
  resources :rivalries, only: [:index, :show]
  resources :users, only: [:destroy, :update]

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
