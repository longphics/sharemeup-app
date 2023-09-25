import { createContext, useState } from 'react';

import { fetchCategories } from '~/services';

export const CategoriesContext = createContext({
  categories: [],
  refresh: () => {},
});

export default function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);

  async function refresh() {
    try {
      const res = await fetchCategories();
      if (res.status === 200) {
        setCategories(res.data);
      } else {
        console.log(res.status);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const value = {
    categories,
    refresh,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}
