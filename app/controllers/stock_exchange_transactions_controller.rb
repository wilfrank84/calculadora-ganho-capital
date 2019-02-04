class StockExchageTransactionsController < ApplicationController
  def index
    transactions = StockExchageTransaction.all
    render json: transactions, status: 200
  end
end
