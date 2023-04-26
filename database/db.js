import data from "./data";

const Database = {};

Database.getAll = async () => {
    const asArray = Object.values(data);
    await randomDelay();
    return asArray;
};

Database.getById = async (id) => {
    const entry = data[id];
    await randomDelay();
    return entry;
};

const randomDelay = () => {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 4000) + 1000;
        setTimeout(resolve, delay);
    });
};

export default Database;
