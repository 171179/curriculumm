
import React from 'react';
import { RESUME_DATA } from './constants';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const { personalInfo, experiences, education, skills, projects, hobbies } = RESUME_DATA;

  return (
    <div className="min-h-screen pb-20">
      {/* Header / Hero Section */}
      <header className="relative pt-24 pb-32 flex items-center justify-center overflow-hidden bg-[#2c5f69]">
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" 
            alt="Circuit" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="mb-6 inline-block">
            <div className="w-44 h-44 rounded-full border-[6px] border-white/20 shadow-2xl mx-auto overflow-hidden ring-4 ring-white/10">
              <img 
                src={personalInfo.avatar} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=Darlan&background=0d9488&color=fff&size=512`;
                }}
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 drop-shadow-md">
            {personalInfo.name}
          </h1>
          <p className="text-lg md:text-xl text-teal-50 font-medium mb-10 max-w-2xl mx-auto opacity-90 border-b border-white/20 pb-4 inline-block">
            {personalInfo.title}
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 text-sm mb-10">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 bg-black/30 hover:bg-black/50 px-5 py-2.5 rounded-full transition-all backdrop-blur-md border border-white/10 shadow-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              {personalInfo.email}
            </a>
            {personalInfo.phones.map(phone => (
              <a key={phone} href={`tel:${phone.replace(/\D/g,'')}`} className="flex items-center gap-2 bg-black/30 hover:bg-black/50 px-5 py-2.5 rounded-full transition-all backdrop-blur-md border border-white/10 shadow-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                {phone}
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <a href={personalInfo.social.linkedin} target="_blank" className="bg-white text-teal-700 hover:scale-110 p-3 rounded-full transition-all shadow-xl">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href={personalInfo.social.facebook} target="_blank" className="bg-white text-blue-600 hover:scale-110 p-3 rounded-full transition-all shadow-xl">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Sidebar (Left) */}
          <div className="lg:col-span-4 space-y-8">
            <section className="bg-white p-8 rounded-2xl shadow-xl border border-teal-50 animate-fade-in">
              <h3 className="text-xs font-black text-teal-600 uppercase tracking-[0.2em] mb-4">Perfil Profissional</h3>
              <p className="text-slate-600 leading-relaxed text-sm font-medium">
                {personalInfo.bio}
              </p>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-xl border border-teal-50 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xs font-black text-teal-600 uppercase tracking-[0.2em] mb-6">Habilidades</h3>
              <div className="space-y-8">
                {['Infraestrutura', 'Desenvolvimento', 'Design & Ferramentas'].map(cat => (
                  <div key={cat}>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-50 pb-2">{cat}</p>
                    <div className="flex flex-wrap gap-2">
                      {skills.filter(s => s.category === cat).map(s => (
                        <span key={s.name} className="px-3 py-1.5 bg-teal-50 text-teal-700 rounded-lg text-xs font-bold border border-teal-100/50">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-xl border border-teal-50 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xs font-black text-teal-600 uppercase tracking-[0.2em] mb-4">Idiomas</h3>
              <div className="space-y-3">
                {personalInfo.languages.map(lang => (
                  <div key={lang} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                    <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{lang}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-[#1e293b] p-8 rounded-2xl shadow-xl text-white animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Interesses</h3>
              <div className="flex flex-wrap gap-2">
                {hobbies.map(hobby => (
                  <span key={hobby} className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-xl text-xs font-bold border border-white/5 hover:border-teal-500/50 transition-colors">
                    {hobby}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Column 2: Content (Right) */}
          <div className="lg:col-span-8 space-y-12 pt-8 lg:pt-20">
            
            {/* Experiência */}
            <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-10 bg-teal-600 rounded-full"></div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Experiências Profissionais</h2>
              </div>
              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <div key={i} className="group bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:border-teal-400 transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">{exp.role}</h4>
                        <p className="text-teal-600 font-bold uppercase text-xs tracking-widest">{exp.company}</p>
                      </div>
                      <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 uppercase tracking-[0.1em]">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-start gap-3 leading-relaxed">
                          <span className="text-teal-500 mt-1 flex-shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50">
                      {exp.skills.map(skill => (
                        <span key={skill} className="text-[9px] font-black text-slate-400 bg-slate-50 px-2 py-0.5 rounded uppercase border border-slate-100">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projetos */}
            <section className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-10 bg-teal-600 rounded-full"></div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Projetos em Destaque</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((proj, i) => (
                  <div key={i} className="p-8 bg-white border-t-4 border-teal-600 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                    <h4 className="font-bold text-slate-900 mb-3">{proj.title}</h4>
                    <p className="text-xs text-slate-500 mb-6 leading-relaxed font-medium">{proj.description}</p>
                    <div className="inline-block px-3 py-1 bg-teal-50 text-teal-600 text-[10px] font-black uppercase rounded tracking-widest border border-teal-100">
                      {proj.status}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Formação */}
            <section className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-1 w-10 bg-teal-600 rounded-full"></div>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Formação & Cursos</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu, i) => (
                  <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{edu.degree}</h4>
                    <p className="text-slate-500 text-xs font-medium mb-3">{edu.institution}</p>
                    <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-2 py-1 rounded uppercase tracking-tighter">
                      {edu.year}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="pt-12 text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em] no-print flex flex-col items-center">
              <p>© Copyright 2024. {personalInfo.name}</p>
              <p className="mt-2">Todos os Direitos Reservados.</p>
            </footer>
          </div>
        </div>
      </main>

      <AIChat />
    </div>
  );
};

export default App;
