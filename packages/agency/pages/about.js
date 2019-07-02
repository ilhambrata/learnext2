import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import CompButton from '@lernext2/palette/dist';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Head from '../components/Head';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Material-UI
      </MuiLink>
      {' team.'}
    </Typography>
  );
}

export default function About() {
  const getColor = (color) => {
    console.log(color);
  };
  return (
    <Container maxWidth="sm">
      <Head title="About" description="Make it short and sweet" />
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Agency Page
        </Typography>
        <CompButton onClick={getColor}>Foobar</CompButton>
        <Link href="/">Go to the main page</Link>
        <ProTip />
        <MadeWithLove />
      </Box>
    </Container>
  );
}

About.getInitialProps = () => ({
  namespacesRequired: ['common']
});
