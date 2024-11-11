export function generateRandomValue(min:number, max: number, numAfterDigit = 0) {
    return +((Math.random() * (max - min)) + min).toFixed(numAfterDigit);
  }
  
  export function getRandomItems<T>(items: T[]):T[] {
    const randomItems = [];
    let copyItems = items;
    const randomItemCount = generateRandomValue(1, items.length);
  
    for (let i = randomItemCount; i > 0; i--) {
      const item = getRandomItem([...copyItems]);
      randomItems.push(item);
      copyItems = copyItems.filter((filtredItem) => filtredItem !== item);
    }
    return randomItems;
  }
  
  export function getRandomItem<T>(items: T[]):T {
    return items[generateRandomValue(0, items.length - 1)];
  }
  
  export function getErrorMessage(error: unknown): string {
    return error instanceof Error ? error.message : '';
  }