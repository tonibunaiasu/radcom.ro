import { drizzle } from "drizzle-orm/mysql2";
import { settings } from "./drizzle/schema.js";
import { eq } from "drizzle-orm";
import "dotenv/config";

const db = drizzle(process.env.DATABASE_URL);

async function updateSettings() {
  console.log("Updating RADCOM settings...");

  try {
    await db.update(settings)
      .set({ value: "office@radcom.ro" })
      .where(eq(settings.key, "company_email"));

    await db.update(settings)
      .set({ value: "021 232 1039" })
      .where(eq(settings.key, "company_phone"));

    await db.update(settings)
      .set({ value: "Str. Constantinescu nr. 2C, Etaj 5 & 6, Sector 2, București" })
      .where(eq(settings.key, "company_address"));

    await db.update(settings)
      .set({ 
        value: JSON.stringify({
          facebook: "https://www.facebook.com/RadcomRomania",
          twitter: "https://twitter.com/RadcomRomania",
          linkedin: "https://www.linkedin.com/company/radcom-romania/",
          instagram: "https://www.instagram.com/radcom.ro/"
        })
      })
      .where(eq(settings.key, "social_media"));

    console.log("Settings updated successfully!");
  } catch (error) {
    console.error("Error updating settings:", error);
    throw error;
  }
}

updateSettings()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Failed:", error);
    process.exit(1);
  });
