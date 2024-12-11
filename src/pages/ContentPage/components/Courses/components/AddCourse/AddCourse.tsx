import React from 'react';
import { PrimaryTable } from '@src/components/PrimaryTable';
import { columns, tableValues } from './AddCourse.constants';
import { Container } from '@src/components/Container';
import { SecondaryButton } from '@src/components/SecondaryButton';
import * as Styled from './AddCourse.styled';
import { TextInput } from '@src/components/TextInput';

export const AddCourse = () => {
  return (
    <Container>
      <Styled.Form>
        <Styled.FormRow>
          <Styled.FormLabel>Название курса:</Styled.FormLabel>
          <TextInput id='course' name='course' placeholder='Введите название курса' />
        </Styled.FormRow>

        <Styled.FormRow>
          <Styled.FormLabel>Всего тем:</Styled.FormLabel>
          <TextInput id='theme' name='theme' placeholder='Введите количество тем' />
        </Styled.FormRow>
      </Styled.Form>
      <PrimaryTable data={tableValues} columns={columns} />
      <Styled.ButtonContainer>
        <SecondaryButton title='+ Добавить тему' />
      </Styled.ButtonContainer>
      <Styled.Materials>
        <Styled.Text>Материалы курса:</Styled.Text>
        <Styled.TextUnderline>добавить ссылку</Styled.TextUnderline>
      </Styled.Materials>
      <Styled.Footer>
        <SecondaryButton title='Отмена' />
        <SecondaryButton title='Сохранить' />
      </Styled.Footer>
    </Container>
  );
};
