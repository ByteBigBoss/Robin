interface User{
    id:string;
    name:string;
    email:string;
}

interface GetUsersResponse {
    data: {
      allUsers: User[];
    };
}


interface AddUserResponse {
  data: {
    addUser: {
      msg: string;
    };
  };
}

interface LoginProps{
  email:string;
  password:string;
}

interface LoginResponse {
  data: {
    login: {
      msg: string;
      err: string | null;
      status: number;
      user: {
        id: string;
        name: string;
        email: string;
        password: string;
      } | null;
    };
  };
}