import React from 'react';
import {Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import { consts } from '../../constants/constants';
import MultipleSelection from '../MultipleSelection/MultipleSelection';

const Curriculum = ({ type }) => {
  const { DEPARTAMENTAL, MUNICIPAL } = consts;
  const options = [
    {
      name: 'Chulesaurio Rex'
    },
    {
      name: 'Chulesirraptor'
    }
  ]
  
  return (
    type &&
    <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
          <MultipleSelection options={options} />
        {
          type === DEPARTAMENTAL &&
            <MultipleSelection options={options} multiple />
        }
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        {
          type === MUNICIPAL &&
            <FormGroup tag="fieldset">
              <legend>Radio Buttons</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Option one is this and that—be sure to include why it's great
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Option two can be something else and selecting it will deselect option one
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio1" disabled />{' '}
                  Option three is disabled
                </Label>
              </FormGroup>
            </FormGroup>
        }
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
  );
}

export default Curriculum;
