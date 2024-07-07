import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MINE_TITLE_FIELD } from "./MineTitle";

export const MineShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <TextField label="Location" source="location" />
        <ReferenceManyField
          reference="Employee"
          target="mineId"
          label="Employees"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Position" source="position" />
            <ReferenceField label="Mine" source="mine.id" reference="Mine">
              <TextField source={MINE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Equipment"
          target="mineId"
          label="EquipmentItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Type" source="typeField" />
            <ReferenceField label="Mine" source="mine.id" reference="Mine">
              <TextField source={MINE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Material"
          target="mineId"
          label="Materials"
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
        </ReferenceManyField>
        <ReferenceManyField reference="Report" target="mineId" label="Reports">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Content" source="content" />
            <TextField label="Title" source="title" />
            <ReferenceField label="Mine" source="mine.id" reference="Mine">
              <TextField source={MINE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
