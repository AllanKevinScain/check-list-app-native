import * as yup from "yup";

export const filterTaskSchema = yup.object({
  search: yup.string(),
});

export type FilterTaskSchemaInfertype = yup.InferType<typeof filterTaskSchema>;
