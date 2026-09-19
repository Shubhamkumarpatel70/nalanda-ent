import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';

const DB_FILE = path.join(process.cwd(), 'server', 'data_store.json');

// Initial default database structure
const initialData = {
  users: [
    {
      id: "usr-admin-1",
      name: "Clinic Administrator",
      email: "admin@nalandaent.com",
      passwordHash: bcrypt.hashSync("Admin@123", 10),
      role: "admin",
      createdAt: new Date().toISOString()
    }
  ],
  queries: [
    {
      id: "qry-101",
      name: "Ramesh Jha",
      email: "ramesh.jha@gmail.com",
      phone: "+91 98350 12345",
      branchPreference: "Rajendra Nagar Main Branch",
      subject: "Eardrum perforation surgery consultation query",
      message: "Respected Dr. Nalanda, I have chronic ear discharge for 3 years. I want to visit Rajendra Nagar branch next Tuesday for microscopic tympanoplasty examination.",
      status: "New",
      createdAt: new Date(Date.now() - 3600000 * 24 * 2).toISOString()
    },
    {
      id: "qry-102",
      name: "Pooja Roy",
      email: "pooja.roy@yahoo.com",
      phone: "+91 94310 98765",
      branchPreference: "Kankerbagh City Branch",
      subject: "Sinus headache & endoscopic evaluation",
      message: "Hello doctor, I get severe morning sinus headaches. Do I need to bring my previous CT scan report when visiting Kankerbagh OPD?",
      status: "In Progress",
      createdAt: new Date(Date.now() - 3600000 * 12).toISOString()
    }
  ]
};

// Read database from file
export function readDB() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      const dir = path.dirname(DB_FILE);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2), 'utf-8');
      return initialData;
    }
    const content = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(content);
  } catch (err) {
    console.error("Error reading database file:", err);
    return initialData;
  }
}

// Write database to file
export function writeDB(data) {
  try {
    const dir = path.dirname(DB_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error("Error writing database file:", err);
  }
}
