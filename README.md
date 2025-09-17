# ⚽ Passa a Bola

![React](https://img.shields.io/badge/React-18.2.0-61dafb?logo=react&logoColor=white)  
Aplicação web desenvolvida em **React** que fornece informações sobre torneios de futebol feminino, permite cadastrar times para o campeonato **"Passa a Bola"**, além de contar com um sistema de **login** que desbloqueia a página exclusiva de **Chat** para usuários autenticados.

---

## 🚀 Funcionalidades

- 📊 **Informações sobre torneios** de futebol feminino (dados consumidos via API).  
- 📝 **Cadastro de times** para o campeonato *Passa a Bola*.  
- 👥 **Gerenciamento de times cadastrados** (incluir/remover jogadoras, agendar partidas).  
- 🔐 **Sistema de autenticação** com login/logout funcional.  
- 💬 **Chat interno** disponível apenas para usuários logados.  

---

## 📂 Estrutura do Projeto

- `HomePage` → página inicial com apresentação e cadastro de times.  
- `RegisteredTeams` → listagem e gerenciamento de times já cadastrados.  
- `LoginPage` → autenticação de usuários.  
- `ChatPage` → área exclusiva de mensagens, liberada apenas após login.  
- `AuthContext` → contexto de autenticação com login/logout.  
- `TeamsContext` → contexto responsável pelos times e partidas.  
- `PrivateRoute` → proteção de rotas que exigem login.  

---

## 🔑 Login de Teste

Para acessar a página de **Chat**, use as seguintes credenciais já configuradas:

- **Email:** `teste@teste.com`  
- **Senha:** `123456`  

---

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/)  
- [React Router DOM](https://reactrouter.com/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [Lucide React](https://lucide.dev/)  

---

## 📦 Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/Guizinhn/Cp-passa-bola
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd Cp-passa-bola
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Acesse em [http://localhost:5173](http://localhost:5173) (ou a porta configurada pelo Vite).

---

## 📸 Demonstração das Páginas

- **Home:** informações sobre o campeonato e botões para login/cadastro de time.  
- **Registered Teams:** listagem de times cadastrados com opções de gerenciamento.  
- **Login:** autenticação de usuários.  
- **Chat:** sistema de mensagens entre times e organizadores (apenas logados).  

---

## 👥 Integrantes do Grupo

- Nicolas Barnabe — RM: 561997  
- Luiz Antonio — RM: 562142  
- Kevin Venancio — RM: 561459  
- Guilherme Badia — RM: 561568  
