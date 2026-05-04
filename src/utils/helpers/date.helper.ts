export function formatedDateToBR(date: Date) {
  const formated = new Date(date);
  return formated.toLocaleString("pt-BR");
}
