import React from 'react';
import {FormGroup, Label, Input } from 'reactstrap';

const MultipleSelection = ({ options, multiple }) => {
  return (
    <FormGroup>
      <Label for="exampleSelectMulti">Select Multiple</Label>
      <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple={multiple}>
        {
          options.map(op => (
            <option>{ op.name }</option>
          ))
        }
      </Input>
    </FormGroup>
  )
};

export default MultipleSelection;
