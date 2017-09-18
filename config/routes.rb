Rails.application.routes.draw do
  root 'profile#home'

  post '/login', to:'login#login'
  get '/login', to:'login#home'
  get '/register', to:'login#register'
  get '/profile_view' , to:'users#show_data'
  get 'timeline/timeline'

  #react component react...!
  get '/profile' , to: 'profile#profile'
  get '/wall' , to:  'profile#wall'
  get '/friends' , to: 'profile#myfriends' 
  get '/home' , to: 'profile#home'
  get '/view', to:'profile#view'
  resource :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
