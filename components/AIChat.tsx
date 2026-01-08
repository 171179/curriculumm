
import React, { useState, useRef, useEffect } from 'react';
import { askResumeAssistant } from '../geminiService';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: 'Olá! Sou o assistente do Darlan. Como posso ajudar?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    const newMessages = [...messages, { role: 'user' as const, content: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    const response = await askResumeAssistant(userMsg, messages.slice(1));
    
    setMessages(prev => [...prev, { role: 'assistant', content: response || 'Desculpe, não consegui processar agora.' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] no-print">
      {isOpen && (
        <div className="mb-4 w-[320px] md:w-[360px] h-[480px] flex flex-col bg-white/95 backdrop-blur-md rounded-[1.5rem] shadow-2xl border border-slate-200 overflow-hidden animate-[fadeIn_0.3s_ease-out] ring-1 ring-black/5">
          {/* Header Compacto */}
          <div className="p-4 bg-[#2c5f69] text-white flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-lg">🤖</div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-[#2c5f69] rounded-full"></span>
              </div>
              <div>
                <p className="font-bold text-xs tracking-tight">Assistente Darlan</p>
                <p className="text-[9px] uppercase font-bold tracking-widest opacity-60">Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1.5 rounded-full transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/30">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-xs leading-relaxed shadow-sm transition-all ${
                  msg.role === 'user' 
                    ? 'bg-[#2c5f69] text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 p-3 rounded-xl rounded-tl-none flex gap-1 shadow-sm">
                  <div className="w-1 h-1 bg-teal-400 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-teal-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-teal-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area Compacta */}
          <div className="p-3 bg-white border-t border-slate-100">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Pergunte algo..."
                className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2.5 text-xs focus:ring-1 focus:ring-teal-500 outline-none transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-[#2c5f69] text-white p-2.5 rounded-xl transition-all disabled:opacity-30"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>
            <p className="text-[8px] text-center text-slate-400 mt-2 uppercase font-bold tracking-tighter opacity-40">Gemini 3 Flash</p>
          </div>
        </div>
      )}

      {/* Toggle Button Menor */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#2c5f69] text-white rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center group"
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <div className="relative">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 border-2 border-[#2c5f69] rounded-full animate-pulse"></span>
          </div>
        )}
      </button>
    </div>
  );
};

export default AIChat;
