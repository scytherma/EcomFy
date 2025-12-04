import { type User, type InsertUser, type ContactLead, type InsertContactLead } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactLead(lead: InsertContactLead): Promise<ContactLead>;
  getContactLeads(): Promise<ContactLead[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactLeads: Map<string, ContactLead>;

  constructor() {
    this.users = new Map();
    this.contactLeads = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactLead(insertLead: InsertContactLead): Promise<ContactLead> {
    const id = randomUUID();
    const lead: ContactLead = {
      ...insertLead,
      id,
      createdAt: new Date(),
    };
    this.contactLeads.set(id, lead);
    return lead;
  }

  async getContactLeads(): Promise<ContactLead[]> {
    return Array.from(this.contactLeads.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
