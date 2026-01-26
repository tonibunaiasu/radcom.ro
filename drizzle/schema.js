import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";
/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
    /**
     * Surrogate primary key. Auto-incremented numeric value managed by the database.
     * Use this for relations between tables.
     */
    id: int("id").autoincrement().primaryKey(),
    /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
    openId: varchar("openId", { length: 64 }).notNull().unique(),
    name: text("name"),
    email: varchar("email", { length: 320 }),
    loginMethod: varchar("loginMethod", { length: 64 }),
    role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
    lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});
// Services Collection
export const services = mysqlTable("services", {
    id: int("id").autoincrement().primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),
    shortDescription: text("shortDescription"),
    description: text("description"),
    category: mysqlEnum("category", ["dezvoltare", "infrastructura", "programe_europene"]).notNull(),
    featuredImage: varchar("featuredImage", { length: 500 }),
    icon: varchar("icon", { length: 100 }),
    technologies: text("technologies"), // JSON array
    benefits: text("benefits"), // JSON array
    metaDescription: text("metaDescription"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});
// Solutions by Industry Collection
export const solutions = mysqlTable("solutions", {
    id: int("id").autoincrement().primaryKey(),
    industry: varchar("industry", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),
    description: text("description"),
    featuredImage: varchar("featuredImage", { length: 500 }),
    challenges: text("challenges"), // JSON array
    specificBenefits: text("specificBenefits"), // JSON array
    metaDescription: text("metaDescription"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});
// Team Members Collection
export const teamMembers = mysqlTable("team_members", {
    id: int("id").autoincrement().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    position: varchar("position", { length: 255 }).notNull(),
    biography: text("biography"),
    image: varchar("image", { length: 500 }),
    email: varchar("email", { length: 320 }),
    linkedin: varchar("linkedin", { length: 500 }),
    department: varchar("department", { length: 255 }),
    order: int("order").default(0),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});
// Blog Posts Collection
export const blogPosts = mysqlTable("blog_posts", {
    id: int("id").autoincrement().primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),
    author: varchar("author", { length: 255 }),
    publishedAt: timestamp("publishedAt"),
    category: varchar("category", { length: 100 }),
    featuredImage: varchar("featuredImage", { length: 500 }),
    content: text("content"),
    excerpt: text("excerpt"),
    tags: text("tags"), // JSON array
    status: mysqlEnum("status", ["draft", "published"]).default("draft").notNull(),
    metaDescription: text("metaDescription"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});
// Case Studies Collection
export const caseStudies = mysqlTable("case_studies", {
    id: int("id").autoincrement().primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),
    industry: varchar("industry", { length: 255 }),
    client: varchar("client", { length: 255 }),
    description: text("description"),
    featuredImage: varchar("featuredImage", { length: 500 }),
    results: text("results"), // JSON array with metrics
    servicesUsed: text("servicesUsed"), // JSON array
    detailedContent: text("detailedContent"),
    completionDate: timestamp("completionDate"),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});
// Partners Collection
export const partners = mysqlTable("partners", {
    id: int("id").autoincrement().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    logo: varchar("logo", { length: 500 }),
    website: varchar("website", { length: 500 }),
    description: text("description"),
    category: varchar("category", { length: 100 }),
    order: int("order").default(0),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});
// Pages Collection (for custom editable content)
export const pages = mysqlTable("pages", {
    id: int("id").autoincrement().primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),
    content: text("content"),
    featuredImage: varchar("featuredImage", { length: 500 }),
    metaDescription: text("metaDescription"),
    status: mysqlEnum("status", ["draft", "published"]).default("published").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});
// Settings Collection (global configuration)
export const settings = mysqlTable("settings", {
    id: int("id").autoincrement().primaryKey(),
    key: varchar("key", { length: 100 }).notNull().unique(),
    value: text("value"),
    type: mysqlEnum("type", ["text", "json", "image"]).default("text").notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});
// Job Listings Collection
export const jobListings = mysqlTable("job_listings", {
    id: int("id").autoincrement().primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    slug: varchar("slug", { length: 255 }).notNull().unique(),
    department: varchar("department", { length: 255 }),
    location: varchar("location", { length: 255 }),
    type: mysqlEnum("type", ["full-time", "part-time", "contract", "internship"]).default("full-time").notNull(),
    description: text("description"),
    requirements: text("requirements"), // JSON array
    benefits: text("benefits"), // JSON array
    status: mysqlEnum("status", ["active", "closed"]).default("active").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});
