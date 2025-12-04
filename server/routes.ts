import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactLeadSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // POST /api/contact - Create a new contact lead
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactLeadSchema.parse(req.body);
      const lead = await storage.createContactLead(validatedData);
      
      res.status(201).json({ 
        success: true, 
        message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        data: lead 
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false,
          message: validationError.message 
        });
      }
      
      console.error("Error creating contact lead:", error);
      res.status(500).json({ 
        success: false,
        message: "Erro ao enviar mensagem. Por favor, tente novamente." 
      });
    }
  });

  // GET /api/contact - Get all contact leads (for admin purposes)
  app.get("/api/contact", async (_req, res) => {
    try {
      const leads = await storage.getContactLeads();
      res.json({ success: true, data: leads });
    } catch (error: any) {
      console.error("Error fetching contact leads:", error);
      res.status(500).json({ 
        success: false,
        message: "Erro ao buscar contatos." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
