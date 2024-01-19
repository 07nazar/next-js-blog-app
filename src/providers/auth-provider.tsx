import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { PropsWithChildren, useEffect } from 'react';
import Cookies from 'js-cookie';
import { authApi } from '@/store/auth/api';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { user } = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = Cookies.get('token');

    if (token && !user) {
      dispatch(authApi.getMe());
    }
  }, [user, dispatch]);

  return <>{children}</>;
};
