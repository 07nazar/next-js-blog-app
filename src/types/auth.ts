export type TypeAuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    fullName: string;
  };
};

export type TypeRegisterPayload = TypeLoginPayload & {
  firstName: string;
  lastName: string;
};

export type TypeLoginPayload = {
  email: string;
  password: string;
};
