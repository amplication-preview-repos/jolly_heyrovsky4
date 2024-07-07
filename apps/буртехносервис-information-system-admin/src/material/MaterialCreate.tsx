import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MineTitle } from "../mine/MineTitle";

export const MaterialCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <ReferenceInput source="mine.id" reference="Mine" label="Mine">
          <SelectInput optionText={MineTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
