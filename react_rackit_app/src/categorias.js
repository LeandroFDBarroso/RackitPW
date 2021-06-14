import {
	Datagrid,
	Edit,
	EditButton,
	List,
	TextField,
	SimpleForm,
	TextInput,
	Create,
	Filter,
} from "react-admin";
const CategoriaFilter = (props) => (
	<Filter {...props}>
		<TextInput source="nome" alwaysOn />
	</Filter>
);
export const CategoriaList = (props) => (
	<List filters={<CategoriaFilter />} {...props}>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<TextField source="nome" />
			<EditButton />
		</Datagrid>
	</List>
);
export const CategoriaEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source="nome" />
		</SimpleForm>
	</Edit>
);

export const CategoriaCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="nome" />
		</SimpleForm>
	</Create>
);
