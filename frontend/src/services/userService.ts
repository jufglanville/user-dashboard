import API_CONFIG from './apiConfig';

import { TUser } from '../types';

export const createUser = async (user: TUser) => {
  try {
    const response = await fetch(API_CONFIG.users, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  } catch (err) {
    throw err;
  }
};

export const updateUser = async (user: TUser) => {
  try {
    const response = await fetch(`${API_CONFIG.users}/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  } catch (err) {
    throw err;
  }
};

export const getUser = async (id: string) => {
  try {
    const response = await fetch(`${API_CONFIG.users}/${id}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  } catch (err) {
    throw err;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const response = await fetch(`${API_CONFIG.users}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  } catch (err) {
    throw err;
  }
};
