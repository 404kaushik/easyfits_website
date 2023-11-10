import { url } from "./url";
import Cookies from "js-cookie";

const Token = async () =>{

  try {

      const url_refresh = url.auth + "refreshToken";

      const response = await fetch(url_refresh, {
        method: "GET",
        credentials: "include",
      }).then(response => response.json()).then(res =>{
        return res;
      });

      if (!response.statusCode) {
        const newToken =  response;
        return newToken.accessToken;
      } else {
        throw new Error('Failed to refresh token');
      }
   } catch (error) {
    console.error("Error in tokens:", error);
    throw error;
   }
}

export default Token;
