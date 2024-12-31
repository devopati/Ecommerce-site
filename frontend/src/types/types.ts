export interface ProductType {
  _id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  cover_image: string;
  name: string;
  slug: string;
  qty: number;
  rating: {
    rate: number;
    count: number;
  };
  createdAt: string;
}
