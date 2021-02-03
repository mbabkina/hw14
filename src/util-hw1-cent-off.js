export default function totalCentOffPrice(priceApple, priceOrange, pricePear) {
  const result =
    Math.floor(priceApple) + Math.floor(priceOrange) + Math.floor(pricePear);

  return `The total amount (cents cut off) is ${result}.`;
}
