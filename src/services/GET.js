import axios from 'axios';

import { backendConfig } from '~/configs';

export async function fetchCategories() {
  console.log('Fetch categories');
  const res = await axios({
    method: 'GET',
    url: backendConfig.url + '/categories',
  });
  return res;
}

export async function fetchItems() {
  console.log('Fetch items');
  const res = await axios({
    method: 'GET',
    url: backendConfig.url + '/items',
  });
  return res;
}
