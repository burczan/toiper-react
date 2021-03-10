import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPaper, AddPaperFormControls } from '../../state/papers/actionCreators';
import { PaperTypes } from '../../state/papers/types';
import { FormButton, Input, Select } from '../../common/components/Forms';

type FormControls = {
  name: string;
  price: string;
  layers: string;
  leafs: string;
  type: PaperTypes;
  length: string;
};

const initFormControls: FormControls = {
  name: '',
  price: '',
  layers: '',
  leafs: '',
  type: PaperTypes.toilet,
  length: '',
};

export const AddPaperForm = () => {
  const dispatch = useDispatch();
  const [formControls, setFormControls] = useState(initFormControls);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormControls({
      ...formControls,
      [event.target.name]: event.target.value,
    });
  };

  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormControls({
      ...formControls,
      type: event.target.value as PaperTypes,
    });
  };

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const paper: AddPaperFormControls = {
      name: formControls.name,
      price: Number(formControls.price),
      layers: Number(formControls.layers),
      leafs: Number(formControls.leafs),
      type: formControls.type,
      length: Number(formControls.length),
    };

    dispatch(addPaper(paper));
    setFormControls(initFormControls);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Select
          label="Type"
          htmlFor="type"
          onChange={onSelect}
          value={formControls.type}
          horizontal
        >
          {[
            { value: PaperTypes.toilet, children: 'Toilet' },
            { value: PaperTypes.towel, children: 'Towel' },
          ]}
        </Select>

        <Input
          htmlFor="name"
          name="name"
          placeholder="name"
          type="text"
          value={formControls.name}
          onChange={onInputChange}
          label="Name"
          required
          horizontal
        />

        <Input
          htmlFor="price"
          name="price"
          placeholder="price"
          type="number"
          value={formControls.price}
          onChange={onInputChange}
          min={0}
          step={0.01}
          label="Price"
          required
          horizontal
        />

        <Input
          htmlFor="layers"
          name="layers"
          placeholder="layers"
          type="number"
          value={formControls.layers}
          onChange={onInputChange}
          min={1}
          label="Layers"
          required
          horizontal
        />

        <Input
          htmlFor="leafs"
          name="leafs"
          placeholder="leafs"
          type="number"
          value={formControls.leafs}
          onChange={onInputChange}
          min={1}
          label="Leafs"
          required
          horizontal
        />

        <Input
          htmlFor="length"
          name="length"
          placeholder="length"
          type="number"
          value={formControls.length}
          onChange={onInputChange}
          min={0}
          label="Length"
          required
          horizontal
        />

        <FormButton type="submit" color="primary" horizontal>
          Add paper
        </FormButton>
      </form>
    </>
  );
};
