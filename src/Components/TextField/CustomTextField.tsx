import { Box, Button, InputAdornment, styled } from "@mui/material";
import TextField, { TextFieldProps } from "@mui/material/TextField";

const color = "hsl(223, 100%, 88%)";
const errorColor = "hsl(354, 100%, 66%)";

const TextFieldStyled = styled(TextField)<TextFieldProps>(({ error }) => ({
  width: "100%",
  ".MuiOutlinedInput-root": {
    color: "hsl(209, 33%, 12%)",
    "&.Mui-focused fieldset": {
      borderColor: color,
    },
    "&.Mui-error fieldset": {
      borderColor: errorColor,
    },
    "&:hover fieldset": {
      borderColor: error ? errorColor : color,
    },
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: color,
      borderWidth: 1.5,
      borderRadius: "2rem",
    },
    ".MuiOutlinedInput-input": {
      padding: `0.7rem 2.5rem`,
    },
  },
}));

interface ICustomTextFieldProps {
  className?: string;
  value?: string;
  placeholder?: string;
  placeholderCenter?: boolean;
  error?: boolean;
  errorMessage?: string;
  onValueChange?: (value?: string) => void;
}

const CustomTextField = ({
  className,
  value,
  placeholder,
  placeholderCenter,
  error,
  errorMessage,
  onValueChange,
}: ICustomTextFieldProps) => {
  return (
    <TextFieldStyled
      className={className}
      value={value ?? ""}
      placeholder={placeholder}
      error={error}
      FormHelperTextProps={{
        sx: { margin: placeholderCenter ? "0 auto" : undefined },
      }}
      helperText={error ? errorMessage : undefined}
      onChange={(e) => onValueChange?.(e.target.value)}
    ></TextFieldStyled>
  );
};

export default CustomTextField;
