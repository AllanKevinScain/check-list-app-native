import { Modal, Platform, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import type { AndroidNativeProps } from "@react-native-community/datetimepicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import type { TextFieldProps } from "@/components";
import { Textfield } from "@/components";
import { useMemo, useState } from "react";

type OmitTextFieldProps = Omit<TextFieldProps, "value" | "onChange">;

export interface DatepickerProps extends OmitTextFieldProps {
  value?: Date;
  mode?: Pick<AndroidNativeProps, "mode">["mode"];
  onChange?: (value?: Date) => void;
}

export function Datepicker(props: DatepickerProps) {
  const { value, mode, onChange, ...restTextfieldProps } = props;

  const [show, setShow] = useState(false);

  const memoValue = useMemo(() => {
    if (mode === "date") return value?.toLocaleDateString();
    return value?.toLocaleTimeString();
  }, [mode, value]);

  return (
    <>
      <TouchableOpacity onPress={() => setShow(true)}>
        <Textfield {...restTextfieldProps} editable={false} value={memoValue} />
      </TouchableOpacity>
      <Modal transparent visible={show}>
        <View style={style.overlay}>
          <View style={[style.container, Platform.OS === "android" && { backgroundColor: "transparent" }]}>
            <DateTimePicker
              value={value || new Date()}
              mode={mode}
              display={Platform.OS === "ios" ? "inline" : "default"}
              onChange={(_, date) => {
                onChange?.(date);
                setShow(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}
