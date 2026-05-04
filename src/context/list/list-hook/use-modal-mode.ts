import { useCallback, useState } from "react";
import type { ModalModeType } from "../context";

export interface UseModalModeInterface {
  modeModal: ModalModeType;
  updateModalMode: (mode: ModalModeType) => void;
}

export function useModalMode(): UseModalModeInterface {
  const [modeModal, setMode] = useState<ModalModeType>("create");

  const updateModalMode = useCallback((mode: ModalModeType) => {
    setMode(mode);
  }, []);

  return {
    modeModal,
    updateModalMode,
  };
}
