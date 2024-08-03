export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;
  if (trueOrFalse) {
    const taskInsideBlock = true;
    const task2InsideBlock = false;
    console.log(taskInsideBlock, task2InsideBlock);
  }
  return [task, task2];
}
