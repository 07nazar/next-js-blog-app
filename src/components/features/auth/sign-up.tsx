import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { useYupValidationResolver } from '@/hooks/use-yup-validation-resolver';
import { authApi } from '@/store/auth/api';
import { clearErrors } from '@/store/auth/auth';
import { TypeRegisterPayload } from '@/types/auth';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import { object, string } from 'yup';

const signUpSchema = object({
  firstName: string().min(5, 'Min length is 5').max(20, 'Max length is 20'),
  lastName: string().min(5, 'Min length is 5').max(20, 'Max length is 20'),
  email: string()
    .required('Email is required')
    .email('Enter valid email')
    .min(3, 'Min length 3')
    .max(20, 'Max length 20'),
  password: string()
    .required('Password is required')
    .min(6, 'Min length 6')
    .max(20, 'Max length 20'),
});

export const SignUpForm = () => {
  const { errorMessage, isError, isLoading, user } = useAppSelector(
    state => state.auth
  );
  const resolver = useYupValidationResolver(signUpSchema);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TypeRegisterPayload>({
    resolver,
  });

  const { toast } = useToast();
  const { push } = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      push('/');
    }
  }, [user, push]);

  useEffect(() => {
    if (isError) {
      toast({
        title: 'Ooops... Some error',
        description: errorMessage,
        variant: 'destructive',
      });
      dispatch(clearErrors());
    }
  }, [toast, isError, errorMessage, dispatch]);

  const onSubmit: SubmitHandler<TypeRegisterPayload> = data => {
    dispatch(authApi.register(data));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='mx-auto my-10 flex max-w-[500px] flex-col gap-5 border border-border p-5'>
      <div className='grid w-full items-center gap-3'>
        <Label htmlFor='firstName'>Firstname</Label>
        <Input
          type='text'
          id='firstName'
          placeholder='Enter a Firstname'
          {...register('firstName')}
        />
      </div>
      {errors.firstName && (
        <span className='text-red-500'>{errors.firstName.message}</span>
      )}
      <div className='grid w-full items-center gap-3'>
        <Label htmlFor='lastName'>Lastname</Label>
        <Input
          type='text'
          id='lastName'
          placeholder='Enter a lastname'
          {...register('lastName')}
        />
      </div>
      {errors.lastName && (
        <span className='text-red-500'>{errors.lastName.message}</span>
      )}
      <div className='grid w-full items-center gap-3'>
        <Label htmlFor='email'>Email</Label>
        <Input
          type='email'
          id='email'
          placeholder='Enter a email'
          {...register('email')}
        />
      </div>
      {errors.email && (
        <span className='text-red-500'>{errors.email.message}</span>
      )}
      <div className='grid w-full items-center gap-3'>
        <Label htmlFor='password'>Password</Label>
        <Input
          autoComplete='on'
          type='password'
          id='password'
          placeholder='Enter a password'
          {...register('password')}
        />
      </div>
      {errors.password && (
        <span className='text-red-500'>{errors.password.message}</span>
      )}

      <Button disabled={isLoading} type='submit' variant={'outline'}>
        {isLoading ? <Loader2 className='animate-spin' /> : 'Sign up'}
      </Button>
    </form>
  );
};
