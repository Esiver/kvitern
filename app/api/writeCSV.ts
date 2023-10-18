import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Data to be written to the CSV file
  const data: string[][] = [
    ['Name', 'Email'],
    ['John Doe', 'john@example.com'],
    ['Jane Smith', 'jane@example.com'],
    // Add more data as needed
  ];

  // Convert the data to a CSV string
  const csvData: string = data.map(row => row.join(',')).join('\n');

  // Define the file path
  const filePath: string = './data.csv'; // You can change the file path as needed

  // Write the CSV data to the file
  fs.writeFile(filePath, csvData, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Failed to write to CSV file');
    }

    console.log('Data written to CSV file');
    return res.status(200).send('Data written to CSV file');
  });
};