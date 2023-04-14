import { useRoute } from 'react-router5';

import Nav from '../components/Nav.jsx';
import Table from './Table.jsx';


function Main() {
  const {route} = useRoute();
  console.log('Main',route);
  switch (route?.name) {
    case 'home':
      return <h1>Можно выбрать таблицу с пользователями в меню, расположенном выше. Приятного вечера!</h1>;
    case 'table':
      return <Table/>;
      default:
      return <h1>Not Found {route.name}</h1>;
  }
}

export default function App() {
  return (
    <>
      <Nav />
      <main><Main /></main>
    </>
  );
}