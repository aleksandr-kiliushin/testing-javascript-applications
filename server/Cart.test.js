const { Cart } = require("./Cart")

test("The addToCart function can add an item to the cart.", () => {
  const aCart = new Cart()
  aCart.addToCart("cheesecake")
  expect(aCart.items).toEqual(["cheesecake"])
})

test("The addToCart function can remove an item from the cart.", () => {
  const aCart = new Cart()
  aCart.addToCart("cheesecake")
  aCart.removeFromCart("cheesecake")
  expect(aCart.items).toEqual([])
})
