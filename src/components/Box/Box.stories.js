import React from 'react';
import { Box } from './index';

export default {
  title: 'Box',
  component: Box,
};

export const boxdetail = () => (
  <Box
    heading="Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla ac lacinia ex, vitae
scelerisque nisl. Sed ac elit "
    detail="Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla ac lacinia ex, vitae
scelerisque nisl. Sed ac velit sit amet
odio rutrum dignissim sed ac felis.
"
  />
);

export const box = () => (
  <Box
    heading="Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla ac lacinia ex, vitae
scelerisque nisl. Sed ac elit "
  />
);

// export const Success = () => <Button variant="success">Success</Button>;
// export const Danger = () => <Button variant="danger">Danger</Button>;
