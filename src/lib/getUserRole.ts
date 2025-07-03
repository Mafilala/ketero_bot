import { User } from "../types/types";
import 'dotenv/config';
import axios from 'axios'
async function getUserRole(telegramId: number): Promise<'admin' | 'shopkeeper' | ''> {
  try {
    const base_url = process.env.BACKEND_BASE_URL
    const res = await axios.get(`${base_url}/user/${telegramId}`);
    const {data} = res
    return data.role;
  } catch (err) {
    console.error('Role fetch error:', err);
    return ''; 
  }
}

export default getUserRole
