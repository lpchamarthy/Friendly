Rails.application.routes.draw do
  root 'login#home'

  post '/login', to:'login#login'
  get '/register', to:'login#register'
  get 'timeline/timeline'

  resource :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
