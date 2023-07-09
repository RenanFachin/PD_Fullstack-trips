# Aplicação de Compra de Viagens - FullStack Trip

Esta é uma aplicação de compra de viagens desenvolvida durante o Intensivo do Full Stack Week. A aplicação permite aos usuários buscar e reservar viagens, visualizar detalhes de viagens, gerenciar reservas, autenticar com o Google e realizar pagamentos usando a ferramenta Stripe.

## 🎯 Funcionalidades 
- [x] Buscar Viagens: Os usuários podem buscar viagens por localidade, data e orçamento.
Ver Detalhes de uma Viagem: Os usuários podem visualizar informações detalhadas sobre uma viagem, incluindo fotos, descrição, imagem de capa, destaques da acomodação, preço por noite, datas disponíveis e quantidade máxima de hóspedes.

- [x] Reservar uma Viagem: Os usuários podem fazer reservas para uma viagem.
Ver Viagens Reservadas pelo Usuário: Os usuários podem visualizar as viagens que já foram reservadas por eles.

- [x] Cancelar uma Viagem: Os usuários podem cancelar uma reserva de viagem.
- [x] Autenticação com o Google: Os usuários podem autenticar usando suas contas do Google.
- [x]Pagamento com o Stripe: A aplicação integra-se ao sistema de pagamentos Stripe para transações online seguras.

## 🔧 Tecnologias 
ReactJS
Next.js
Tailwind CSS
PostgreSQL
Prisma ORM
Next Auth
Stripe
Entidades do Banco de Dados

## 💾 Banco de dados
A aplicação utiliza as seguintes entidades no banco de dados:

TRIP: Armazena informações sobre as viagens, incluindo localidade, datas, preço e detalhes da acomodação.

USER: Armazena informações dos usuários, incluindo detalhes de autenticação.

TRIPRESERVATION: Armazena informações sobre as reservas de viagens dos usuários, relacionando usuários com viagens específicas.

## 🔒 Rotas
A aplicação disponibiliza as seguintes rotas da API:

Recupera as reservas feitas por um usuário específico. </br>
`GET` - `/api/[userId]/reservations `

Verifica a disponibilidade de uma viagem.</br>
`POST` - `/api/trips/check` 

Busca viagens com base em critérios especificados.</br>
`GET` - `/api/trips/search` 

Faz uma reserva para uma viagem.</br>
`POST` - `/api/trips/reservation` 

Cancela uma reserva de viagem.</br>
`DELETE` - `/api/trips/reservation/[reservationId]` 


## Instalação
Para executar a aplicação localmente, siga estas etapas:

Clone o repositório:
```bash
git clone https://github.com/RenanFachin/PD_Fullstack-trips.git
```

Instale as dependências: 
```bash
npm install
```

Atualize as variáveis de ambiente
```bash
DATABASE_URL=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

NEXT_PUBLIC_STRIPE_KEY=
STRIPE_SECRET_KEY=

HOST_URL=http://localhost:3000
NEXTAUTH_SECRET=
```

Configure o banco de dados
```bash
npx prisma migrate dev
```

Inicie a aplicação: 
```bash
npm run  dev
```

Acesse a aplicação
```bash
http://localhost:3000
```