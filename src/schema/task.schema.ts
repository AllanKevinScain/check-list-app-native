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
