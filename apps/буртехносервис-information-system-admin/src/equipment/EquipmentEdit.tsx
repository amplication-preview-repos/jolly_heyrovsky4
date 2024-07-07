import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MineTitle } from "../mine/MineTitle";

export const EquipmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Type" source="typeField" />
        <ReferenceInput source="mine.id" reference="Mine" label="Mine">
          <SelectInput optionText={MineTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
