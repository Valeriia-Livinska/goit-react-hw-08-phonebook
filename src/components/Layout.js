import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Box } from './Box';

export const Layout = () => {
  return (
    <Box
     flexDirection="column"
      alignItems="center"
      mt={5}
      mb={0}
      mx="auto"
      maxWidth={700}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
