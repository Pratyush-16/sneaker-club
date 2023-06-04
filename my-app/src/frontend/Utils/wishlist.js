import { Wishlist } from "../Pages/Wishlist/Wishlist";

export const isInWishlist = (productId, Wishlist) => {
  return Wishlist.find(({ _id }) => _id === productId);
};
