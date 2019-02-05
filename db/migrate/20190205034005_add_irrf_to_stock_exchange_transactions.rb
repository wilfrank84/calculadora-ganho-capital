class AddIrrfToStockExchangeTransactions < ActiveRecord::Migration[5.2]
  def change
    add_column :stock_exchange_transactions, :irrf, :decimal, precision: 8, scale: 4
  end
end
