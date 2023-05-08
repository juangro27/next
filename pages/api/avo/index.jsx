import Database from "@/database";

const allAvos = async (req, res) => {
    const data = await Database.getAll();
    res.status(200).json({ data, length: data.length });
};

export default allAvos;
