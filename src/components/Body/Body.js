import * as React from 'react';
import Container from '@mui/material/Container';

export default function Body(props) {
  return (
    <Container>
      {props.children}
    </Container >
  )
}