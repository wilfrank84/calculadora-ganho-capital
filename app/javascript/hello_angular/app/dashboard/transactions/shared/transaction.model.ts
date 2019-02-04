export class Transaction {
  public constructor(
    public transactionDate?: string,
    public transactionkind?: string,
    public amount?: number,
    public assetKind?: string,
    public assetName?: string,
    public assetPrice?: number,
    public transactionCosts?: number,
    public assetPriceLessCosts?: number,
    public transactionTotalPrice?: number,
    public userId?: number,
    public id?: number
  ) {}

  // ========================================
  // instance methods
  // ========================================

  public jsonForRailsAPI(options?: any){
    let jsonBody = {
      transaction_date: this.transactionDate,
      transaction_kind: this.transactionkind,
      amount: this.amount,
      asset_kind: this.assetKind,
      asset_name: this.assetName,
      asset_price: this.assetPrice,
      transaction_costs: this.transactionCosts,
      asset_price_less_costs: this.assetPriceLessCosts,
      transaction_total_price: this.transactionTotalPrice
    };

    return { stock_exchange_transaction: jsonBody };
  }
}
