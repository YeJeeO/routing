import { ConnectedLink } from 'react-router5';

export default () =>
  <nav>
    <ConnectedLink routeName="home">Home</ConnectedLink>
    <ConnectedLink routeName="table">Table with users</ConnectedLink>
  </nav>;