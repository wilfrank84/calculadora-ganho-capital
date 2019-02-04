class AddAssetPriceLessCostsToStockExchangeTransactions < ActiveRecord::Migration[5.2]
  def change
    add_column :stock_exchange_transactions, :asset_price_less_costs, :decimal, precision: 8, scale: 4
  end
end
