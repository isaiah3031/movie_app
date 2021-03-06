Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: 'json' } do
    resources :users, only: %i[create edit]
    resources :sessions, only: %i[create]
    match "sessions", to: "sessions#destroy", via: "delete", defaults: { id: nil }
  end
end
