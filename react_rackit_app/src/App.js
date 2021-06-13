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

import {
	Admin,
	Resource,
	ListGuesser,
	EditGuesser,
	Edit,
	ShowGuesser,
} from "react-admin";
import lb4Provider from "react-admin-lb4";
import {
	InfoProdutoCreate,
	InfoProdutoEdit,
	InfoProdutoList,
} from "./Infoprodutos";
import { ListaProdutoEdit, ListaProdutosList } from "./listaprodutosList";
import { ProdutoEdit, ProdutoList, ProdutoCreate } from "./produtos";
import {
	UtilizadoreCreate,
	UtilizadoreEdit,
	UtilizadoreList,
} from "./utilizadoresList";
import PersonIcon from "@material-ui/icons/Person";
import ListIcon from "@material-ui/icons/List";
import CategoryIcon from "@material-ui/icons/Category";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import InfoIcon from "@material-ui/icons/Info";
import StorageIcon from "@material-ui/icons/Storage";
import { Teste } from "./teste";
import {
	ProdutosCategoriaEdit,
	ProdutosCategoriaList,
} from "./produtoscategorias";
import Dashboard from "./Dashboard";
const dataProvider = lb4Provider("http://localhost:3000");
const App = () => (
	<Admin dashboard={Dashboard} dataProvider={dataProvider}>
		<Resource
			icon={PersonIcon}
			name="utilizadores"
			list={UtilizadoreList}
			edit={UtilizadoreEdit}
			create={UtilizadoreCreate}
		/>
		<Resource
			icon={ShoppingBasketIcon}
			name="lista-produtos"
			list={ListaProdutosList}
			edit={ListaProdutoEdit}
		/>

		<Resource
			icon={ListIcon}
			name="produtos"
			list={ProdutoList}
			edit={ProdutoEdit}
			create={ProdutoCreate}
		/>
		<Resource name="categorias" list={ListGuesser} icon={CategoryIcon} />
		<Resource
			icon={InfoIcon}
			name="info-produtos"
			list={InfoProdutoList}
			edit={InfoProdutoEdit}
			create={InfoProdutoCreate}
		/>
		<Resource name="armazems" list={ListGuesser} icon={StorageIcon} />
		<Resource
			name="produtos-categorias"
			list={ProdutosCategoriaList}
			edit={ProdutosCategoriaEdit}
		/>
	</Admin>
);
export default App;
