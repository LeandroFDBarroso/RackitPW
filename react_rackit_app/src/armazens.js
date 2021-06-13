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
} from "react-admin";

export const ArmazemList = (props) => (
	<List {...props}>
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
