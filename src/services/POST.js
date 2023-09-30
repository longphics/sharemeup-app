import axios from 'axios';

import { backendConfig } from '~/configs';

export async function updateCart(token, itemId, amount) {
  console.log('Update cart');
  const res = await axios({
    method: 'POST',
    url: backendConfig.url + '/users/cart',
    data: {
      itemId,
      amount,
    },
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return res;
}

export async function createItem(token, data) {
  console.log('Create item');

  const form = new FormData();

  for (const key in data) {
    if (key !== 'imageUri') {
      form.append(key, data[key]);
    }
  }

  form.append('file', {
    uri: data.imageUri,
    type: 'image/jpg',
    name: 'image.jpg',
  });

  const res = await axios({
    method: 'POST',
    url: backendConfig.url + '/items/create',
    data: form,
    headers: {
      'Authorization': 'Bearer ' + token,
      'content-type': 'multipart/form-data',
    },
  });

  return res;
}

export async function createOrder(token, storeId, address, phone) {
  console.log('Create order');

  const data = {
    storeId,
    address,
    phone,
  };

  const res = await axios({
    method: 'POST',
    url: backendConfig.url + '/orders/create',
    data,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  return res;
}

export async function signin(email, password) {
  console.log('Sign in');

  const data = {
    email,
    password,
  };

  const res = await axios({
    method: 'POST',
    url: backendConfig.url + '/auth/signin',
    data,
  });

  return res;
}

export async function changeOrderStatus(orderId, status) {
  console.log('Change order status');

  const data = {
    orderId,
    status,
  };

  const res = await axios({
    method: 'POST',
    url: backendConfig.url + '/orders/status',
    data,
  });

  return res;
}
