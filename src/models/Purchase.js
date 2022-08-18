import { Model } from "./Model"


class Purchase extends Model {
    constructor(self) {
        super(self)
    }
}

class PurchaseItem extends Model {
    constructor(self) {
        super(self)
        this.Purchase = self.Purchase
        this.Product = self.Product
        this.Quantity = self.Quantity
        this.Price = self.Price
        this.TotalPrice = self.TotalPrice
    }
}