class Cart {
  constructor() {
    this.items = []
  }
  addToCart(anItem) {
    this.items.push(anItem)
  }
  removeFromCart(anItem) {
    this.items = this.items.filter((i) => i !== anItem)
  }
}

module.exports = { Cart }
