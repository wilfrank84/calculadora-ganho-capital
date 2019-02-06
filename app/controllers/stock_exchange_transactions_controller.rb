class StockExchangeTransactionsController < ApplicationController
  before_action :authenticate_user!

  def index
    begin
      transactions = StockExchangeTransaction.all
      render json: transactions, status: 200
    rescue
      head 404
    end
  end

  def user_transactions
    transactions = StockExchangeTransaction.where(user_id: current_user.id)

    if transactions
      render json: transactions, status: 200
    else
      render status: 204
    end
  end

  def show
    transaction = StockExchangeTransaction.find(params[:id])
    render json: transaction, status: 200
  end

  def create
    transaction = current_user.stock_exchange_transactions.build(transaction_params)

    if transaction.save
      render json: transaction, status: 201
    else
      render json: { errors: transaction.errors }, status: 422
    end
  end

  def update
    transaction = StockExchangeTransaction.find(params[:id])

    if transaction.update_attributes(transaction_params)
      render json: transaction, status: 200
    else
      render json: { errors: transaction.errors }, status: 422
    end
  end

  private

  def transaction_params
    params.require(:stock_exchange_transaction).permit(
      :id, :transaction_date, :transaction_kind, :amount, :asset_kind, :asset_name,
      :asset_price, :transaction_costs, :asset_price_less_costs, :transaction_total_price,
      :user_id
    )
  end

end
