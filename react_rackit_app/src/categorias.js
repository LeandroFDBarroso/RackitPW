import {
	Datagrid,
	Edit,
	EditButton,
	List,
	TextField,
	SimpleForm,
	TextInput,
	Create,
} from "react-admin";

export const CategoriaList = (props) => (
	<List {...props}>
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
