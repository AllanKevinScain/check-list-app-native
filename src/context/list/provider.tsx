import { ListContext } from "./context";
import { Modal } from "./modal";
import { useModalize } from "react-native-modalize";

export function ListProvider({ children }: { children: React.ReactNode }) {
  const { ref, open, close } = useModalize();

  return (
    <ListContext.Provider value={{ handle: open }}>
      {children}
      <Modal ref={ref} close={close} />
    </ListContext.Provider>
  );
}
