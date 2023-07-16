export function getRatingClass(rating: number) {
  if (rating > 7) {
    return 'goodRating';
  }
  return rating < 5 ? 'badRating' : 'usualRating';
}
