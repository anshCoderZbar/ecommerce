import fs from "fs";
import csv from "csv-parser";
import path from "path";

export default function handler(req, res) {
  const { pincode } = req.body;

  try {
    const filePath = path.join(process.cwd(), "public", "pincodes.csv");
    const results = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        const matchingRow = results.find((row) => row.pincode === pincode);

        if (matchingRow) {
          res.status(200).json({ data: matchingRow });
        } else {
          res
            .status(400)
            .json({ error: "Sorry, we don't deliver to this address" });
        }
      });
  } catch (error) {
    console.error("Error reading CSV file:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
