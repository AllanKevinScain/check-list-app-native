import { FormTaskListContext } from "./context";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { TaskSchemaInfertype } from "@/schema";
import { taskSchema } from "@/schema";
import { useListProvider } from "../list";
import { FormModal } from "./form-modal";
import { MiltiSelectModal } from "./multiselect-modal";

export const defaultValues: TaskSchemaInfertype = {
  title: "",
  description: "",
  limitTime: new Date(),
  limitDate: new Date(),
  flag: "optional",
};

export function FormTaskListProvider({ children }: { children: React.ReactNode }) {
  const { formModalizeValues, multiSelectModalizeValues, modeModal, updateSelectedList, list } = useListProvider();

  const methods = useForm<TaskSchemaInfertype>({
    resolver: yupResolver(taskSchema) as any,
    defaultValues,
  });

  return (
    <FormTaskListContext.Provider value={{ methods }}>
      <FormProvider {...methods}>
        {children}
        <FormModal {...formModalizeValues} mode={modeModal} />
      </FormProvider>

      <MiltiSelectModal
        {...multiSelectModalizeValues}
        updateSelectedList={() => {
          updateSelectedList(list.map((i) => i.id));
          multiSelectModalizeValues.close();
        }}
      />
    </FormTaskListContext.Provider>
  );
}
