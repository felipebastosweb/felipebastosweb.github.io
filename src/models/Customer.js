import { Model } from "./Model"

class Customer extends Model {
    constructor(self) {
        super(self)
        this.name = self.name
        this.birth_date = self.birth_date
        this.genre = self.genre
    }
}