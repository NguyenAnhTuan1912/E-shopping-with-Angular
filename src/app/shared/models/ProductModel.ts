// export default interface Product {
//   id: string;
//   name: string;
//   category: string;
//   price: number;
//   isDiscount: boolean;
//   discountPercentInDecimal: number;
//   productStatus: string;
// }

export default class ProductModel {
  id: string;
  name: string;
  category: string;
  price: number;
  isDiscount: boolean;
  discountPercentInDecimal: number;
  productStatus: string;

  constructor({
    id = '',
    name = '',
    category = '',
    price = 0,
    isDiscount = false,
    discountPercentInDecimal = 0,
    productStatus = 'new',
  } = {}) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.isDiscount = isDiscount;
    this.discountPercentInDecimal = discountPercentInDecimal;
    this.productStatus = productStatus;
  }
}
