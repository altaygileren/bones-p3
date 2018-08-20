const BASE_URL = 'http://localhost:3001';

export function saveUser(user) {
    const opts = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return fetch(`${BASE_URL}/auth/register`, opts)
      .then(resp => resp.json());
  }