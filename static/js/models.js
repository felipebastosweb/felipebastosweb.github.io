
class Model {
    constructor(self) {
        this.id = (self.id != null)
            ? self.id : null
        this.create_date = (self.create_date != null)
            ? self.create_date : Date.now()
        this.update_date = (self.update_date != null)
            ? self.update_date : Date.now()
    }
}

class User extends Model {
    constructor(self) {
        super(self)
        this.username = self.username
        this.password = self.password
        this.telephone = self.telephone
        this.email = self.email
        this.last_access_date = self.last_access_date
    }
    changePassword(password) {
        this.password = password
    }
    login_change_last_access() {
        this.last_access_date = Date.now()
   }
    logout_change_last_access() {
        this.last_access_date = Date.now()
    }
}


class Contact extends Model {
    constructor(self) {
        super(self)
        this.email = self.email
        this.telephone = self.telephone
        this.fax = self.fax
        this.site = self.site
    }
}


class Store extends Model {
    constructor(self) {
        this.name = self.name
        this.user = self.user
        this.fantasy_name = self.fantasy_name
        this.federal_number = self.federal_number
        this.address = self.address
        this.email = self.email
        this.telephone = self.telephone
        this.site = self.site
    }
}

class Supplier extends Model {
    constructor(self) {
        this.name = self.name
        this.fantasy_name = self.fantasy_name
        this.federal_number = self.federal_number
        this.address = self.address
        this.email = self.email
        this.telephone = self.telephone
        this.site = self.site
    }
}

class Product extends Model {
    constructor(self) {
        super(self)
        this.title = self.title
        this.description = self.description
        this.price = self.price
    }
    
}

class ProductStore extends Model {
    constructor(self) {
        super(self)
        this.Product = self.product
        this.Store = self.store
        this.price = self.price
    }
    
}

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
class Stock extends Model {
    constructor(self) {
        super(self)
    }
}

class IncomingStock extends Model {
    constructor(self) {
        super(self)
        this.Purchase = self.Purchase
    }
}

class OutgoingStock extends Model {
    constructor(self) {
        super(self)
        this.OrderProduct = self.OrderProduct
    }
}

class Order extends Model  {
    constructor(self) {
        super(self)
        this.Customer = self.Customer
    }
}

class OrderItem extends Model  {
    constructor(self) {
        super(self)
        this.Order = self.Order
        this.Product = self.Product
    }
}


class OrderService extends Model  {
    constructor(self) {
        super(self)
        this.customer = self.customer
    }
}

class ServiceItem extends Model {
    constructor(self) {
        super(self)
    }
}

class Project extends Model {
    constructor(self) {
        super(self)
        this.Owner = self.Owner
        this.title = self.title
        this.description = self.description
        this.objective = self.objective
        this.start_date = self.start_date
        this.end_date = self.end_date
    }
}

class ProjectTask extends Model {
    constructor(self) {
        super(self)
        this.Project = self.Project
        this.title = self.title
        this.description = self.description
        this.start_date = self.start_date
        this.update_date = self.update_date
    }
    // TODO: convert milisseconds result to days result
    duration() {
        /***
         * Return subtraction of date
         * **/
        return Math.abs(this.end_date - this.start_date)
    }
}