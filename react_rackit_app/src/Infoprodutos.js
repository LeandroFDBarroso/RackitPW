import {
	Datagrid,
	Edit,
	EditButton,
	List,
	SimpleForm,
	TextField,
	TextInput,
	DateField,
	NumberField,
	ReferenceField,
	Filter,
	ReferenceInput,
	SelectInput,
} from "ra-ui-materialui";
import { Create, DateTimeInput, NumberInput } from "react-admin";
const InfoProdutosFilter = (props) => (
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
			label="Comprado por"
			source="compradoPor"
			reference="utilizadores"
			perPage={100}
			sort={{ field: "id", order: "ASC" }}
			allowEmpty
		>
			<SelectInput optionText="nome" />
		</ReferenceInput>
		<ReferenceInput
			label="Armazenado"
			source="armazemId"
			reference="armazems"
			perPage={100}
			sort={{ field: "id", order: "ASC" }}
			allowEmpty
		>
			<SelectInput optionText="nome" />
		</ReferenceInput>
	</Filter>
);
export const InfoProdutoList = (props) => (
	<List filters={<InfoProdutosFilter />} {...props}>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<DateField source="dataCompra" />
			<DateField source="dataValidade" />
			{/* <NumberField source="compradoPor" /> */}
			<ReferenceField
				source="compradoPor"
				reference="utilizadores"
				perPage={100}
				sort={{ field: "id", order: "ASC" }}
			>
				<TextField source="nome" />
			</ReferenceField>
			<NumberField source="precoCompra" />
			<NumberField source="precoNormal" />
			<ReferenceField
				source="produtosId"
				reference="produtos"
				perPage={100}
				sort={{ field: "id", order: "ASC" }}
			>
				<TextField source="nome" />
			</ReferenceField>
			<ReferenceField
				source="armazemId"
				reference="armazems"
				perPage={100}
				sort={{ field: "id", order: "ASC" }}
			>
				<TextField source="nome" />
			</ReferenceField>
			<EditButton />
		</Datagrid>
	</List>
);

export const InfoProdutoEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<DateTimeInput source="dataCompra" />
			<DateTimeInput source="dataValidade" />
			<ReferenceInput
				source="compradoPor"
				reference="utilizadores"
				perPage={100}
				sort={{ field: "id", order: "ASC" }}
			>
				<SelectInput optionText="nome" />
			</ReferenceInput>
			<NumberInput source="precoCompra" />
			<NumberInput source="precoNormal" />
			<ReferenceInput
				source="produtosId"
				reference="produtos"
				perPage={100}
				sort={{ field: "id", order: "ASC" }}
			>
				<SelectInput optionText="nome" />
			</ReferenceInput>
			<ReferenceInput
				source="armazemId"
				reference="armazems"
				perPage={100}
				sort={{ field: "id", order: "ASC" }}
			>
				<SelectInput optionText="nome" />
			</ReferenceInput>
		</SimpleForm>
	</Edit>
);

export const InfoProdutoCreate = (props) => (
	<Create title="Criar informações de um Produto" {...props}>
		<SimpleForm>
			<DateTimeInput source="dataCompra" />
			<DateTimeInput source="dataValidade" />
			<ReferenceInput
				source="compradoPor"
				reference="utilizadores"
				perPage={100}
				sort={{ field: "id", order: "ASC" }}
			>
				<SelectInput optionText="nome" />
			</ReferenceInput>
			<NumberInput source="precoCompra" />
			<NumberInput source="precoNormal" />
			<ReferenceInput
				source="produtosId"
				reference="produtos"
				perPage={100}
				sort={{ field: "id", order: "ASC" }}
			>
				<SelectInput optionText="nome" />
			</ReferenceInput>
			<ReferenceInput
				source="armazemId"
				reference="armazems"
				perPage={100}
				sort={{ field: "id", order: "ASC" }}
			>
				<SelectInput optionText="nome" />
			</ReferenceInput>
		</SimpleForm>
	</Create>
);
