import React from "react";
import SelectField from "./SelectField";

const countries = [
  { value: "Mexico", label: "Mexico" },
  { value: "United States", label: "United States" },
  { value: "Canada", label: "Canada" },
  { value: "Spain", label: "Spain" },
  { value: "France", label: "France" },
];

const CountrySelectField = ({
  name,
  label,
  control,
  error,
  required = false,
}: CountrySelectProps) => {
  return (
    <SelectField
      name={name}
      label={label}
      placeholder="Select your country"
      options={countries}
      control={control}
      error={error}
      required={required}
    />
  );
};

export default CountrySelectField;
