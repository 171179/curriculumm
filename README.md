
# Passo a Passo: Publicando seu Currículo no Vercel

Este projeto é uma página de currículo interativa e moderna com um assistente de IA. Siga os passos abaixo para colocar no ar:

### 1. Preparação
- Se você ainda não tem, crie uma conta no [GitHub](https://github.com) e no [Vercel](https://vercel.com).
- Crie um novo repositório no GitHub (ex: `meu-curriculo-interativo`).

### 2. Edição dos Dados
- Abra o arquivo `constants.tsx`.
- Altere a variável `RESUME_DATA` com as suas informações reais (experiências, educação, etc).
- Para a foto de perfil (`avatar`), você pode usar uma URL de uma imagem sua no GitHub ou LinkedIn.

### 3. Configuração da IA (Opcional, mas Recomendado)
- Para o chat funcionar, você precisará de uma chave da API do Google Gemini.
- Obtenha sua chave gratuita em: [Google AI Studio](https://aistudio.google.com/).

### 4. Publicação no Vercel
1. No painel do Vercel, clique em **"Add New"** -> **"Project"**.
2. Conecte sua conta do GitHub e selecione o repositório do seu currículo.
3. Na seção **"Environment Variables"** (Variáveis de Ambiente), adicione:
   - Name: `API_KEY`
   - Value: (Sua chave gerada no passo anterior)
4. Clique em **"Deploy"**.

Pronto! Em poucos minutos o Vercel te dará uma URL (ex: `seu-projeto.vercel.app`) para você compartilhar com recrutadores.

### Dicas de Customização
- **Cores**: Use as classes do Tailwind no arquivo `App.tsx` para mudar o esquema de cores (ex: troque `indigo-600` por `blue-600` ou `emerald-600`).
- **Fontes**: O projeto usa a fonte 'Inter', mas você pode trocar no `index.html`.
