/** Royal Lakes Golf & Country Club — Flowery Branch, GA. See https://royallakesgolfcc.com/ */

export const ROYAL_LAKES = {
  name: "Royal Lakes Golf & Country Club",
  shortName: "Royal Lakes",
  city: "Flowery Branch",
  state: "GA",
  region: "South Hall County",
  url: "https://royallakesgolfcc.com/",
  /** Hotlink-friendly assets from their site (same host as public pages). */
  images: {
    /** Course / fairway — hero “Bogeys” side */
    courseFairway:
      "https://royallakesgolfcc.com/wp-content/uploads/2021/03/royal_lake_golf-35-of-59_0.webp",
    /** Club / second hero panel (“Beers” — clubhouse & social atmosphere) */
    clubAtmosphere:
      "https://royallakesgolfcc.com/wp-content/uploads/2021/03/royalLakes2-min-scaled.webp",
    /** Wide shot for content sections */
    courseWide:
      "https://royallakesgolfcc.com/wp-content/uploads/2021/03/royallakes1-min-scaled.webp",
    /** Lakes & landscape */
    lakes:
      "https://royallakesgolfcc.com/wp-content/uploads/2021/03/royalLakes3.webp",
  },
} as const;

export const venueBlurb = {
  about:
    "Royal Lakes is a semi-private country club in south Hall County. The property covers about 150 acres with roughly nineteen acres of lakes, plush bermuda, rolling greens, and a Scottish-inspired layout that works for a wide range of skill levels.",
  dining:
    "The club offers several dining options—terrace seating with waterfront views, a formal dining room, and a sports bar—so the day can end as well as it starts.",
} as const;
