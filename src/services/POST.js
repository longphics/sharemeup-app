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

export async function createOrder(token, storeId) {
  console.log('Create order');

  const data = {
    storeId,
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

export async function editProfie(token, name, phone, address) {
  console.log('Edit profie');

  const data = {
    name,
    phone,
    address,
  };

  const res = await axios({
    method: 'POST',
    url: backendConfig.url + '/users/edit',
    data,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  return res;
}

export async function editStore(token, name, phone, address) {
  console.log('Edit store');

  const data = {
    name,
    phone,
    address,
  };

  const res = await axios({
    method: 'POST',
    url: backendConfig.url + '/stores/edit',
    data,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  return res;
}

export async function register(email, name, phone, address, password) {
  console.log('Register');

  const data = {
    email,
    name,
    phone,
    address,
    password,
  };

  const res = await axios({
    method: 'POST',
    url: backendConfig.url + '/auth/signup',
    data,
  });

  return res;
}

export async function createGift(data) {
  console.log('Create gift');

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
    url: backendConfig.url + '/gifts/create',
    data: form,
    headers: {
      'content-type': 'multipart/form-data',
    },
  });

  return res;
}

export async function changeGiftStatus(giftId, status) {
  console.log('Change gift status');

  const data = {
    giftId,
    status,
  };

  const res = await axios({
    method: 'POST',
    url: backendConfig.url + '/gifts/status',
    data,
  });

  return res;
}

export async function createPost(data) {
  console.log('Create post');

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
    url: backendConfig.url + '/posts/create',
    data: form,
    headers: {
      'content-type': 'multipart/form-data',
    },
  });

  return res;
}
