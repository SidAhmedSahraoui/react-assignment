export interface AuthState {
  isAuth: boolean;
  token: string;
  loading: boolean;
  error: string;
}

export interface TodoState {
  todos: string[];
}
