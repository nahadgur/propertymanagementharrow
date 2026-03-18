// data/nearby-areas.ts
export const NEARBY_AREAS: Record<string, string[]> = {
  "harrow-on-the-hill": ["Wealdstone","Kenton","North Harrow","South Harrow","Rayners Lane"],
  "pinner": ["North Harrow","Hatch End","Eastcote","Rayners Lane","Harrow on the Hill"],
  "stanmore": ["Edgware","Canons Park","Queensbury","Kenton","Belmont"],
  "kenton": ["Harrow on the Hill","Preston","Wembley","Queensbury","North Wembley"],
  "wealdstone": ["Harrow on the Hill","Kenton","North Harrow","Headstone","Greenhill"],
  "rayners-lane": ["South Harrow","Pinner","North Harrow","Eastcote","Alexandra Avenue"],
  "north-harrow": ["Harrow on the Hill","Pinner","West Harrow","Headstone","Rayners Lane"],
  "south-harrow": ["Rayners Lane","Northolt","Alexandra Avenue","Roxbourne","Harrow on the Hill"],
  "edgware": ["Stanmore","Canons Park","Burnt Oak","Mill Hill","Queensbury"],
  "wembley": ["Kenton","Preston","Kingsbury","North Wembley","Barn Hill"]
};

export function getNearbyAreas(slug: string): string[] {
  return NEARBY_AREAS[slug] || [];
}
