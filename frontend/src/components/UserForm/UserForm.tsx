import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useNavigate } from 'react-router-dom';
import { TUser } from '../../types';
import { createUser, updateUser, getUser } from '../../services/userService';

import * as Sc from './styles';
import Button from '../Button/Button';

const schema = z.object({
  id: z.string(),
  firstname: z.string().nonempty(),
  lastname: z.string().nonempty(),
  email: z.string().email(),
  phone: z.string().nonempty(),
  location: z.string().nonempty(),
  hobby: z.string().nonempty(),
});

const UserForm = () => {
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
            return user[0];
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
    <Sc.Container>
      <Sc.Form onSubmit={handleSubmit(onSubmit)}>
        {newUser ? (
          <Sc.Heading>Create User</Sc.Heading>
        ) : (
          <Sc.Heading>Edit User</Sc.Heading>
        )}
        <div>
          <label htmlFor="firstname">First Name</label>
          <Sc.Input type="text" id="firstname" {...register('firstname')} />
          {errors.firstname && <p>{errors.firstname.message}</p>}
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <Sc.Input type="text" id="lastname" {...register('lastname')} />
          {errors.lastname && <p>{errors.lastname.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Sc.Input type="text" id="email" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <Sc.Input type="text" id="phone" {...register('phone')} />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <Sc.Input type="text" id="location" {...register('location')} />
          {errors.location && <p>{errors.location.message}</p>}
        </div>
        <div>
          <label htmlFor="hobby">Hobby</label>
          <Sc.Input type="text" id="hobby" {...register('hobby')} />
          {errors.hobby && <p>{errors.hobby.message}</p>}
        </div>
        <Button style="primary" type="submit">
          Submit
        </Button>
      </Sc.Form>
    </Sc.Container>
  );
};

export default UserForm;
