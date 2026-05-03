import * as yup from "yup";

export const requiredString = yup.string().required("Campo obrigatório.");
export const requiredDate = yup.date().required("Campo obrigatório.");
