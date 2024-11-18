import * as React from "react";

export const useFocusInput = (focus: boolean) => {
  const inputRef = React.useRef<HTMLTextAreaElement | HTMLInputElement | null>(
    null
  );

  React.useEffect(() => {
    if (focus) {
      inputRef.current?.focus();
    }
  }, [focus]);

  return { inputRef };
};
