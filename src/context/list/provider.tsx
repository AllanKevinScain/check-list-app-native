import { useState } from "react";
import { ListContext } from "./context";

export function ListProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);

  function handle() {
    setOpen(s => !s)
  }

  return (
    <ListContext.Provider
        value={{ open: isOpen, handle }}
    >
        {children}
    </ListContext.Provider>
  );
}