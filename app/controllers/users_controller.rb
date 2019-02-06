class UsersController < ApplicationController

  def index
    users = User.all
    render json: users, status: 200
  end

  def show
    user = User.find(params[:id])
    render json: user, status: 200
  end

  def profile
    user = User.find(current_user.id)
    render json: user, status: 200
  end

  def create
    user = user.new(user_params)

    if user.save
      render json: user, status: 201
    else
      render json: { errors: user.errors }, status: 422
    end
  end

  def update
    user = User.find(params[:id])

    if user.update_attributes(user_params)
      render json: user, status: 200
    else
      render json: { errors: user.errors }, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:id, :email, :name, :roles)
  end
end
