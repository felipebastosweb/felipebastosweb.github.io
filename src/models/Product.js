import { Model } from "./Model"


export class Product extends Model {
    constructor(self) {
        super(self)
        this.title = self.title
        this.description = self.description
        this.price = self.price
    }
    
}
