import * as yup from "yup";
import { requiredString } from "./validators";

export const loginSchema = yup.object({
  email: requiredString.email("E-mail inválido!"),
  password: requiredString,
});

export type LoginSchemaInfertype = yup.InferType<typeof loginSchema>;
