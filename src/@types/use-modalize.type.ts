import type { IHandles } from "react-native-modalize/lib/options";

export type UseModalizeType = {
  ref: React.RefObject<IHandles>;
  open: (dest?: "top" | "default" | undefined) => void;
  close: (dest?: "default" | "alwaysOpen" | undefined) => void;
};
