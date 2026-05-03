import * as yup from "yup";
import { requiredDate, requiredString } from "./validators";

export const taskSchema = yup.object({
  title: requiredString,
  description: yup.string(),
  limitTime: requiredDate,
  limitDate: requiredDate,
});

export type TaskSchemaInfertype = yup.InferType<typeof taskSchema>;
