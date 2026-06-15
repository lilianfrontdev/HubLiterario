export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  reflections: number;
  rating: number;
  password: string;
  tags: string;
  description: string;
  chapter: string;
  "historical-context": string;
  "geographic-context": string;
  "cultural-context": string;
}

export interface Reflection {
  id: string;
  "book-title": string;
  name: string;
  grade: string;
  "chapter-tag": string;
  text: string;
  stars: number;
  date: string;
  likes: number;
}
