import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MineTitle } from "../mine/MineTitle";

export const EmployeeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Position" source="position" />
        <ReferenceInput source="mine.id" reference="Mine" label="Mine">
          <SelectInput optionText={MineTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
