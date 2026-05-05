import * as yup from "yup";
import { requiredDate, requiredString } from "./validators";

export const flagSchema = yup.string().oneOf(["urgent", "optional"]);
export type FlagSchemaInferType = yup.InferType<typeof flagSchema>;

export const taskSchema = yup.object({
  id: yup.string(),
  title: requiredString,
  description: yup.string(),
  limitTime: requiredDate,
  limitDate: requiredDate,
  flag: flagSchema.required("Campo obrigatório."),
});
export type TaskSchemaInfertype = yup.InferType<typeof taskSchema>;

const pickTaskSchema = taskSchema.pick(["title", "description", "flag", "limitDate", "limitTime"]);
const lastTaskSchema = yup.object({ id: requiredString, at_updated: requiredDate });
const adpativeTaskSchema = pickTaskSchema.concat(lastTaskSchema);
export type ListType = yup.InferType<typeof adpativeTaskSchema>;

export const taskListSchema = yup.object({
  tasks: yup.array(adpativeTaskSchema),
  search: yup.string(),
});
export type TaskListSchemaInfertype = yup.InferType<typeof taskListSchema>;
