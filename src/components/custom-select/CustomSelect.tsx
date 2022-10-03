import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
import './CustomSelect.css';

type SelectProps = {
  titleKey: string,
  options: number[] | string[],
  optionsKey: string,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  minWidth: number,
  cssClass?: string,
  t: any
}

export const CustomSelect = (props: SelectProps) => {
  const [, setValue] = React.useState<string>(() => '');
  const handleValueChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    props.setValue(event.target.value.toString());
  };

  return (
    <FormControl className = { props.cssClass } sx = {{ m: 1, minWidth: props.minWidth }} size="small">
      <InputLabel className="title" id = { props.titleKey }>{ props.t(props.titleKey) }</InputLabel>
      <Select
        labelId = { props.titleKey }
        id = { props.titleKey }
        value = { props.value }
        label = { props.t(props.titleKey) }
        onChange = { handleValueChange }
      >
        {
          props.options.map((v, i) => (
            <MenuItem key={props.titleKey + i} value={v}>{ props.t(props.optionsKey + '.' + {i}.i)}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}