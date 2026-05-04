import { FormTaskListContext } from "./context";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { TaskSchemaInfertype } from "@/schema";
import { taskSchema } from "@/schema";
import { useListProvider } from "../list";
import { Modal } from "./modal";

export const defaultValues: TaskSchemaInfertype = {
  title: "",
  description: "",
  limitTime: new Date(),
  limitDate: new Date(),
  flag: "optional",
};

export function FormTaskListProvider({ children }: { children: React.ReactNode }) {
  const { updateList, close, ref, modeModal } = useListProvider();

  const methods = useForm<TaskSchemaInfertype>({
    resolver: yupResolver(taskSchema) as any,
    defaultValues,
  });

  return (
    <FormTaskListContext.Provider value={{ methods, updateList }}>
      <FormProvider {...methods}>
        {children}
        <Modal modalRef={ref} close={close} updateList={updateList} mode={modeModal} />
      </FormProvider>
    </FormTaskListContext.Provider>
  );
}
