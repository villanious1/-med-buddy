import "dotenv/config";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import doctorModel from "../models/doctorModel.js";

const imageDirectory = fileURLToPath(
  new URL("../../frontend/src/assets/assets_frontend/", import.meta.url)
);
const demoPassword = "MedBuddyDemo2026!";

const demoDoctors = [
  {
    name: "Dr. Richard James (Demo)",
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    fees: 50,
    image: "doc1.png",
    email: "demo.general@medbuddy.local",
  },
  {
    name: "Dr. Emily Larson (Demo)",
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    fees: 60,
    image: "doc2.png",
    email: "demo.gynecology@medbuddy.local",
  },
  {
    name: "Dr. Sarah Patel (Demo)",
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Year",
    fees: 30,
    image: "doc3.png",
    email: "demo.dermatology@medbuddy.local",
  },
  {
    name: "Dr. Christopher Lee (Demo)",
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    fees: 40,
    image: "doc4.png",
    email: "demo.pediatrics@medbuddy.local",
  },
  {
    name: "Dr. Jennifer Garcia (Demo)",
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    fees: 50,
    image: "doc5.png",
    email: "demo.neurology@medbuddy.local",
  },
  {
    name: "Dr. Zoe Kelly (Demo)",
    speciality: "Gastroenterologist",
    degree: "MBBS",
    experience: "4 Years",
    fees: 50,
    image: "doc11.png",
    email: "demo.gastroenterology@medbuddy.local",
  },
];

const main = async () => {
  if (!process.env.MONGODB_URI || !process.env.JWT_SECRET) {
    throw new Error("MONGODB_URI and JWT_SECRET must be set in backend/.env");
  }

  await mongoose.connect(process.env.MONGODB_URI, { dbName: "prescripto" });

  try {
    let added = 0;
    let updated = 0;
    let alreadyCovered = 0;

    for (const doctor of demoDoctors) {
      const passwordHash = await bcrypt.hash(demoPassword, 10);
      const existingDemoDoctor = await doctorModel.findOne({
        email: doctor.email,
      });

      if (existingDemoDoctor) {
        existingDemoDoctor.password = passwordHash;
        await existingDemoDoctor.save();
        updated += 1;
        console.log(`${doctor.speciality}: demo password refreshed`);
        continue;
      }

      const existing = await doctorModel.findOne({
        speciality: doctor.speciality,
      });

      if (existing) {
        alreadyCovered += 1;
        console.log(`${doctor.speciality}: already has a doctor; skipped`);
        continue;
      }

      const image = await readFile(join(imageDirectory, doctor.image));

      await doctorModel.create({
        ...doctor,
        image: `data:image/png;base64,${image.toString("base64")}`,
        password: passwordHash,
        about:
          "Demo profile for the Med Buddy college project. This is not a real healthcare provider.",
        available: true,
        address: {
          line1: "Demo location",
          line2: "Med Buddy college project",
        },
        date: Date.now(),
        slots_booked: {},
      });

      added += 1;
      console.log(`${doctor.speciality}: demo profile added`);
    }

    console.log(
      `Done. Added ${added} demo doctor(s), refreshed ${updated} demo password(s), and skipped ${alreadyCovered} covered specialty/specialties.`
    );
  } finally {
    await mongoose.disconnect();
  }
};

main().catch((error) => {
  console.error("Could not seed demo doctors:", error.message);
  process.exitCode = 1;
});
