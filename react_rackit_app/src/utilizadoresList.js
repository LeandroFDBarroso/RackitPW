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
	Filter,
	ReferenceInput,
	SelectInput,
} from "react-admin";
const UtilizadoresListaProdutosFilter = (props) => (
	<Filter {...props}>
		<TextInput source="nome" alwaysOn />
		<TextInput source="email" />

		<ReferenceInput
			label="Premium"
			source="isPremium"
			reference="utilizadores"
			perPage={100}
			sort={{ field: "id", order: "ASC" }}
			allowEmpty
		>
			<BooleanInput />
		</ReferenceInput>
		{/* <ReferenceInput
			label="Produtos"
			source="nome"
			reference="produtos"
			perPage={100}
			allowEmpty
		>
			<SelectInput optionText="nome" />
		</ReferenceInput> */}
	</Filter>
);
export const UtilizadoreList = (props) => (
	<List filters={<UtilizadoresListaProdutosFilter />} {...props}>
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
