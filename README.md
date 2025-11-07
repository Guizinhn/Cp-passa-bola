# Passa a Bola - Plataforma de Futebol Feminino

Plataforma React + Vite + TailwindCSS dedicada ao futebol feminino. Desenvolvida para atender aos requisitos das disciplinas **Front-end Design** e **Web Development**.

## 🚀 Tecnologias

- **React 18.3.1** - Biblioteca JavaScript para construção de interfaces
- **Vite 7.1.5** - Build tool e dev server
- **TypeScript 5.5.4** - Superset JavaScript com tipagem estática
- **TailwindCSS 3.4.17** - Framework CSS utility-first
- **React Router DOM 6.26.2** - Roteamento para React
- **Recharts 2.12.7** - Biblioteca de gráficos para React
- **Lucide React** - Ícones SVG

## 📋 Requisitos Implementados

### Front-end Design

✅ **TailwindCSS** - Aplicado em todo o projeto com consistência visual  
✅ **Elementos Interativos** - Modais, formulários e dropdowns implementados  
✅ **CSS Grid** - Uso de Grid Container e Grid Items em múltiplas áreas  
✅ **Dashboards Dinâmicos** - Página de dashboard com gráficos interativos  
✅ **Responsividade** - Todas as páginas são totalmente responsivas  
✅ **Deploy** - Configurado para Git + Vercel

### Web Development

✅ **Projeto React** - Estrutura semântica e limpa  
✅ **Consumo de API** - Componente que consome JSON local (`/src/data/tournaments.json`)  
✅ **Revisão do DOM** - Manipulação controlada de elementos via React  
✅ **Criação de Eventos** - Eventos de clique, submit, change implementados  
✅ **Normas W3C** - HTML semântico e acessível  
✅ **Versionamento GitHub** - Pronto para versionamento  
✅ **Deploy Vercel** - Configuração pronta para deploy

## 📁 Estrutura do Projeto

```
Cp-passa-bola/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── AboutSection.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── LoginModal.tsx
│   │   ├── RegisterTeamModal.tsx
│   │   └── TournamentsFromJSON.tsx  # Componente que consome JSON local
│   ├── contexts/            # Contextos React
│   │   ├── AuthContext.tsx
│   │   └── TeamsContext.tsx
│   ├── data/                # Dados JSON locais
│   │   └── tournaments.json
│   ├── hooks/               # Custom hooks
│   │   └── useFootballData.ts
│   ├── pages/               # Páginas da aplicação
│   │   ├── HomePage.tsx
│   │   ├── DashboardPage.tsx  # Dashboard com gráficos dinâmicos
│   │   ├── RegisteredTeams.tsx
│   │   ├── TournamentRegional.tsx
│   │   ├── TournamentNational.tsx
│   │   └── TournamentUpcoming.tsx
│   ├── types/               # Definições de tipos TypeScript
│   └── App.tsx
├── vercel.json              # Configuração para deploy na Vercel
└── package.json
```

## 🎯 Funcionalidades Principais

### 1. Consumo de JSON Local
- Componente `TournamentsFromJSON` consome dados de `/src/data/tournaments.json`
- Demonstra manipulação de dados e renderização dinâmica

### 2. Dashboard Dinâmico
- Gráficos de barras, linha e pizza usando Recharts
- Estatísticas em tempo real dos times e partidas
- Layout responsivo com CSS Grid

### 3. Elementos Interativos
- **Modais**: Login, Registro de Time, Adicionar Jogadora, Agendar Partida
- **Formulários**: Validação e manipulação de eventos
- **Dropdowns**: Menu de navegação e filtros

### 4. CSS Grid
- Layout de cards em Grid Container
- Grid responsivo para diferentes breakpoints
- Uso explícito em múltiplas áreas do projeto

### 5. Manipulação de DOM
- Scroll suave para seções
- Manipulação controlada via React (querySelector, scrollIntoView)
- Eventos de clique e interação

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Passos

1. **Instalar dependências**
```bash
npm install
```

2. **Executar em modo desenvolvimento**
```bash
npm run dev
```

3. **Build para produção**
```bash
npm run build
```

4. **Preview da build**
```bash
npm run preview
```

## 🚀 Deploy na Vercel

### Opção 1: Deploy via Git

1. **Fazer commit e push para o GitHub**
```bash
git add .
git commit -m "Preparação para deploy"
git push origin main
```

2. **Conectar repositório na Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Conecte seu repositório GitHub
   - A Vercel detectará automaticamente as configurações do `vercel.json`

### Opção 2: Deploy via CLI

1. **Instalar Vercel CLI**
```bash
npm i -g vercel
```

2. **Fazer deploy**
```bash
vercel
```

### Configurações
O arquivo `vercel.json` já está configurado com:
- Build command: `npm run build`
- Output directory: `dist`
- Rewrites para SPA (Single Page Application)

## 📦 Entrega do Projeto

Para entregar o projeto conforme requisitos:

1. **Remover node_modules**
```bash
# No Windows (PowerShell)
Remove-Item -Recurse -Force node_modules

# No Linux/Mac
rm -rf node_modules
```

2. **Compactar o projeto**
   - Excluir `node_modules` da compactação
   - Incluir todos os arquivos de código fonte
   - Incluir `package.json` e `package-lock.json`

## 🎨 Recursos Visuais

- Design moderno com gradientes e animações
- Tema dark com cores roxo/azul
- Ícones da biblioteca Lucide React
- Layout responsivo para mobile, tablet e desktop

## 📝 Comentários e Código

- Código comentado em português
- Estrutura semântica HTML5
- Acessibilidade (aria-labels, roles)
- TypeScript para type safety

## 🌐 Rotas da Aplicação

- `/` - Página inicial
- `/tournaments/regional` - Torneios regionais
- `/tournaments/national` - Torneios nacionais
- `/tournaments/upcoming` - Próximos eventos (com consumo de JSON)
- `/dashboard` - Dashboard com gráficos dinâmicos
- `/teams` - Times cadastrados
- `/chat` - Chat (requer autenticação)
- `/login` - Página de login

## 👥 Autores

- Alê Xavier - Visionária e Comentarista Esportiva
- Luana Maluf - Jornalista e Defensora do Esporte

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

---

**Desenvolvido com ❤️ para valorizar o futebol feminino**
