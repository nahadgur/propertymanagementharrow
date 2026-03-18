// data/locations.ts
export const LOCATIONS: Record<string, string[]> = {
  "Central Harrow": ["Harrow on the Hill","Harrow Town Centre","Greenhill","Roxeth","College Road","St Anns Road","Wealdstone","Kenton Road"],
  "North Harrow & Pinner": ["North Harrow","Pinner","Hatch End","Eastcote","Pinner Green","Rayners Lane","West Harrow","Headstone"],
  "South Harrow & Rayners Lane": ["South Harrow","Rayners Lane","Alexandra Avenue","Northolt","Sudbury","Roxbourne","Yeading","Grange Park"],
  "Stanmore & Edgware": ["Stanmore","Edgware","Canons Park","Queensbury","Little Stanmore","Belmont","Burnt Oak","Mill Hill"],
  "Kenton & Preston": ["Kenton","Preston","Wembley","Kingsbury","Fryent","Barn Hill","North Wembley","South Kenton"],
  "Surrounding Areas": ["Ruislip","Ruislip Manor","Ickenham","Hillingdon","Uxbridge","Northwood","Carpenders Park","Bushey"]
};

export function getCityBySlug(slug: string): string | undefined {
  const all = Object.values(LOCATIONS).flat();
  return all.find(city => toSlug(city) === slug);
}

export function toSlug(city: string): string {
  return city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
