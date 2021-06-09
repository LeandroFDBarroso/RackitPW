// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import lb4Provider from "react-admin-lb4";
import { ListaProdutoEdit, ListaProdutosList } from "./listaprodutosList";
import { ProdutoEdit, ProdutoList } from "./produtos";
import {
	UtilizadoreCreate,
	UtilizadoreEdit,
	UtilizadoreList,
} from "./utilizadoresList";
const dataProvider = lb4Provider("http://localhost:3000");
const App = () => (
	<Admin dataProvider={dataProvider}>
		<Resource
			name="utilizadores"
			list={UtilizadoreList}
			edit={UtilizadoreEdit}
			create={UtilizadoreCreate}
		/>
		<Resource
			name="lista-produtos"
			list={ListaProdutosList}
			edit={ListaProdutoEdit}
		/>

		<Resource name="produtos" list={ProdutoList} edit={ProdutoEdit} />
		<Resource name="categorias" list={ListGuesser} />
		<Resource name="info-produtos" list={ListGuesser} />
	</Admin>
);
export default App;
