import {
	Datagrid,
	Edit,
	EditButton,
	List,
	ReferenceField,
	TextField,
	SimpleForm,
	ReferenceInput,
	SelectInput,
	Create,
	Filter,
} from "react-admin";
const UtilizadoresListaProdutosFilter = (props) => (
	<Filter {...props}>
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
			label="Utilizadores"
			source="utilizadoresId"
			reference="utilizadores"
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
export const UtilizadoresListaProdutoList = (props) => (
	<List filters={<UtilizadoresListaProdutosFilter />} {...props}>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<TextField source="utilizadoresId" label="Utilizadores ID" />
			<TextField source="listaProdutosId" label="Lista Produtos ID" />
			<ReferenceField
				source="utilizadoresId"
				reference="utilizadores"
				perPage={100}
				sort={{ field: "id", order: "ASC" }}
			>
				<TextField source="nome" />
			</ReferenceField>
			<ReferenceField
				source="listaProdutosId"
				reference="lista-produtos"
				perPage={100}
				sort={{ field: "id", order: "ASC" }}
			>
				<TextField source="nome" />
			</ReferenceField>
			<EditButton />
		</Datagrid>
	</List>
);

export const UtilizadoresListaProdutoEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<ReferenceInput
				source="utilizadoresId"
				reference="utilizadores"
				perPage={100}
				sort={{ field: "id", order: "ASC" }}
			>
				<SelectInput optionText="nome" />
			</ReferenceInput>
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

export const UtilizadoresListaProdutoCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<ReferenceInput
				source="utilizadoresId"
				reference="utilizadores"
				perPage={100}
				sort={{ field: "id", order: "ASC" }}
			>
				<SelectInput optionText="nome" />
			</ReferenceInput>
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
