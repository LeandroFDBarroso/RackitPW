import { Datagrid, Edit, EditButton, List, SimpleForm, TextField, TextInput } from "ra-ui-materialui";

export const ListaProdutosList = (props) => (
	<List {...props}>
		<Datagrid>
			<TextField source="id" />
			<TextField source="nome" />
			<EditButton />
		</Datagrid>
	</List>
);

export const ListaProdutoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="nome" />
        </SimpleForm>
    </Edit>
);
