import React from 'react';

type InputProps = {
  type: any;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  keyboardType: any;
  options: string;
  color: string;
};

import {InputWithMask} from './styles';

const InputMask: React.FC<InputProps> = ({
  type,
  value,
  setValue,
  placeholder,
  keyboardType,
  options,
}) => {
  return (
    <InputWithMask
      type={type}
      value={value}
      onChangeText={(value) => setValue(value)}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );
};

export default InputMask;
