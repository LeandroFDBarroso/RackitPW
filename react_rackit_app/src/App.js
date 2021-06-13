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
import {
	ListaProdutoCreate,
	ListaProdutoEdit,
	ListaProdutosList,
} from "./listaprodutosList";
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
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import { Teste } from "./teste";

import {
	ProdutosCategoriaCreate,
	ProdutosCategoriaEdit,
	ProdutosCategoriaList,
} from "./produtoscategorias";
import { ArmazemCreate, ArmazemEdit, ArmazemList } from "./armazens";
import { CategoriaCreate, CategoriaEdit, CategoriaList } from "./categorias";
import {
	UtilizadoresListaProdutoCreate,
	UtilizadoresListaProdutoEdit,
	UtilizadoresListaProdutoList,
} from "./utilizadoresListaProdutos";
import { Dashboard } from "./dashboard";
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
			title="Lista de Produtos"
			icon={ShoppingBasketIcon}
			name="lista-produtos"
			list={ListaProdutosList}
			edit={ListaProdutoEdit}
			create={ListaProdutoCreate}
		/>
		<Resource
			icon={PeopleAltIcon}
			name="utilizadores-lista-produtos"
			list={UtilizadoresListaProdutoList}
			edit={UtilizadoresListaProdutoEdit}
			create={UtilizadoresListaProdutoCreate}
		/>
		<Resource
			icon={AllInboxIcon}
			name="produtos"
			list={ProdutoList}
			edit={ProdutoEdit}
			create={ProdutoCreate}
		/>
		<Resource
			icon={InfoIcon}
			name="info-produtos"
			list={InfoProdutoList}
			edit={InfoProdutoEdit}
			create={InfoProdutoCreate}
		/>
		<Resource
			name="categorias"
			list={CategoriaList}
			edit={CategoriaEdit}
			create={CategoriaCreate}
			icon={CategoryIcon}
		/>
		<Resource
			name="produtos-categorias"
			icon={StorageIcon}
			list={ProdutosCategoriaList}
			edit={ProdutosCategoriaEdit}
			create={ProdutosCategoriaCreate}
		/>
		<Resource
			name="armazems"
			list={ArmazemList}
			icon={StorageIcon}
			edit={ArmazemEdit}
			create={ArmazemCreate}
		/>
	</Admin>
);
export default App;
