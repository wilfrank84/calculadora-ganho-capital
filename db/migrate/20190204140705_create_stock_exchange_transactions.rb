class CreateStockExchangeTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :stock_exchange_transactions do |t|
      t.datetime :transaction_date, null: false
      t.integer :transaction_kind, default: 0
      t.integer :amount, null: false
      t.integer :asset_kind, default: 0
      t.string :asset_name
      t.decimal :asset_price, null: false, precision: 8, scale: 2
      t.decimal :transaction_costs, precision: 8, scale: 2
      t.decimal :transaction_total_price, precision: 8, scale: 2
      t.integer :status, default: 1
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
