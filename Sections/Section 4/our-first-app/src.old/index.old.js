import foods from './foods';
import { remove, choice } from './helpers';

const fruit = choice(foods);
console.log(`Id like one ${fruit}, please`);
remove(foods, fruit);
console.log(`We have ${foods.length} foods left`);