class TacosController < ApplicationController
  before_action :set_taco, only: [:show, :edit, :update, :destroy]

  def index
    tacos = Taco.all
    render component: "Tacos", props: { tacos: tacos }
  end

  def show
    render component: "Taco", props: { taco: @taco }
  end

  def new
    render component: "NewTaco"
  end

  def create
    new_taco = Taco.new(taco_params)
    if new_taco.save
      redirect_to tacos_path
    end
  end

  def edit
    render component: "EditTaco", props: {taco: @taco}
  end

  def update
    if @taco.update(taco_params)
      redirect_to tacos_path
    end
  end

  def destroy
    @taco.destroy
    redirect_to tacos_path
  end

  private

  def taco_params
    params.require(:taco).permit(:name, :price, :about)
  end

  def set_taco
    @taco = Taco.find(params[:id])
  end
end
