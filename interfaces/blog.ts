// export interface Blog {
//   id: number;
//   title: string;
//   content: string;
//   category: string;
//   userId: number;
// }

// export interface UserBlogsResponse {
//   data: Blog[];
// }

interface Blog {
  id: number;
  title: string;
  content: string;
  // Add other fields as needed
}

interface UserBlogsResponse {
  data: Blog[];
}
