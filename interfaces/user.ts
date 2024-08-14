interface User{
    id:string;
    name:string;
}

interface GraphQLResponse {
    data: {
      allUsers: User[];
    };
  }
  