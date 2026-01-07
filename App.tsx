
import React from 'react';
import { RESUME_DATA } from './constants';
import AIChat from './components/AIChat';

const SectionTitle: React.FC<{title: string}> = ({title}) => (
  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
    <span className="w-8 h-1 bg-teal-600 rounded-full"></span>
    {title}
  </h2>
);

const App: React.FC = () => {
  const { personalInfo, experiences, education, skills, hobbies, projects } = RESUME_DATA;

  return (
    <div className="min-h-screen pb-20 bg-[#f4f7f6]">
      {/* Header / Hero Section */}
      <header className="relative pt-24 pb-36 flex items-center justify-center overflow-hidden bg-[#2c5f69]">
        <div className="absolute inset-0 opacity-30">
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" alt="background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="mb-6 inline-block">
            <div className="w-48 h-48 rounded-full border-4 border-white shadow-2xl mx-auto overflow-hidden bg-slate-300">
              <img 
                src={personalInfo.avatar} 
                alt={personalInfo.name} 
                className="w-full h-full object-cover block"
                loading="eager"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  console.error("Erro ao carregar avatar:", personalInfo.avatar);
                  if (!target.src.includes('ui-avatars')) {
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(personalInfo.name)}&background=0D9488&color=fff&size=200`;
                  }
                }}
              />
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center gap-2 mb-2">
            {/*<div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-xl shadow-lg animate-pulse mb-2">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
            </div>*/}
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-md">
              {personalInfo.name}
            </h1>
          </div>

          <p className="text-xl text-teal-50 font-medium mb-8 max-w-2xl mx-auto drop-shadow-sm">{personalInfo.title}</p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm mb-10">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 bg-black/20 hover:bg-black/40 px-4 py-2 rounded-full transition-all backdrop-blur-sm border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              </svg>
              {personalInfo.email}
            </a>
            {personalInfo.phones.map(phone => (
              <a key={phone} href={`tel:${phone.replace(/\D/g,'')}`} className="flex items-center gap-2 bg-black/20 hover:bg-black/40 px-4 py-2 rounded-full transition-all backdrop-blur-sm border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {phone}
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-6">
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="bg-white text-[#0077b5] hover:scale-110 p-3 rounded-full transition-all shadow-lg">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href={personalInfo.social.facebook} target="_blank" rel="noopener noreferrer" className="bg-white text-[#1877f2] hover:scale-110 p-3 rounded-full transition-all shadow-lg">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Coluna Esquerda */}
          <div className="lg:col-span-4 space-y-6">
            <section className="bg-white p-6 rounded-2xl shadow-xl border border-teal-50">
              <h3 className="text-xs font-bold mb-4 text-teal-600 uppercase tracking-widest">Perfil Profissional</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {personalInfo.bio}
              </p>
            </section>

            <section className="bg-white p-6 rounded-2xl shadow-xl border border-teal-50">
              <h3 className="text-xs font-bold mb-6 text-teal-600 uppercase tracking-widest">Habilidades</h3>
              <div className="space-y-6">
                {['Infraestrutura', 'Desenvolvimento', 'Design & Ferramentas'].map(cat => (
                  <div key={cat}>
                    <p className="text-[10px] font-bold text-slate-400 mb-3 uppercase tracking-tighter border-b border-slate-50 pb-1">{cat}</p>
                    <div className="flex flex-wrap gap-2">
                      {skills.filter(s => s.category === cat).map(skill => (
                        <span key={skill.name} className="bg-teal-50/50 text-teal-800 px-3 py-1.5 rounded-lg text-xs font-medium border border-teal-100/50">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-6 rounded-2xl shadow-xl border border-teal-50">
              <h3 className="text-xs font-bold mb-4 text-teal-600 uppercase tracking-widest">Idiomas</h3>
              <div className="space-y-2">
                {personalInfo.languages.map(lang => (
                  <p key={lang} className="text-sm text-slate-700 font-medium">{lang}</p>
                ))}
              </div>
            </section>

            <section className="bg-slate-900 p-6 rounded-2xl shadow-xl text-white">
              <h3 className="text-xs font-bold mb-4 text-slate-400 uppercase tracking-widest">Interesses</h3>
              <div className="flex flex-wrap gap-2">
                {hobbies.map(hobby => (
                  <span key={hobby} className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-700">
                    {hobby}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Coluna Direita */}
          <div className="lg:col-span-8 space-y-10">
            {/* Experiências */}
            <section>
              <SectionTitle title="Experiências Profissionais" />
              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <div key={i} className="group bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-slate-800">{exp.role}</h4>
                        <p className="text-teal-600 font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-xs font-bold text-slate-400 bg-slate-50 px-4 py-2 rounded-full border border-slate-100 uppercase tracking-widest">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="text-slate-600 text-sm flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                      {exp.skills.map(skill => (
                         <span key={skill} className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-bold uppercase">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projetos */}
            <section>
              <SectionTitle title="Projetos em Destaque" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((proj, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border-t-4 border-teal-500 shadow-lg">
                    <h4 className="font-bold text-slate-800 mb-2">{proj.title}</h4>
                    <p className="text-slate-600 text-xs mb-4">{proj.description}</p>
                    <span className="text-[10px] font-bold text-teal-600 uppercase bg-teal-50 px-2 py-1 rounded">
                      {proj.status}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Formação */}
            <section>
              <SectionTitle title="Formação & Cursos" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {education.map((edu, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                    <h4 className="font-bold text-slate-800 text-sm mb-1">{edu.degree}</h4>
                    <p className="text-slate-500 text-xs mb-3">{edu.institution}</p>
                    <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-2 py-1 rounded">{edu.year}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 mt-24 pb-12 text-center">
        <p className="text-slate-400 text-[10px] font-medium uppercase tracking-[0.2em]">
          © Copyright 2024. {personalInfo.name} | Todos os Direitos Reservados.
        </p>
      </footer>

      <AIChat />
    </div>
  );
};

export default App;