import {
	Datagrid,
	Edit,
	EditButton,
	List,
	SimpleForm,
	TextField,
	TextInput,
	Create,
	Filter,
	ReferenceInput,
	SelectInput,
} from "ra-ui-materialui";

const ListaProdutosFilter = (props) => (
	<Filter {...props}>
		<TextInput source="nome" alwaysOn />
		<ReferenceInput
			label="Lista Produtos"
			source="listaProdutosId"
			reference="lista-produtos"
			perPage={100}
			sort={{ field: "id", order: "ASC" }}
			allowEmpty
		>
			<SelectInput optionText="nome" />
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

export const ListaProdutosList = (props) => (
	<List filters={<ListaProdutosFilter />} {...props}>
		<Datagrid>
			<TextField source="id" />
			<TextField source="nome" />
			<EditButton />
		</Datagrid>
	</List>
);

export const ListaProdutoEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source="nome" />
		</SimpleForm>
	</Edit>
);

export const ListaProdutoCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="nome" />
		</SimpleForm>
	</Create>
);
