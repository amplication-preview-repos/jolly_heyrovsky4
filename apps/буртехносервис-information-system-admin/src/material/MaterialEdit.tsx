import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MineTitle } from "../mine/MineTitle";

export const MaterialEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <ReferenceInput source="mine.id" reference="Mine" label="Mine">
          <SelectInput optionText={MineTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
