import { Model } from "./Model";

/***
 * https://www.sohamkamani.com/javascript/enums/
 * **/

const CartStatus = {
    started: 0,
    buying: 1,
    draft: 7,
    ended: 9,
}

export class Cart extends Model {
    //
    constructor(self) {
        super(self)
        this.quantityItems = self.quantityItems
        this.CartItemCollection = self.CartItemCollection
        this.totalPrice = self.totalPrice
        this.cartStatus = self.CartStatus
    }

    addItem(item) {
        this.CartItemCollection.push(item)
        // TODO: change to a observer pattern
        
        this.calculate_total_price_of_items()
    }

    incrementQuantityItems() {
        this.quantityItems += 1
    }

    decrementQuantityItems() {
        this.quantityItems -= 1
    }

    removeItem(item) {
        index = this.CartItemCollection.indexOf(item)
        // no index with undefined item value
        this.CartItemCollection.splice(index, 1)
    }

    calculate_total_price_of_items() {
        this.CartItemCollection.forEach(item => {
            this.totalPrice += item.totalPrice
        });
    }


}

export class CartItem extends Model {
    constructor(self) {
        super(self)
        this.Cart = self.Cart
        this.Product = self.Product
        this.quantity = self.quantity
        this.totalPrice = 0
    }

    calculate_total_price() {
        this.totalPrice = this.Product.price * this.quantity
        return this.totalPrice
    }
    // TODO: ao mudar a quantity recalcular o totalPrice
}