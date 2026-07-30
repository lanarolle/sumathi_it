export type Article = {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  body: string[];
  seoTitle: string;
  seoDescription: string;
};

export type GalleryItem = {
  title: string;
  category: string;
  image: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};
