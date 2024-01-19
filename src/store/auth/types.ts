export type TypeAuthState = {
  user: TypeUser | null;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string | null;
};

export type TypeUser = {
  id: string;
  email: string;
  fullName: string;
};
