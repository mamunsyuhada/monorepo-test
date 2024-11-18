import { InputAdornment } from "@mui/material";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { useRouter } from "next/router";
import * as React from "react";

import { IconButton } from "../IconButton";

export const SearchInput = React.memo(
  React.forwardRef<HTMLDivElement, TextFieldProps>(function SearchInput(
    props: TextFieldProps,
    ref
  ) {
    const router = useRouter();
    const [value, setValue] = React.useState("");

    React.useEffect(() => {
      if (router.pathname === "/search") {
        return;
      }

      setValue("");
    }, [router.pathname]);

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
      },
      []
    );

    const handleSearch = React.useCallback(() => {
      router.push(`/search?q=${value}`);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const handleKeyPress = React.useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      },
      [handleSearch]
    );

    return (
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        placeholder="Apa yang kamu cari?"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                name="IconSearch"
                aria-label="toggle password visibility"
                edge="end"
                size="small"
                sx={(theme) => ({
                  borderRadius: 0,
                  borderLeft: "0.063rem solid",
                  borderColor: theme.vars.palette.divider,
                  color: theme.vars.palette.primary.main,
                  px: 1.5,
                  mr: -1.5,
                  py: 1.25,
                })}
                onClick={handleSearch}
              />
            </InputAdornment>
          ),
        }}
        {...props}
        ref={ref}
      />
    );
  })
);
