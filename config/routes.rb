Rails.application.routes.draw do
  resources :instruments
  resources :setlists
  resources :practice_notes
  resources :songs
  resources :users
  get 'fallback/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/hello', to: 'application#hello_world'

  get '*path', 
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }

    post "/login", to: "sessions#create"

    get "/me", to: "users#show"

    delete "/logout", to: "sessions#destroy"
end
