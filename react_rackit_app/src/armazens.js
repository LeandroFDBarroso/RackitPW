import {
	Datagrid,
	EditButton,
	ImageField,
	List,
	TextField,
	Edit,
	SimpleForm,
	TextInput,
	Create,
	Filter,
} from "react-admin";
const ArmazemFilter = (props) => (
	<Filter {...props}>
		<TextInput source="nome" alwaysOn />
	</Filter>
);
export const ArmazemList = (props) => (
	<List filters={<ArmazemFilter />} {...props}>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<TextField source="nome" />
			<TextField source="descricao" />
			<ImageField source="imagem" />
			<EditButton />
		</Datagrid>
	</List>
);

export const ArmazemEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source="id" />
			<TextInput source="nome" />
			<TextInput source="descricao" />
			<TextInput source="imagem" />
			<ImageField source="imagem" />
		</SimpleForm>
	</Edit>
);

export const ArmazemCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="id" />
			<TextInput source="nome" />
			<TextInput source="descricao" />
			<TextInput source="imagem" />
		</SimpleForm>
	</Create>
);
