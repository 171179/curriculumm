
import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "./constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const askResumeAssistant = async (question: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `
        Você é o assistente virtual do currículo de ${RESUME_DATA.personalInfo.name}.
        ${RESUME_DATA.personalInfo.name} é um profissional sênior de infraestrutura com mais de 13 anos de experiência, atualmente atuando como Analista Pleno na Arklok.
        
        Sua missão é:
        1. Responder perguntas sobre sua trajetória de forma profissional e entusiasta.
        2. Destacar sua experiência atual na Arklok, focando em migração Cloud, virtualização vSphere/Hyper-V e automação de NOC.
        3. Mencionar sua versatilidade técnica: desde especialistas em backup Commvault até desenvolvedor de jogos com Unity3D.
        4. Reforçar que ele gerencia ambientes críticos com centenas de servidores.
        5. Ser amigável e destacar a formação na FIAP.
        
        Dados do Currículo:
        ${JSON.stringify(RESUME_DATA, null, 2)}
        
        Pergunta do Recrutador/Visitante: "${question}"
        
        Instruções de Resposta:
        - Responda em Português do Brasil.
        - Seja conciso e use bullet points se necessário.
        - Se perguntarem sobre o que ele faz hoje, foque nos projetos da Arklok (Cloud, vSphere, Commvault e automações).
      `,
    });
    
    return response.text;
  } catch (error) {
    console.error("Erro no assistente:", error);
    return "Olá! Tive um pequeno problema técnico aqui. Poderia repetir sua pergunta sobre a carreira do Darlan?";
  }
};
