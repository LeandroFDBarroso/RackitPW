import {
	Datagrid,
	List,
	ReferenceField,
	TextField,
	EditButton,
	Edit,
	SimpleForm,
	TextInput,
	ReferenceInput,
	SelectInput,
	Filter,
	Create,
} from "react-admin";
const ProdutosCategoriasFilter = (props) => (
	<Filter {...props}>
		<TextInput source="nome" alwaysOn />
		<ReferenceInput
			label="Produtos"
			source="produtosId"
			reference="produtos"
			perPage={100}
			sort={{ field: "id", order: "ASC" }}
			allowEmpty
		>
			<SelectInput optionText="nome" />
		</ReferenceInput>

		<ReferenceInput
			label="Categorias"
			source="categoriasId"
			reference="categorias"
			perPage={100}
			sort={{ field: "id", order: "ASC" }}
			allowEmpty
		>
			<SelectInput optionText="nome" />
		</ReferenceInput>
	</Filter>
);
export const ProdutosCategoriaList = (props) => (
	<List filters={<ProdutosCategoriasFilter />} {...props}>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<ReferenceField
				source="produtosId"
				reference="produtos"
				label="produtosId"
			>
				<TextField source="id" />
			</ReferenceField>
			<ReferenceField
				source="categoriasId"
				reference="categorias"
				label="categoriasId"
			>
				<TextField source="id" />
			</ReferenceField>
			<ReferenceField source="produtosId" reference="produtos">
				<TextField source="nome" />
			</ReferenceField>
			<ReferenceField
				source="categoriasId"
				reference="categorias"
				label="nomeCategoria"
			>
				<TextField source="nome" />
			</ReferenceField>
			<EditButton />
		</Datagrid>
	</List>
);

export const ProdutosCategoriaEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<ReferenceInput
				source="produtosId"
				reference="produtos"
				allowEmpty
				perPage={100}
				sort={{ field: "id", order: "ASC" }}
			>
				<SelectInput optionText="nome" />
			</ReferenceInput>
			<ReferenceInput
				source="categoriasId"
				reference="categorias"
				perPage={100}
				sort={{ field: "id", order: "ASC" }}
				allowEmpty
			>
				<SelectInput optionText="nome" />
			</ReferenceInput>
		</SimpleForm>
	</Edit>
);

export const ProdutosCategoriaCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<ReferenceInput
				source="produtosId"
				reference="produtos"
				perPage={100}
				sort={{ field: "id", order: "ASC" }}
				allowEmpty
			>
				<SelectInput optionText="nome" />
			</ReferenceInput>
			<ReferenceInput
				source="categoriasId"
				reference="categorias"
				perPage={100}
				sort={{ field: "id", order: "ASC" }}
				allowEmpty
			>
				<SelectInput optionText="nome" />
			</ReferenceInput>
		</SimpleForm>
	</Create>
);
