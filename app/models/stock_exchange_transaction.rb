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

  before_create :verify_transaction_kind
  before_create :transaction_total_price
  after_create :calc_IRRF

  def verify_transaction_kind
    if self.transaction_kind == 'purchase'
      final_purchase_price
    else
      final_sales_price
    end
  end

  def final_purchase_price
    final_purchase_price = self.asset_price + self.transaction_costs / self.amount
    self.asset_price_less_costs = final_purchase_price
  end

  def final_sales_price
    final_sales_price = self.asset_price - self.transaction_costs / self.amount
    self.asset_price_less_costs = final_sales_price
  end

  def transaction_total_price
    self.transaction_total_price = self.amount * self.asset_price
  end

  def calc_IRRF
    if self.transaction_kind == 'sale' && self.transaction_total_price > 20000
      irrf = self.transaction_total_price * 0.00005
      self.update(irrf: irrf)
    end
  end

end
