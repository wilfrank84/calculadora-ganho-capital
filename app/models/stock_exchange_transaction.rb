class StockExchangeTransaction < ApplicationRecord
  belongs_to :user

  validates :amount, numericality: { only_integer: true }
  validates :asset_price, :transaction_costs, numericality: true
  validates :transaction_date, :transaction_kind, :amount,
            :asset_price, :transaction_costs, presence: true

  # TRANSACTION KIND OPTIONS
  enum transaction_kind: {
    purchase: 0,
    sale: 1
  }

  # ASSET KIND OPTIONS
  enum asset_kind: {
    stock: 0,
    etf: 1,
    real_estate_fund: 2,
    option: 3,
    mini_index: 4,
    mini_dollar: 5,
  }

  before_create :final_purchase_price


  def final_purchase_price
    final_purchase_price = self.asset_price + self.transaction_costs / self.amount
    self.asset_price_less_costs = final_purchase_price
  end

end
