import { UsersResponse } from "../../../core/models/users-response";

export interface userState extends UsersResponse{
    loading: boolean;
    error : string | null;
}

export const intialUserState: userState = {
  users: [],
  total: 0,
  limit: 10,
  skip: 0,
  loading: false,
  error: null
}