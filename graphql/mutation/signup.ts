import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../endpoints";

const mutation = `
mutation($userRegisterDTO: UserRegisterDTO!){
addUser(userRegisterDTO: $userRegisterDTO){
  msg
}
}
`

const variables  = {
    "userRegisterDTO": {
        "name": "test6",
        "email": "test6@gmail.com",
        "password": "test6124124"
    }
}

export const SIGN_UP = async () => {

    try {

        const response: AxiosResponse<AddUserResponse> = await axios.post(
            BASE_URL,
            {
                query: mutation,
                variables 
            }
        );

        const user = response.data.data;
        console.log(user);

    } catch (error) {
        console.error('SIGN_UP FAILED:', error);
    }

};