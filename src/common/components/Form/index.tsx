import { ReactNode, SyntheticEvent } from 'react';
import { Form as IForm } from '../../lib/interfaces';
import Input from './Input';
import Layout from './Layout';

export const Form = {
  Layout: ({
    ...props
  }: {
    onSubmit: (event: SyntheticEvent) => void;
    className?: string;
    children: ReactNode;
  }) => {
    return <Layout {...props} />;
  },

  Input: ({ ...props }: IForm.Input) => {
    return <Input {...props} />;
  },
};
