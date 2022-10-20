type ValueOrArray = number | Array<ValueOrArray>;

export const arraySumOld = (a: ValueOrArray[]): number => {
  const itemsToProcess: ValueOrArray[] = a;
  let sum = 0;
  let processingItem: ValueOrArray;
  let processingElementInArray: ValueOrArray;
  do {
    processingItem = itemsToProcess.pop();
    if (Array.isArray(processingItem)) {
      for (let index = 0; index < processingItem.length; index++) {
        processingElementInArray = processingItem[index];
        if (typeof processingElementInArray === "number")
          sum += processingElementInArray;
        else itemsToProcess.push(processingElementInArray);
      }
    } else if (typeof processingItem === "number") sum += processingItem;
  } while (itemsToProcess.length > 0);

  return sum;
};

export const arraySum = (a: ValueOrArray[]): number => {
  const itemsToProcess: ValueOrArray[] = a;
  let sum = 0;
  let processingItem: ValueOrArray;
  do {
    processingItem = itemsToProcess.pop();
    if (Array.isArray(processingItem)) itemsToProcess.push(...processingItem);
    else if (typeof processingItem === "number") sum += processingItem;
  } while (itemsToProcess.length > 0);

  return sum;
};
