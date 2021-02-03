class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'show'
    else
      render json: { error: 'Invalid username or password'}
    end
  end

  def edit
    current_user.watch_history.push(user_profile_params[:watch_history])
    if current_user.save
      render 'show'
    else 
      render json: { error: 'Invalid user profile data'}
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def user_profile_params
    params.require(:user).permit(:watch_history)
  end
end
