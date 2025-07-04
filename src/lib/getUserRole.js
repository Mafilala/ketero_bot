import axios from 'axios'
import dotenv from 'dotenv';
dotenv.config();

async function getUserRole(telegramId) {
  try {
    const url = `${process.env.BACKEND_BASE_URL}/user/${telegramId}`;
    const res = await axios.get(url);
    return res.data.role;
  } catch (err) {
    console.error('Role fetch error:', err);
    return '';
  }
}

module.exports = getUserRole;

