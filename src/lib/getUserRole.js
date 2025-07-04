import dotenv from 'dotenv';
dotenv.config();

export async function getUserRole(telegramId) {
  try {
    const url = `${process.env.BACKEND_BASE_URL}/user/${telegramId}`;
    const res = await fetch(url);
    if (!res.ok) {
      console.error('Fetch failed with status:', res.status);
      return '';
    }
    const data = await res.json();
    return data.role;
  } catch (err) {
    console.error('Role fetch error:', err);
    return '';
  }
}

