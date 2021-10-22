<h1 align="center"><img src="./.github/logo.svg" width="150px"/></h1>

<h3 align="center">NLW Heat</h3>

<p align="center">“Software developers are students forever 🧠”</p>

<p align="center">
  <a href="#about">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#install">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#challenge">Desafios</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Tecnologias</a>
</p>

## :speech_balloon: Sobre <a name="about"></a>

> **Stage 1:**
> Nessa aula criamos o backend da aplicação utilizando NodeJS. Nesse projeto utilizamos Typescript, que auxilia no aumento da produtividade em desenvolvimento; utilizamos o Prisma ORM, para trabalhar com banco de dados e Socket.IO para trabalhar comunicação em tempo real.

> **Stage 2:**
> Nessa aula criamos o front-end web da nossa aplicação utilizando ReactJS. Além disso, criamos nosso projeto utilizando o Vite, uma ferramenta extremamente performática, TypeScript e CSS modules. Construimos toda interface da aplicação do zero com Flexbox e Grid System, além de criar animações utilizando Framer Motion.

> **Stage 3:**
> Nessa aula criamos o front-end mobile da nossa aplicação utilizando React Native. Além disso, criamos nosso projeto utilizando TypeScript e Expo que proporciona muita produtividade no desenvolvimento. Construimos toda interface da aplicação do zero, e criamos animações utilizando o Moti, AsyncStorage e integração em tempo real com socket.io.

> **Stage 4:**
> Nessa aula criamos um microserviço em Elixir responsável por gerar a nuvem de tags das mensagens enviadas na aplicação desenvolvida nos dias anteriores. Usamos conceitos de concorrência e paralelismo para a contagem de tags, e um processo que executa todos os dias para a geração dessa nuvem de tags. Utilizamos o Phoenix, Ecto, o módulo Task, a lib Quantum e diversos conceitos do Elixir.

> **Stage 5:**
> Nessa aula, descobrimos juntos os próximos passos para acelerar a carreira em programação.

<br />
<table>
  <tr>
    <td colspan="1">Web</td>
    <td colspan="1">Mobile</td>
  </tr>
  <tr>
    <td><img src="./.github/nlwheat.gif" width="100%" /></td></td>
    <td><img src="./.github/mobile.gif" width="100%" height="90%" /></td></td>
  </tr>
</table>

## :warning: Instalação <a name="install"></a>

👉 **Back-end**

```bash
# Instalar as dependências necessárias:
$ yarn

# Configurar as variáveis de ambiente:
$ .env.example to .env

# Rodar as migrations:
$ yarn prisma migrate dev

# O banco de dados pode ser acessado com:
$ yarn prisma studio

# Iniciar o projeto:
$ yarn dev

```

👉 **Front-end**

```bash

# Instalar as dependências necessárias:
$ yarn

# Configurar as variáveis de ambiente:
$ .env.example to .env.local

# Iniciar o projeto:
$ yarn dev
```

👉 **Mobile**

```bash

# Instalar as dependências necessárias:
$ yarn

# Configurar as variáveis de ambiente:
$ .env.example to .env

# Logar com sua conta expo:
$ expo login

# Iniciar o projeto:
$ expo start
```

👉 **Elixir**

```bash
# Configurar Banco de dados:
$ config/config.exs

# Comandos:
$ mix deps.get
$ mix phx.server
$ mix ecto.setup
$ mix ecto.create
$ mix ecto.migrate
$ mix ecto.gen.migration create_messages
```

## :triangular_flag_on_post: Desafio <a name="challenge"></a>

> Aprimorar o conhecimento em Node, React, React Native e Elixir.

## :heavy_check_mark: Tecnologias <a name="technologies"></a>

- [Vite](https://vitejs.dev/)
- [Expo](https://expo.dev/)
- [Elixir](https://elixir-lang.org/)
- [Node](https://nodejs.org/en/)
- [Prisma](https://www.prisma.io/)
- [ReactJS](https://pt-br.reactjs.org/)
- [Socket.IO](https://socket.io/)
- [React Native](https://reactnative.dev//)

---

by [Douglas Scaini](https://www.github.com/douglasscaini) ❤️
