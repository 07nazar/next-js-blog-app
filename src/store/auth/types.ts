export type TypeAuthState = {
  user: TypeUser | null;
  isLoading: boolean;
  isError: boolean;
};

export type TypeUser = {
  id: string;
  email: string;
  fullName: string;
};
