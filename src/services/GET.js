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

export async function fetchStores() {
  console.log('Fetch stores');
  const res = await axios({
    method: 'GET',
    url: backendConfig.url + '/stores',
  });
  return res;
}

export async function fetchUsers() {
  console.log('Fetch users');
  const res = await axios({
    method: 'GET',
    // headers: {
    //   Authorization:
    //     'Bearer ' +
    //     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbG4xZ3o2NzAwMDAwb3Zqc3hha21kNGExIiwiZW1haWwiOiJsb25ncGhpZEBnbWFpbC5jb20iLCJpYXQiOjE2OTU4MDMzMzksImV4cCI6MTY5NTg4OTczOX0.ETZvL7rGvROeuA9NGBPjPDG3Hfqsb08SaQl5IONoqE0',
    // },
    url: backendConfig.url + '/users',
  });
  return res;
}

export async function fetchOrders() {
  console.log('Fetch orders');
  const res = await axios({
    method: 'GET',
    url: backendConfig.url + '/orders',
  });
  return res;
}

export async function fetchCart() {
  console.log('Fetch cart');
  const res = await axios({
    method: 'GET',
    url: backendConfig.url + '/users/cart',
  });
  return res;
}

export async function fetchMe() {
  console.log('Fetch me');
  const res = await axios({
    method: 'GET',
    url: backendConfig.url + '/users/me',
  });
  return res;
}
