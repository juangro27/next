import data from "./data";

const Database = {};

Database.getAll = async () => {
    const asArray = Object.values(data);
    return asArray;
};

Database.getById = async (id) => {
    const entry = data[id];
    return entry;
};

export default Database;
