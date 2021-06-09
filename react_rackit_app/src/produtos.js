import {
	List,
	Datagrid,
	TextField,
	NumberField,
	EmailField,
	BooleanField,
	ReferenceField,
	Filter,
	TextInput,
	ReferenceInput,
	SelectInput,
	EditButton,
	Edit,
	SimpleForm,
	SearchInput,
} from "react-admin";

const PostTitle = ({ record }) => (
	<span>Aula {record ? `"${record.subject}"` : ""}</span>
);
const ProdutosFilter = (props) => (
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
		<ReferenceInput
			label="Produtos"
			source="nome"
			reference="produtos"
			perPage={100}
			allowEmpty
		>
			<SelectInput optionText="nome" />
		</ReferenceInput>
	</Filter>
);

export const ProdutoList = (props) => (
	<List filters={<ProdutosFilter />} {...props}>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<TextField source="nome" />
			<ReferenceField source="listaProdutosId" reference="lista-produtos">
				<TextField source="nome" />
			</ReferenceField>
			<EditButton />
		</Datagrid>
	</List>
);

export const ProdutoEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source="nome" />
			<ReferenceInput source="listaProdutosId" reference="lista-produtos">
				<SelectInput optionText="nome" />
			</ReferenceInput>
		</SimpleForm>
	</Edit>
);
