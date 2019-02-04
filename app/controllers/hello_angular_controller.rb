class HelloAngularController < ApplicationController
  before_action :authenticate_user!

  def index
  end

  def name
    name = %w[Jack Smith Sara Linda Josh Amitai].sample
    render json: { name: name }
  end
end
