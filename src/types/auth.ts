export type TypeAuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    fullName: string;
  };
};

export type TypeRegisterPayload = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
};

export type TypeLoginPayload = {
  email: string;
  password: string;
};
