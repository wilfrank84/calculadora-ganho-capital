class StockExchangeTransactionsController < ApplicationController

  def index
    begin
      transactions = StockExchangeTransaction.all
      render json: transactions, status: 200
    rescue
      head 404
    end
  end

end
