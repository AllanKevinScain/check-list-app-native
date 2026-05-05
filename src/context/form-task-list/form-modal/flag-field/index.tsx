import { Text, View } from "react-native";
import { Flag } from "@/components";
import { style } from "./style";
import { themes } from "@/global/themes";
import type { UseFormSetValue, Control } from "react-hook-form";
import { useWatch } from "react-hook-form";

import type { FlagSchemaInferType, TaskSchemaInfertype } from "@/schema";

interface FlagFieldProps {
  control: Control<TaskSchemaInfertype>;
  setValue: UseFormSetValue<TaskSchemaInfertype>;
}

type FlagsType = {
  caption: FlagSchemaInferType;
  color: string;
};

const flags: FlagsType[] = [
  { caption: "urgent", color: themes.colors.error },
  { caption: "optional", color: themes.colors.secondary },
];

export function FlagField(props: FlagFieldProps) {
  const { control, setValue } = props;

  const currentFlag = useWatch({ control, name: "flag" });

  return (
    <View>
      <Text style={style.textFlags}>Priority:</Text>
      <View style={style.containerFlags}>
        {flags.map((flag) => {
          return (
            <Flag
              key={flag.caption}
              selected={flag.caption === currentFlag}
              caption={flag.caption}
              onPress={() => setValue("flag", flag.caption!)}
            />
          );
        })}
      </View>
    </View>
  );
}
