interface FromatedDateToBRInterface {
  date: Date;
  time?: Date;
}

export function formatedDateToBR(props: FromatedDateToBRInterface) {
  const { date, time } = props;
  const parsedDate = new Date(date);
  const parsedTime = time ? new Date(time) : undefined;

  let timeLimit = parsedDate;
  if (parsedTime) {
    timeLimit = new Date(
      parsedDate.getFullYear(),
      parsedDate.getMonth(),
      parsedDate.getDate(),
      parsedTime.getHours(),
      parsedTime.getMinutes(),
    );
  }
  return timeLimit.toLocaleString("pt-BR");
}
