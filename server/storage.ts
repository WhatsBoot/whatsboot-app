import {
  contacts,
  admins,
  members,
  siteContent,
  pricing,
  videoLessons,
  downloadableFiles,
  type Contact,
  type InsertContact,
  type Admin,
  type InsertAdmin,
  type Member,
  type InsertMember,
  type SiteContent,
  type InsertSiteContent,
  type Pricing,
  type InsertPricing,
  type VideoLesson,
  type InsertVideoLesson,
  type DownloadableFile,
  type InsertDownloadableFile,
} from "@shared/schema";
import { db } from "./db";
import { eq, and } from "drizzle-orm";

export interface IStorage {
  // Contacts
  getContact(id: number): Promise<Contact | undefined>;
  getContactByEmail(email: string): Promise<Contact | undefined>;
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
  
  // Admins
  getAdmin(id: number): Promise<Admin | undefined>;
  getAdminByUsername(username: string): Promise<Admin | undefined>;
  createAdmin(admin: InsertAdmin): Promise<Admin>;
  verifyAdminPassword(username: string, password: string): Promise<Admin | null>;
  
  // Members
  getAllMembers(): Promise<Member[]>;
  getMember(id: number): Promise<Member | undefined>;
  createMember(member: InsertMember): Promise<Member>;
  updateMemberApproval(id: number, isApproved: boolean): Promise<Member | undefined>;
  
  // Site Content
  getSiteContent(section: string, key?: string): Promise<SiteContent[]>;
  updateSiteContent(content: InsertSiteContent): Promise<SiteContent>;
  
  // Pricing
  getAllPricing(): Promise<Pricing[]>;
  updatePricing(id: number, pricing: Partial<InsertPricing>): Promise<Pricing | undefined>;
  
  // Video Lessons
  getAllVideoLessons(): Promise<VideoLesson[]>;
  getVideoLesson(id: number): Promise<VideoLesson | undefined>;
  createVideoLesson(lesson: InsertVideoLesson): Promise<VideoLesson>;
  updateVideoLesson(id: number, lesson: Partial<InsertVideoLesson>): Promise<VideoLesson | undefined>;
  deleteVideoLesson(id: number): Promise<boolean>;
  
  // Downloadable Files
  getAllDownloadableFiles(): Promise<DownloadableFile[]>;
  getDownloadableFile(id: number): Promise<DownloadableFile | undefined>;
  createDownloadableFile(file: InsertDownloadableFile): Promise<DownloadableFile>;
  updateDownloadableFile(id: number, file: Partial<InsertDownloadableFile>): Promise<DownloadableFile | undefined>;
  deleteDownloadableFile(id: number): Promise<boolean>;
  incrementDownloadCount(id: number): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  // Contacts
  async getContact(id: number): Promise<Contact | undefined> {
    const [contact] = await db.select().from(contacts).where(eq(contacts.id, id));
    return contact || undefined;
  }

  async getContactByEmail(email: string): Promise<Contact | undefined> {
    const [contact] = await db.select().from(contacts).where(eq(contacts.email, email));
    return contact || undefined;
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const [newContact] = await db
      .insert(contacts)
      .values(contact)
      .returning();
    return newContact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return await db.select().from(contacts);
  }

  // Admins
  async getAdmin(id: number): Promise<Admin | undefined> {
    const [admin] = await db.select().from(admins).where(eq(admins.id, id));
    return admin || undefined;
  }

  async getAdminByUsername(username: string): Promise<Admin | undefined> {
    const [admin] = await db.select().from(admins).where(eq(admins.username, username));
    return admin || undefined;
  }

  async createAdmin(admin: InsertAdmin): Promise<Admin> {
    const [newAdmin] = await db
      .insert(admins)
      .values(admin)
      .returning();
    return newAdmin;
  }

  async verifyAdminPassword(username: string, password: string): Promise<Admin | null> {
    const admin = await this.getAdminByUsername(username);
    if (!admin) return null;
    
    // Simple password check for now - in production should use bcrypt
    return admin.password === password ? admin : null;
  }

  // Members
  async getAllMembers(): Promise<Member[]> {
    return await db.select().from(members);
  }

  async getMember(id: number): Promise<Member | undefined> {
    const [member] = await db.select().from(members).where(eq(members.id, id));
    return member || undefined;
  }

  async createMember(member: InsertMember): Promise<Member> {
    const [newMember] = await db
      .insert(members)
      .values(member)
      .returning();
    return newMember;
  }

  async updateMemberApproval(id: number, isApproved: boolean): Promise<Member | undefined> {
    const [updatedMember] = await db
      .update(members)
      .set({ 
        isApproved, 
        approvedAt: isApproved ? new Date() : null,
        updatedAt: new Date()
      })
      .where(eq(members.id, id))
      .returning();
    return updatedMember || undefined;
  }

  // Site Content
  async getSiteContent(section: string, key?: string): Promise<SiteContent[]> {
    if (key) {
      return await db
        .select()
        .from(siteContent)
        .where(and(eq(siteContent.section, section), eq(siteContent.key, key)));
    }
    
    return await db.select().from(siteContent).where(eq(siteContent.section, section));
  }

  async updateSiteContent(content: InsertSiteContent): Promise<SiteContent> {
    const existing = await db
      .select()
      .from(siteContent)
      .where(and(eq(siteContent.section, content.section), eq(siteContent.key, content.key)));

    if (existing.length > 0) {
      const [updated] = await db
        .update(siteContent)
        .set({ value: content.value, type: content.type, updatedAt: new Date() })
        .where(and(eq(siteContent.section, content.section), eq(siteContent.key, content.key)))
        .returning();
      return updated;
    } else {
      const [newContent] = await db
        .insert(siteContent)
        .values(content)
        .returning();
      return newContent;
    }
  }

  // Pricing
  async getAllPricing(): Promise<Pricing[]> {
    return await db.select().from(pricing).where(eq(pricing.isActive, true));
  }

  async updatePricing(id: number, pricingData: Partial<InsertPricing>): Promise<Pricing | undefined> {
    const [updated] = await db
      .update(pricing)
      .set({ ...pricingData, updatedAt: new Date() })
      .where(eq(pricing.id, id))
      .returning();
    return updated || undefined;
  }

  // Video Lessons
  async getAllVideoLessons(): Promise<VideoLesson[]> {
    return await db.select().from(videoLessons).where(eq(videoLessons.isActive, true));
  }

  async getVideoLesson(id: number): Promise<VideoLesson | undefined> {
    const [lesson] = await db.select().from(videoLessons).where(eq(videoLessons.id, id));
    return lesson || undefined;
  }

  async createVideoLesson(lesson: InsertVideoLesson): Promise<VideoLesson> {
    const [newLesson] = await db
      .insert(videoLessons)
      .values(lesson)
      .returning();
    return newLesson;
  }

  async updateVideoLesson(id: number, lesson: Partial<InsertVideoLesson>): Promise<VideoLesson | undefined> {
    const [updated] = await db
      .update(videoLessons)
      .set({ ...lesson, updatedAt: new Date() })
      .where(eq(videoLessons.id, id))
      .returning();
    return updated || undefined;
  }

  async deleteVideoLesson(id: number): Promise<boolean> {
    const [updated] = await db
      .update(videoLessons)
      .set({ isActive: false, updatedAt: new Date() })
      .where(eq(videoLessons.id, id))
      .returning();
    return !!updated;
  }

  // Downloadable Files
  async getAllDownloadableFiles(): Promise<DownloadableFile[]> {
    return await db.select().from(downloadableFiles).where(eq(downloadableFiles.isActive, true));
  }

  async getDownloadableFile(id: number): Promise<DownloadableFile | undefined> {
    const [file] = await db.select().from(downloadableFiles).where(eq(downloadableFiles.id, id));
    return file || undefined;
  }

  async createDownloadableFile(file: InsertDownloadableFile): Promise<DownloadableFile> {
    const [newFile] = await db
      .insert(downloadableFiles)
      .values(file)
      .returning();
    return newFile;
  }

  async updateDownloadableFile(id: number, file: Partial<InsertDownloadableFile>): Promise<DownloadableFile | undefined> {
    const [updated] = await db
      .update(downloadableFiles)
      .set({ ...file, updatedAt: new Date() })
      .where(eq(downloadableFiles.id, id))
      .returning();
    return updated || undefined;
  }

  async deleteDownloadableFile(id: number): Promise<boolean> {
    const [updated] = await db
      .update(downloadableFiles)
      .set({ isActive: false, updatedAt: new Date() })
      .where(eq(downloadableFiles.id, id))
      .returning();
    return !!updated;
  }

  async incrementDownloadCount(id: number): Promise<void> {
    const file = await this.getDownloadableFile(id);
    if (file) {
      await db
        .update(downloadableFiles)
        .set({ downloadCount: (file.downloadCount || 0) + 1 })
        .where(eq(downloadableFiles.id, id));
    }
  }
}

export const storage = new DatabaseStorage();