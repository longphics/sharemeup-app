import axios from 'axios';

import { backendConfig } from '~/configs';

export async function updateCart(cartElements) {
  console.log('Update cart');
  const res = await axios({
    method: 'POST',
    url: backendConfig.url + '/users/cart',
    data: {
      cartElements,
    },
  });
  return res;
}

export async function createItem(data) {
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
      'content-type': 'multipart/form-data',
    },
  });

  return res;
}

export async function createOrder(storeId, address, phone) {
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
  });

  return res;
}
