import {
	List,
	Datagrid,
	TextField,
	NumberField,
	EmailField,
	BooleanField,
	EditButton,
	Edit,
	SimpleForm,
	TextInput,
	DateInput,
	BooleanInput,
	Create,
	PasswordInput,
} from "react-admin";

export const UtilizadoreList = (props) => (
	<List {...props}>
		<Datagrid>
			<NumberField source="id" />
			<TextField source="nome" />
			<EmailField source="email" />
			{/* <TextField source="password" /> */}
			<BooleanField source="isPremium" />
			<EditButton />
		</Datagrid>
	</List>
);

export const UtilizadoreEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source="nome" />
			<TextInput source="email" />
			<PasswordInput source="password" />
			<BooleanInput source="isPremium" />
		</SimpleForm>
	</Edit>
);

export const UtilizadoreCreate = (props) => {
	return (
		<Create title="Criar um utilizador" {...props}>
			<SimpleForm>
				<TextInput source="nome" />
				<TextInput source="email" />
				<PasswordInput source="password" />
				<BooleanInput source="isPremium" />
			</SimpleForm>
		</Create>
	);
};
