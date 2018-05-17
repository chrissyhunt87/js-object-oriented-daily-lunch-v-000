// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;
class Neighborhood{
  constructor(name){
    this.name = name;
    this.id = ++neighborhoodId;
    
    store.neighborhoods.push(this);
  }
  
  deliveries(){
    return store.deliveries.filter(neighborhood => {
      return neighborhood
    })
  }
}

let customerId = 0;
class Customer{
  constructor(name, neighborhoodId){
    this.name = name;
    this.neighborhoodId = neighborhoodId;
    this.id = ++customerId;
    
    store.customers.push(this);
  }
}

let mealId = 0;
class Meal{
  constructor(title, price){
    this.title = title;
    this.price = price;
    this.id = ++mealId;
    
    store.meals.push(this);
  }
}

let deliveryId = 0;
class Delivery{
  constructor(mealId, neighborhoodId, customerId){
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;
    this.id = ++deliveryId;
    
    store.deliveries.push(this);
  }
}