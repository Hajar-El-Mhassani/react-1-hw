// WishlistStatus.js
const WishListStatus = ({ count }) => {
  return count > 0 ? (
    <p>You have {count} planets in your wishlist</p>
  ) : (
    <p>No planets in wishlist</p>
  );
};

export default WishListStatus;
