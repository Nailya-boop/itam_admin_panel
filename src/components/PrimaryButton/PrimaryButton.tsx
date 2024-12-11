import React, { ButtonHTMLAttributes } from 'react';
import * as Styled from './PrimaryButton.styled';

type PrimaryButtonProps = {
  title: string;
  isFullWidth?: boolean;
};

export const PrimaryButton = ({ title, isFullWidth }: ButtonHTMLAttributes<HTMLButtonElement> & PrimaryButtonProps) => {
  return (
    <Styled.Button $isFullWidth={!!isFullWidth}>{title}</Styled.Button>
  );
};
