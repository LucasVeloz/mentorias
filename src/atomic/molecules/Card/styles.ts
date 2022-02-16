import styled from 'styled-components/native';

import { Title } from '../../atoms/Title';

export const Container = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    height: 0,
    width: 0,
  },
  shadowRadius: 10,
  shadowOpacity: 0.1,
  backgroundColor: 'white'
})`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border-radius: 8px;
`;


export const CardTitle = styled(Title)`
  flex: 1;
  margin-left: 10px;
`;