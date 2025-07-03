import { pgTable, text, serial, timestamp, boolean, integer, decimal, varchar, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  whatsapp: text("whatsapp").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Admin users table
export const admins = pgTable("admins", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 50 }).unique().notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).unique(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Members/Students table
export const members = pgTable("members", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  whatsapp: varchar("whatsapp", { length: 20 }),
  isApproved: boolean("is_approved").default(false),
  isActive: boolean("is_active").default(true),
  subscriptionType: varchar("subscription_type", { length: 50 }),
  approvedAt: timestamp("approved_at"),
  expiresAt: timestamp("expires_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Site content management
export const siteContent = pgTable("site_content", {
  id: serial("id").primaryKey(),
  section: varchar("section", { length: 100 }).notNull(),
  key: varchar("key", { length: 100 }).notNull(),
  value: text("value").notNull(),
  type: varchar("type", { length: 50 }).default("text"), // text, html, json, price
  updatedBy: integer("updated_by").references(() => admins.id),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Pricing management
export const pricing = pgTable("pricing", {
  id: serial("id").primaryKey(),
  planName: varchar("plan_name", { length: 100 }).notNull(),
  originalPrice: decimal("original_price", { precision: 10, scale: 2 }),
  currentPrice: decimal("current_price", { precision: 10, scale: 2 }).notNull(),
  period: varchar("period", { length: 50 }).default("/mês"),
  features: jsonb("features").notNull(), // array of strings
  isHighlighted: boolean("is_highlighted").default(false),
  isActive: boolean("is_active").default(true),
  order: integer("order").default(0),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Video lessons
export const videoLessons = pgTable("video_lessons", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  videoUrl: varchar("video_url", { length: 500 }).notNull(),
  duration: varchar("duration", { length: 20 }),
  order: integer("order").default(0),
  isActive: boolean("is_active").default(true),
  requiredSubscription: varchar("required_subscription", { length: 50 }),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Downloadable files
export const downloadableFiles = pgTable("downloadable_files", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  fileName: varchar("file_name", { length: 255 }).notNull(),
  filePath: varchar("file_path", { length: 500 }).notNull(),
  fileSize: varchar("file_size", { length: 50 }),
  fileType: varchar("file_type", { length: 50 }),
  isActive: boolean("is_active").default(true),
  requiredSubscription: varchar("required_subscription", { length: 50 }),
  downloadCount: integer("download_count").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Zod schemas
export const insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  whatsapp: true,
});

export const insertAdminSchema = createInsertSchema(admins).pick({
  username: true,
  password: true,
  email: true,
});

export const insertMemberSchema = createInsertSchema(members).pick({
  name: true,
  email: true,
  whatsapp: true,
  subscriptionType: true,
});

export const insertSiteContentSchema = createInsertSchema(siteContent).pick({
  section: true,
  key: true,
  value: true,
  type: true,
});

export const insertPricingSchema = createInsertSchema(pricing).pick({
  planName: true,
  originalPrice: true,
  currentPrice: true,
  period: true,
  features: true,
  isHighlighted: true,
  order: true,
});

export const insertVideoLessonSchema = createInsertSchema(videoLessons).pick({
  title: true,
  description: true,
  videoUrl: true,
  duration: true,
  order: true,
  requiredSubscription: true,
});

export const insertDownloadableFileSchema = createInsertSchema(downloadableFiles).pick({
  title: true,
  description: true,
  fileName: true,
  filePath: true,
  fileSize: true,
  fileType: true,
  requiredSubscription: true,
});

// Types
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertAdmin = z.infer<typeof insertAdminSchema>;
export type Admin = typeof admins.$inferSelect;
export type InsertMember = z.infer<typeof insertMemberSchema>;
export type Member = typeof members.$inferSelect;
export type InsertSiteContent = z.infer<typeof insertSiteContentSchema>;
export type SiteContent = typeof siteContent.$inferSelect;
export type InsertPricing = z.infer<typeof insertPricingSchema>;
export type Pricing = typeof pricing.$inferSelect;
export type InsertVideoLesson = z.infer<typeof insertVideoLessonSchema>;
export type VideoLesson = typeof videoLessons.$inferSelect;
export type InsertDownloadableFile = z.infer<typeof insertDownloadableFileSchema>;
export type DownloadableFile = typeof downloadableFiles.$inferSelect;
