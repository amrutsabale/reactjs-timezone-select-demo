import { SelectTimezone } from "../components/SelectTimezone";
import { useState } from "react";

export default {
  title: "Example/SelectTimezone",
  component: SelectTimezone,
};

export const Primary = () => {
  const [value, setValue] = useState();

  return (
    <SelectTimezone
      name={"Custom timezone"}
      label="Select Timezone"
      value={value}
      onChange={({ label, value }) => setValue(value)}
      containerStyle={{ width: 300 }}
    />
  );
};

export const WithOptionFomatting = () => {
  const [value, setValue] = useState();

  return (
    <SelectTimezone
      id="custom_timezone"
      name={"Custom timezone"}
      label="Select Timezone"
      value={value}
      onChange={({ label, value }) => setValue(value)}
      defaultToSystemTimezone
      containerStyle={{ width: 300 }}
      optionLabelFormat={(timzone) =>
        `${timzone.name} (${timzone.abbreviation})`
      }
    />
  );
};

export const WithSelectStyles = () => {
  const [value, setValue] = useState();
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 20,
    }),
    control: (base, state) => ({
      ...base,
      background: "cyan",
    }),
  };
  return (
    <SelectTimezone
      id="custom_timezone"
      name={"Custom timezone"}
      label="Select Timezone"
      value={value}
      onChange={({ label, value }) => setValue(value)}
      defaultToSystemTimezone
      containerStyle={{ width: 300 }}
      selectStyles={customStyles}
    />
  );
};

export const WithLabelStyles = () => {
  const [value, setValue] = useState();

  return (
    <SelectTimezone
      id="custom_timezone"
      name={"Custom timezone"}
      label="Select Timezone 😀"
      value={value}
      onChange={({ label, value }) => setValue(value)}
      defaultToSystemTimezone
      containerStyle={{ width: 300 }}
      labelStyles={{ color: "blue" }}
    />
  );
};
