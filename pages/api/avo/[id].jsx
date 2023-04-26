import Database from "../../../database/db";

const allAvos = async (req, res) => {
    const { id } = req.query;
    const data = await Database.getById(id);
    res.status(200).json({ data, length: data.length });
};

export default allAvos;
