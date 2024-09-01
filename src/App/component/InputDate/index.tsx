import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import React, { ReactNode } from "react";

type InputDateProps = {
  label: ReactNode;
  value: string | number | Date | Dayjs | null | undefined;
  helperText?: ReactNode;
  onChange: (event: { target: { value: string } }) => void;
  error?: boolean;
  format?: string;
  [key: string]: any; // Additional props
};

const InputDate: React.FC<InputDateProps> = ({
  label,
  value,
  helperText,
  onChange,
  error = false,
  format = "DD-MM-YYYY",
  ...props
}) => {
  const formattedValue = value ? dayjs(value) : null;

  const handleChange = (newValue: Dayjs | null) => {
    const formattedDate = newValue ? newValue.format(format) : "";
    if (typeof onChange === 'function') {
      onChange({ target: { value: formattedDate } });
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={formattedValue}
        onChange={handleChange}
        format={format}
        slotProps={{
          textField: {
            error: error,
            helperText: helperText,
          },
        }}
        sx={{ width: "100%" }}
        {...props}
      />
    </LocalizationProvider>
  );
};

export default InputDate;
