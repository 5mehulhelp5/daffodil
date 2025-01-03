/**
 * Rescales a rating value from it's max rating
 * to a scale of 5.
 */
export const rescaleRatingOutOf5 = (rating: number | null, max: number) => (((rating ?? 0)/max) * 5).toPrecision(2);
