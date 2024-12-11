import { Container } from '@src/components/Container';
import { PrimaryTable } from '@src/components/PrimaryTable';
import React from 'react';
import { columns, tableValues } from './Courses.constants';
import * as Styled from './Courses.styled';
import { SecondaryButton } from '@src/components/SecondaryButton';

export const Courses = () => {
  return (
    <Container>
      <PrimaryTable data={tableValues} columns={columns} />
      <Styled.Footer>
        <SecondaryButton title='+ Добавить курс' />
      </Styled.Footer>
    </Container>
  )
}