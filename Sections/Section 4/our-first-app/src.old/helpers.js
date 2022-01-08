const choice = (items) => {
    return items[Math.floor(Math.random() * items.length)];
};

const remove = (items, item) => {
    for (let i of items) {
        if (i === item) {
            return items.splice(items.indexOf(i), 1);
        }
    }
    return undefined;
}

export { choice, remove }