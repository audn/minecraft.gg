import { ReactNode } from 'react';
import { Button as IButton } from '../../lib/interfaces';
import Controller from './components/ButtonController';
import { ButtonWrapper } from './components/ButtonWrapper';
import PrimaryButton from './Primary';

export const Button = {
  Wrapper: ({ ...props }: { className?: string; children: ReactNode }) => {
    return <ButtonWrapper {...props} />;
  },
  Primary: ({ ...props }: IButton.Base) => {
    return (
      <Controller {...props}>
        <PrimaryButton {...props} />
      </Controller>
    );
  },
};
