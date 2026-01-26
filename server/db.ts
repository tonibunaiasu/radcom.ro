import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { 
  InsertUser, 
  users,
  services,
  solutions,
  teamMembers,
  blogPosts,
  caseStudies,
  partners,
  pages,
  settings,
  jobListings,
  type Service,
  type Solution,
  type TeamMember,
  type BlogPost,
  type CaseStudy,
  type Partner,
  type Page,
  type Setting,
  type JobListing
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Services queries
export async function getAllServices(): Promise<Service[]> {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(services);
}

export async function getServicesByCategory(category: "dezvoltare" | "infrastructura" | "programe_europene"): Promise<Service[]> {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(services).where(eq(services.category, category));
}

export async function getServiceBySlug(slug: string): Promise<Service | undefined> {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(services).where(eq(services.slug, slug)).limit(1);
  return result[0];
}

// Solutions queries
export async function getAllSolutions(): Promise<Solution[]> {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(solutions);
}

export async function getSolutionBySlug(slug: string): Promise<Solution | undefined> {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(solutions).where(eq(solutions.slug, slug)).limit(1);
  return result[0];
}

// Team Members queries
export async function getAllTeamMembers(): Promise<TeamMember[]> {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(teamMembers).orderBy(teamMembers.order);
}

// Blog Posts queries
export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(blogPosts).where(eq(blogPosts.status, "published")).orderBy(blogPosts.publishedAt);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
  return result[0];
}

// Case Studies queries
export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(caseStudies);
}

// Partners queries
export async function getAllPartners(): Promise<Partner[]> {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(partners).orderBy(partners.order);
}

// Pages queries
export async function getPublishedPages(): Promise<Page[]> {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(pages).where(eq(pages.status, "published"));
}

export async function getPageBySlug(slug: string): Promise<Page | undefined> {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(pages).where(eq(pages.slug, slug)).limit(1);
  return result[0];
}

// Settings queries
export async function getSettingByKey(key: string): Promise<Setting | undefined> {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(settings).where(eq(settings.key, key)).limit(1);
  return result[0];
}

export async function getAllSettings(): Promise<Setting[]> {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(settings);
}

// Job Listings queries
export async function getActiveJobListings(): Promise<JobListing[]> {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(jobListings).where(eq(jobListings.status, "active"));
}

export async function getJobListingBySlug(slug: string): Promise<JobListing | undefined> {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(jobListings).where(eq(jobListings.slug, slug)).limit(1);
  return result[0];
}
