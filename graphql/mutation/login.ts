import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../endpoints";

const mutation = `
                  mutation($email: String!, $password: String!) {
                    login(email: $email, password: $password) {
                      msg
                      err
                      status
                      user {
                        id
                        name
                        email
                        password
                      }
                    }
                }
`;


export const LOGIN = async ({ email, password }: LoginProps): Promise<string> => {

    try {

        console.log(email, password);

        const response: AxiosResponse<LoginResponse> = await axios.post(
            BASE_URL,
            {
                query: mutation,
                variables: {
                    email,
                    password,
                }
            }
        );

        const user = response.data.data.login;
        console.log(user);

        return "success";

    } catch (error) {
        console.error('LOGIN FAILED:', error);

        return "error";
    }
};