
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  personalInfo: {
    name: "Darlan Delmondes",
    title: "Analista de TI & Infraestrutura | Desenvolvedor Mobile & Games",
    email: "darlan.delmondes@hotmail.com",
    phones: ["+55 11 93500-2163", "+55 11 97048-0694"],
    location: "São Paulo, SP",
    bio: "Formado em Administração com ênfase em Sistemas de Informação pela FIAP. Com mais de 13 anos de experiência em tecnologia, possuo uma trajetória sólida como Analista de Suporte Sênior e Infraestrutura Pleno, evoluindo para o desenvolvimento júnior em linguagens como C#, Ruby on Rails e PHP. Atualmente focado em desenvolvimento Mobile e Games com Unity3D.",
    // Este formato ?raw=true força o GitHub a entregar a imagem pura
    avatar: "https://github.com/171179/curriculumm/blob/main/Foto-Perfil.png?raw=true",
    languages: ["Português (Nativo)", "Inglês (Estudando)"],
    social: {
      linkedin: "https://www.linkedin.com/in/darlandelmondes/",
      facebook: "https://www.facebook.com/darlan.delmondes",
      github: "https://github.com/171179/delmondes"
    }
  },
  experiences: [
    {
      company: "Arklok (www.arklok.com.br)",
      role: "Analista de Infraestrutura Pleno",
      period: "Outubro de 2024 - Atual",
      description: [
        "Atuação direta em projetos de Cloud e migração de ambientes on-premise para nuvem.",
        "Especialista em virtualização Hyper-V e vSphere, incluindo projetos complexos de migração entre estas plataformas.",
        "Analista responsável pela gestão e operação de soluções Commvault.",
        "Desenvolvimento de soluções de automação DevOps e rotinas diárias para o NOC.",
        "Criação de solução automatizada para backup de todos os switches da infraestrutura.",
        "Gerenciamento crítico de um parque de aproximadamente 300 servidores de diversos clientes."
      ],
      skills: ["Cloud Migration", "vSphere", "Hyper-V", "Commvault", "DevOps", "PowerShell", "Automation"]
    },
    {
      company: "FEMME - Laboratório da Mulher (Paraíso / SP)",
      role: "Analista de TI",
      period: "2020",
      description: [
        "Criação e administração de máquinas virtuais Hyper-V.",
        "Administração de antivírus corporativo BitDefender.",
        "Gestão de serviços de rede: WSUS, DHCP, DNS, IIS.",
        "Administração de Servidores Windows 2016 e Linux CentOS 8.",
        "Gerenciamento de Active Directory, GPO e Políticas de Segurança."
      ],
      skills: ["Hyper-V", "Windows Server 2016", "CentOS 8", "AD", "GPO"]
    },
    {
      company: "MONDIAL Eletrodomésticos (Alphaville / SP)",
      role: "Analista de Infraestrutura",
      period: "2016 - 2017",
      description: [
        "Administração de rotinas de BackUp e firewalls Sophos (UTM).",
        "Gestão de ambientes virtualizados com Hyper-V e VMWare.",
        "Suporte especializado a ambientes MacOSX.",
        "Instalação e configuração de softwares críticos como 3D Studio Max e AutoDesk Maya."
      ],
      skills: ["Sophos", "VMWare", "MacOSX", "WSUS", "Backup"]
    },
    {
      company: "Proativa Passagens e Cargas Aéreas (São Paulo / SP)",
      role: "Analista de Infraestrutura",
      period: "2006 - 2015",
      description: [
        "Suporte técnico a redes, sistemas e telefonia.",
        "Administração de servidores Windows (2003R2 até 2012R2) e Linux.",
        "Gestão de Exchange Server 2003 e monitoramento com WhatsUp Professional e NAGIOS.",
        "Cabeamento estruturado e diretivas de segurança via GPO."
      ],
      skills: ["Windows Server", "NAGIOS", "Exchange", "Troubleshooting"]
    },
    {
      company: "MOVE CRM CONSULTING - BPO (São Paulo / SP)",
      role: "Analista NOC",
      period: "2005 - 2006",
      description: [
        "Administração de Servidores Windows 2000/2003 e NT.",
        "Gestão de sistemas de telefonia AVAYA.",
        "Monitoramento de performance com MRTG e NAGIOS.",
        "Configuração de ISA Server e IIS."
      ],
      skills: ["AVAYA", "MRTG", "ISA Server", "NOC"]
    },
    {
      company: "Softway Contact Center (São Paulo / SP)",
      role: "Suporte",
      period: "2003 - 2005",
      description: [
        "Suporte técnico a redes, telefonia e montagem de cabeamento estruturado.",
        "Instalação e manutenção de sistemas operacionais e aplicativos de Callcenter.",
        "Manutenção preventiva e corretiva de Hardware."
      ],
      skills: ["Hardware", "Redes", "Telefonia", "Windows"]
    }
  ],
  projects: [
    {
      title: "Unity3D Games",
      description: "Desenvolvimento de jogos para plataformas Mobile, Windows e MacOSX.",
      status: "Em desenvolvimento"
    },
    {
      title: "C# Flex Fuel Calculator",
      description: "App Mobile para cálculo de combustível flexível (Android/iOS).",
      status: "Desenhando telas"
    },
    {
      title: "Calculadora de Médias",
      description: "Aplicativo Android desenvolvido para auxílio acadêmico.",
      status: "Finalizado"
    }
  ],
  education: [
    {
      institution: "FIAP - Fac. de Informática e Adm. Paulista",
      degree: "Bacharel em Administração de Empresas (Sistemas de Informação)",
      year: "Concluído"
    },
    {
      institution: "Impacta Tecnologia",
      degree: "ASP.NET 2010 com C# - Módulo I e II",
      year: "Cursos"
    },
    {
      institution: "Green Treinamentos",
      degree: "MCP - Managing & Maintaining Microsoft Windows Server 2003",
      year: "Certificação"
    },
    {
      institution: "Udemy",
      degree: "Especialização em Unity 2D/3D, Android Studio, Maya e Ruby on Rails",
      year: "Diversos"
    }
  ],
  skills: [
    { name: "Cloud Migration", level: 90, category: "Infraestrutura" },
    { name: "vSphere / ESXi", level: 95, category: "Infraestrutura" },
    { name: "Windows Server (2003-2022)", level: 95, category: "Infraestrutura" },
    { name: "Active Directory & GPO", level: 95, category: "Infraestrutura" },
    { name: "Commvault", level: 85, category: "Infraestrutura" },
    { name: "Linux (CentOS/LPI)", level: 85, category: "Infraestrutura" },
    { name: "Unity3D & C#", level: 85, category: "Desenvolvimento" },
    { name: "DevOps & Automations", level: 80, category: "Desenvolvimento" },
    { name: "Zabbix / Nagios", level: 90, category: "Design & Ferramentas" },
    { name: "Photoshop / Maya", level: 75, category: "Design & Ferramentas" }
  ],
  hobbies: ["Caminhar", "Filmes", "Nadar", "Viajar", "Internet"]
};
