# 📖 Hub Literário

> Uma plataforma interativa desenvolvida para conectar professores e alunos através do compartilhamento de reflexões, análises paratextuais e mapeamento de contextos literários em ambiente escolar.

---

## 💻 Sobre o Projeto

O **Hub Literário** nasceu da necessidade de criar um espaço digital dinâmico e acolhedor focado na mediação pedagógica de obras literárias (como as mapeadas em pesquisas do PNLD Literário). A plataforma divide-se em duas grandes experiências:

1. **Espaço do Aluno:** Onde os estudantes exploram o acervo de obras disponíveis, aprofundam-se nas contextualizações (Histórica, Geográfica e Cultural) inseridas pelo docente e publicam suas próprias reflexões por capítulo utilizando uma senha de acesso fornecida para a turma.
2. **Painel do Professor:** Um ambiente protegido por credenciais onde o docente gerencia as métricas de engajamento da turma, cadastra novas obras, define senhas de acesso exclusivas e insere as diretrizes pedagógicas para cada leitura.

---

## 🛠️ Tecnologias e Ecossistema

O projeto foi construído utilizando práticas modernas de desenvolvimento web focado em componentização, tipagem estática e reatividade em tempo real:

| Camada | Tecnologia | Propósito / Uso no Projeto |
| :--- | :--- | :--- |
| **Front-end** | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | Arquitetura SPA, hooks customizados e gerenciamento de estados. |
| **Linguagem** | ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) | Tipagem estática de dados das interfaces da API (`Book`, `Reflection`). |
| **Interface** | ![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white) | Design System elegante baseado em Cards, Modais, Grids reativos e Tabs. |
| **Mock Data** | **MockAPI** | Banco de dados REST temporário simulando persistência de dados. |
| **Hospedagem**| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) | Plataforma de nuvem utilizada para o deploy contínuo do front-end. |

---

## 🎨 Identidade Visual e Tipografia

O design do Hub Literário foi planejado para evocar a sensação de um diário de bordo ou de uma biblioteca clássica e aconchegante, combinando fontes serifadas marcantes com elementos geométricos limpos:

* **Cormorant Garamond:** Utilizada em títulos e cabeçalhos principais para trazer sofisticação e o peso da tradição literária.
* **DM Sans / Roboto:** Utilizada para textos de leitura fluida, inputs de formulário e elementos de métricas, garantindo excelente legibilidade.
* **Paleta de Cores:** Baseada em tons de terracota suaves (`#BC5A33`), fundos creme quentes (`#FAF6EE`), detalhes em ouro escuro (`#F0B84A`) e feedbacks de sucesso em esmeralda pastel (`#11CAA0`).

---

## 🚀 Como Executar o Projeto Localmente

1. **Clonar o Repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/hub-literario.git](https://github.com/seu-usuario/hub-literario.git)
   cd hub-literario
