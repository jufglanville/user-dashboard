import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useNavigate } from 'react-router-dom';
import { TUser } from '../types';
import { createUser, updateUser, getUser } from '../services/userService';
import {
  ScButton,
  ScContainer,
  ScInput,
  ScForm,
  ScSubHeading,
} from '../styled/Styled';

const schema = z.object({
  id: z.string(),
  firstname: z.string().nonempty(),
  lastname: z.string().nonempty(),
  email: z.string().email(),
  phone: z.string().nonempty(),
  location: z.string().nonempty(),
  hobby: z.string().nonempty(),
});

const User = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const newUser = id ? false : true;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUser>({
    resolver: zodResolver(schema),
    defaultValues: !newUser
      ? async () => {
          try {
            const user = await getUser(id as string);
            return user;
          } catch (err) {
            console.error(err);
          }
        }
      : {
          id: Math.random().toString(36).substr(2, 9),
        },
  });

  const onSubmit = async (data: TUser) => {
    try {
      newUser ? await createUser(data) : await updateUser(data);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ScContainer>
      <ScForm onSubmit={handleSubmit(onSubmit)}>
        {newUser ? (
          <ScSubHeading>Create User</ScSubHeading>
        ) : (
          <ScSubHeading>Edit User</ScSubHeading>
        )}
        <div>
          <label htmlFor="firstname">First Name</label>
          <ScInput type="text" id="firstname" {...register('firstname')} />
          {errors.firstname && <p>{errors.firstname.message}</p>}
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <ScInput type="text" id="lastname" {...register('lastname')} />
          {errors.lastname && <p>{errors.lastname.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <ScInput type="text" id="email" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <ScInput type="text" id="phone" {...register('phone')} />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <ScInput type="text" id="location" {...register('location')} />
          {errors.location && <p>{errors.location.message}</p>}
        </div>
        <div>
          <label htmlFor="hobby">Hobby</label>
          <ScInput type="text" id="hobby" {...register('hobby')} />
          {errors.hobby && <p>{errors.hobby.message}</p>}
        </div>
        <ScButton type="primary">Submit</ScButton>
      </ScForm>
    </ScContainer>
  );
};

export default User;
