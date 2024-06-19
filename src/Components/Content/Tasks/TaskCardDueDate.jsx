import { formatDistance, parse, isValid } from "date-fns";
import { sv } from "date-fns/locale";

const TaskCardDueDate = ({ createdDate, dueDate }) => {
  const startDate = parse(createdDate, "yyyy-MM-dd", new Date());
  const finishDate = parse(dueDate, "yyyy-MM-dd", new Date());

  if (!isValid(startDate) || !isValid(finishDate)) {
    return <p>deadline saknas</p>;
  }

  const remainingDays = formatDistance(finishDate, startDate, { locale: sv });

  return <p>{`${remainingDays} kvar till deadline`}</p>;
};

export default TaskCardDueDate;
