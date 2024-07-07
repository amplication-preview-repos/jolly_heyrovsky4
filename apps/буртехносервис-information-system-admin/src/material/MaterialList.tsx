import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MINE_TITLE_FIELD } from "../mine/MineTitle";

export const MaterialList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Materials"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Quantity" source="quantity" />
        <ReferenceField label="Mine" source="mine.id" reference="Mine">
          <TextField source={MINE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
