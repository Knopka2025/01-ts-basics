console.log('\x1b[32mЗавдання 8. HTTP-запити\x1b[0m');


import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});