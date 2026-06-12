# Dev-Spot 📱

Aplicativo mobile desenvolvido com **React Native + Expo** que exibe repositórios públicos do GitHub de forma elegante, com suporte a tema claro/escuro.

---

## 👥 Autores

| **Leonardo Boff** 
| **Nicolas Augusto Almeida** 

---

## 🚀 Funcionalidades

- Listagem de repositórios públicos via API do GitHub
- Detalhes de cada repositório (linguagem, estrelas, descrição)
- Tema claro e escuro
- Autenticação via Personal Access Token (PAT)

---

## ⚙️ Configuração

### Pré-requisitos

- Node.js
- Expo CLI
- Conta no GitHub com um Personal Access Token

---

## 🔑 Token de Acesso GitHub (PAT)

O aplicativo utiliza um **Personal Access Token (PAT)** para autenticar as requisições à API do GitHub e aumentar o limite de chamadas (de 60 para 5.000 por hora).


---

## ▶️ Como rodar

```bash
npm install
npx expo start --clear
```

---

## 🛠️ Tecnologias

- React Native
- Expo
- TypeScript
- React Navigation
- GitHub REST API v3
