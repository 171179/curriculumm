
import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "./constants";

export const askResumeAssistant = async (question: string, history: {role: 'user' | 'assistant', content: string}[] = []) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // Construímos o contexto das mensagens anteriores
    const historyParts = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...historyParts,
        { role: 'user', parts: [{ text: question }] }
      ],
      config: {
        systemInstruction: `Você é o assistente virtual do Darlan Delmondes. Seu objetivo é ajudar recrutadores a conhecerem a trajetória dele.
        
        PERFIL DO DARLAN:
        - Nome: ${RESUME_DATA.personalInfo.name}
        - Foco Atual: Desenvolvimento Mobile e Games com Unity3D e C#.
        - Background: +13 anos em Infraestrutura de TI (Sênior/Pleno).
        - Bio: ${RESUME_DATA.personalInfo.bio}
        
        EXPERIÊNCIAS PRINCIPAIS:
        ${RESUME_DATA.experiences.map(exp => `- ${exp.role} na ${exp.company} (${exp.period}): ${exp.description.join(' ')}`).join('\n')}
        
        HABILIDADES:
        ${RESUME_DATA.skills.map(s => `${s.name} (${s.category})`).join(', ')}
        
        DIRETRIZES DE RESPOSTA:
        1. Seja extremamente profissional, educado e proativo.
        2. Destaque como a experiência dele em infraestrutura ajuda na qualidade do código e automação.
        3. Se perguntarem sobre contato, forneça o e-mail: ${RESUME_DATA.personalInfo.email} ou o LinkedIn: ${RESUME_DATA.personalInfo.social.linkedin}.
        4. Responda sempre em Português do Brasil.
        5. Seja conciso. Não escreva textos longos demais a menos que solicitado.`,
        temperature: 0.7,
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    
    return response.text;
  } catch (error) {
    console.error("Erro no assistente Gemini:", error);
    return "Olá! Tive um problema técnico momentâneo. Pode tentar perguntar novamente? Adoraria falar sobre a carreira do Darlan!";
  }
};
