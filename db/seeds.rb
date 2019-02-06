# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create([
  {
    name: 'Gustavo',
    email: 'admin@email.com',
    password: '123456',
    password_confirmation: '123456',
    roles: ['admin']
  },
  {
    name: 'Pedro',
    email: 'cliente@email.com',
    password: '123456',
    password_confirmation: '123456',
    roles: ['client']
  }
])

StockExchangeTransaction.create([
  {
    transaction_date: "2019-02-02 02:00:00",
    transaction_kind: "purchase",
    amount: 3000,
    asset_kind: "stock",
    asset_name: "PETR4",
    asset_price: 0.1294e2,
    transaction_costs: 41.6500,
    transaction_total_price: 0.3882e5,
    status: 0,
    user_id: 1,
    asset_price_less_costs: 0.129539e2,
    irrf: nil
  },
  {
    transaction_date: "2019-02-05 02:00:00",
    transaction_kind: "sale",
    amount: 3000,
    asset_kind: "stock",
    asset_name: "PETR4",
    asset_price: 0.1694e2,
    transaction_costs: 0.5452e2,
    transaction_total_price: 0.5082e5,
    status: 0,
    user_id: 1,
    asset_price_less_costs: 0.169218e2,
    irrf: 0.254e1
  },
  {
    transaction_date: "2019-02-02 02:00:00",
    transaction_kind: "purchase",
    amount: 3000,
    asset_kind: "stock",
    asset_name: "PETR4",
    asset_price: 0.1294e2,
    transaction_costs: 41.6500,
    transaction_total_price: 0.3882e5,
    status: 0,
    user_id: 2,
    asset_price_less_costs: 0.129539e2,
    irrf: nil
  },
  {
    transaction_date: "2019-02-02 02:00:00",
    transaction_kind: "purchase",
    amount: 3000,
    asset_kind: "stock",
    asset_name: "PETR4",
    asset_price: 0.1294e2,
    transaction_costs: 41.6500,
    transaction_total_price: 0.3882e5,
    status: 0,
    user_id: 2,
    asset_price_less_costs: 0.129539e2,
    irrf: nil
  },
  {
    transaction_date: "2019-02-05 02:00:00",
    transaction_kind: "sale",
    amount: 3000,
    asset_kind: "stock",
    asset_name: "PETR4",
    asset_price: 0.1694e2,
    transaction_costs: 0.5452e2,
    transaction_total_price: 0.5082e5,
    status: 0,
    user_id: 1,
    asset_price_less_costs: 0.169218e2,
    irrf: 0.254e1
  }
])
