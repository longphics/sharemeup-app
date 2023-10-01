import { createContext, useState } from 'react';

import { fetchPosts } from '~/services';

export const PostsContext = createContext({
  posts: [],
  refresh: () => {
    return new Promise();
  },
});

export default function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);

  async function refresh() {
    try {
      const res = await fetchPosts();
      if (res.status === 200) {
        setPosts(res.data);
      } else {
        console.log(res.status);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const value = {
    posts,
    refresh,
  };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
}
