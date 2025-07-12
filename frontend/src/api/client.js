import axios from "axios";

export async function getClient(id = 1) {
  const res = await axios.get(`https://daroomokamel.ir/whmcs_api_wraper/public/api/whmcs/client/${id}`);
  return res.data;
}
