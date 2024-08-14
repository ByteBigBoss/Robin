import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../endpoints";

const GET_ALL_USERS = `
query{
  allUsers{
    id
    name
  }
}
`;

export const GET_USERS = async () => {

    try {
        const response: AxiosResponse<GetUsersResponse> = await axios.post(
          BASE_URL,
          {
            query: GET_ALL_USERS,
          },
        );
    
        const users = response.data.data.allUsers;
        console.log(users);
    } catch (error) {
        console.error('Error fetching users:');
    }

};