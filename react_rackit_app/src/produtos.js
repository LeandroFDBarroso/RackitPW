import {
	List,
	Datagrid,
	TextField,
	ReferenceField,
	Filter,
	TextInput,
	ReferenceInput,
	SelectInput,
	EditButton,
	Edit,
	SimpleForm,
	FunctionField,
	Create,
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

export const ProdutoList = (props) => (
	<List filters={<ProdutosFilter />} {...props}>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			{/* <ReferenceField source="id" reference="produtos-categorias"> */}

			{/* </ReferenceField> */}

			<ReferenceField source="listaProdutosId" reference="lista-produtos">
				<TextField source="nome" />
			</ReferenceField>
			<TextField source="nome" label="Nome dos Produtos" />
			<ReferenceField
				source="id"
				reference="info-produtos"
				link={(record, reference) =>
					`/${reference}/?displayedFilters=%7B"produtosId"%3Atrue%7D&filter=%7B"produtosId"%3A${record.id}%7D&order=ASC&page=1&perPage=10&sort=id`
				}
				label="Informações"
			>
				<FunctionField
					label="Name"
					render={(ProdutoList) => `Ver mais informações`}
				/>

				{/* <TextField label="Ver mais informações" source="compradoPor" /> */}
			</ReferenceField>
			<ReferenceField
				source="id"
				reference="info-produtos/count?where=%7B%0A%20%20%22produtosId%22%3A%201%0A%7D"
				label="quantidade"
			>
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
			<ReferenceInput
				source="listaProdutosId"
				reference="lista-produtos"
				perPage={100}
				sort={{ field: "id", order: "ASC" }}
			>
				<SelectInput optionText="nome" />
			</ReferenceInput>
		</SimpleForm>
	</Edit>
);
export const ProdutoCreate = (props) => {
	return (
		<Create title="Criar um Produto" {...props}>
			<SimpleForm>
				<TextInput source="nome" />
				<ReferenceInput
					source="listaProdutosId"
					reference="lista-produtos"
					perPage={100}
					sort={{ field: "id", order: "ASC" }}
				>
					<SelectInput optionText="nome" />
				</ReferenceInput>
			</SimpleForm>
		</Create>
	);
};
