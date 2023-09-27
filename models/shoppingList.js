class ShoppingList {
  static items = {};
  static newArray = [];
  //Methods to create
  static users() {
    return Object.keys(this.items);
  }

  // Return the list of items for a given user
  static list(name) {
    //Your code here:
    if (this.items[name]) {
      console.log("ESTOOOOO", this.items[name]);
      return this.items[name];
    } 
      return [];
  
  }

  // Add an item to the list for a given user
  static add(name, items) {
    let obj = {
      content: items,
      bought: false,
    };

    if (this.items[name]) {
      this.items[name].push(obj);
    } else {
      this.items[name] = [obj];
    }

    return obj;
  }

  // Update an item from the list of a given user by index
  static update(name, index, item) {
    //Your code here
    this.items[name][index].content = item;
    return this.items[name][index];
  }

  // Mark an item as bought for a given user by index
  static bought(name, index) {
    this.items[name][index].bought = true;
  }

  // Remove an item from the list of a given user by index
  static remove(name, index) {
    return this.items[name].splice(index, 1);
  }

  // Reset the entire shopping list data
  static reset() {
    this.items = {};
    this.newArray = [];
  }
}

module.exports = ShoppingList;
