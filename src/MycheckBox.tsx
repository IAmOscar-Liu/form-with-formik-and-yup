import { Checkbox, FormControlLabel } from "@material-ui/core";
import { useField } from "formik";

import { MyCheckboxProps } from "./types";

const MyCheckbox = (props: MyCheckboxProps) => {
  const [field] = useField({
    name: props.name,
    type: "checkbox",
    value: props.value
  });
  return (
    <FormControlLabel
      control={<Checkbox {...props} {...field} />}
      label={props.label}
    />
  );
};

export default MyCheckbox;
