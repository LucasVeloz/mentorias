import React from 'react';

import { RoundImage } from '../../atoms/RoundImage';

import { CardTitle, Container } from './styles';

export interface CardProps {
  image: string;
  title: string;
}


export const Card = ({ image, title }: CardProps) => {
  return (
    <Container>
      <RoundImage source={{ uri: image }} />
      <CardTitle>{title}</CardTitle>
    </Container>
  )
}
