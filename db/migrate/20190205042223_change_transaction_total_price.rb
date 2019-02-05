class ChangeTransactionTotalPrice < ActiveRecord::Migration[5.2]
  def change
    change_column :stock_exchange_transactions, :transaction_total_price, :decimal, precision: 12, scale: 2
    change_column :stock_exchange_transactions, :irrf, :decimal, precision: 8, scale: 2
  end
end
