Kards - Sistema de Gerenciamento de Tarefas em Quadros Kanban

https://via.placeholder.com/150x50/0068FF/FFFFFF?text=KARDS

📋 Visão Geral

Kards é uma aplicação web sofisticada para gerenciamento de tarefas baseada na metodologia Kanban. Com uma interface elegante e recursos avançados, o Kards permite organizar suas atividades em quadros e cartões personalizáveis, proporcionando uma experiência fluida e altamente produtiva.

✨ Características Principais

· Interface Drag-and-Drop: Arraste e solte cartões e itens para uma organização intuitiva
· Múltiplos Quadros: Crie diferentes quadros para diversos projetos ou categorias
· Persistência de Dados: Seus dados são salvos automaticamente no navegador
· Design Responsivo: Interface adaptável que funciona em diferentes dispositivos
· Modo Escuro: Tema escuro elegante que reduz a fadiga visual
· Menu Contextual: Ações rápidas com clique direito nos cartões
· Sistema de Alertas: Notificações para confirmar ações importantes
· Auto-save: Suas alterações são salvas automaticamente a cada 5 segundos

🚀 Começando

Pré-requisitos

Navegador web moderno com suporte a JavaScript:

· Chrome 60+
· Firefox 55+
· Safari 12+
· Edge 79+

Instalação

1. Faça o download ou clone o repositório
2. Extraia os arquivos em uma pasta local
3. Abra o arquivo index.html em seu navegador
4. Comece a usar o Kards imediatamente!

Como Usar

1. Criando seu Primeiro Quadro:
   · Clique no botão de menu (☰) no canto superior esquerdo
   · Digite um nome para seu quadro no campo de texto na barra lateral
   · Clique no botão "+" ou pressione Enter
2. Adicionando Cartões:
   · No campo de texto abaixo do título do quadro, digite o nome do cartão
   · Clique no botão "+" ou pressione Enter
3. Adicionando Tarefas:
   · Dentro de cada cartão, clique no campo de texto
   · Digite o nome da tarefa e pressione Enter
4. Gerenciando Itens:
   · Marque/desmarque itens clicando na caixa de seleção
   · Exclua itens clicando no ícone de lixeira
   · Use arrastar e soltar para reorganizar itens
5. Menu Contextual do Cartão:
   · Clique com o botão direito em qualquer cartão para acessar opções avançadas:
     · Limpar cartão (remove todas as tarefas)
     · Duplicar cartão
     · Excluir cartão

🛠️ Tecnologias Utilizadas

· HTML5: Estrutura semântica da aplicação
· CSS3: Estilização avançada com variáveis CSS e Flexbox
· JavaScript ES6+: Funcionalidades interativas e lógica de aplicação
· LocalStorage API: Persistência de dados no navegador
· Google Fonts: Tipografia moderna (Be Vietnam Pro, Nunito)

📁 Estrutura do Projeto

```
kards/
├── index.html          # Arquivo principal HTML
├── style.css           # Estilos da aplicação
├── script.js           # Lógica JavaScript da aplicação
└── README.md           # Documentação do projeto
```

🔧 Personalização

Temas de Cores

Kards utiliza variáveis CSS para cores, facilitando a personalização. Modifique as cores no arquivo CSS:

```css
:root {
  --app-container: #0068FF;
  --main-color: #1f1c2e;
  --secondary-color: #4A4A4A;
  /* Adicione suas cores personalizadas aqui */
}
```

📊 Estrutura de Dados

A aplicação utiliza uma estrutura de dados hierárquica:

```javascript
{
  "boards": [
    {
      "name": "Nome do Quadro",
      "id": "identificador-único",
      "cards": [
        {
          "name": "Nome do Cartão",
          "id": "identificador-único",
          "items": [
            {
              "title": "Título da Tarefa",
              "description": "Descrição opcional",
              "id": "identificador-único",
              "isDone": false
            }
          ]
        }
      ]
    }
  ],
  "currentBoard": 0,
  "settings": {
    "userName": "Usuário",
    "defaultTheme": "blue",
    "dataPersistence": true
  }
}
```

🔄 Funcionalidades Avançadas

Sistema de Auto-save

· Salva automaticamente a cada 5 segundos
· Pode ser desativado nas configurações
· Salvamento manual disponível através do botão "Save"

Confirmação de Ações Destrutivas

· Diálogos de confirmação para exclusão de quadros e cartões
· Prevenção contra perda acidental de dados

Gestão de Estado

· Controle de estado da aplicação através de um objeto centralizado
· Sistema de identificadores únicos para todos os elementos

🐛 Solução de Problemas

Dados Não Estão Sendo Salvos

· Verifique se o auto-save está ativado
· Certifique-se de que seu navegador não está bloqueando LocalStorage

Aplicação Não Responde

· Recarregue a página para reinicializar a aplicação
· Verifique o console do navegador para mensagens de erro (F12)

Problemas de Renderização

· Limpe o cache do navegador (Ctrl+F5)
· Verifique se JavaScript está habilitado

📝 Notas de Versão

v1.5 (2021)

· Implementação completa do sistema de arrastar e soltar
· Melhorias na interface do usuário
· Otimizações de performance
· Correções de bugs conhecidos

🚧 Próximas Atualizações

· Sincronização em nuvem
· Compartilhamento de quadros
· Modo de exibição de calendário
· Etiquetas e categorias
· Lembretes e prazos
· Relatórios e estatísticas
· API pública para integrações
· Aplicativos móveis nativos

👥 Contribuição

Contribuições são bem-vindas! Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)
3. Commit suas mudanças (git commit -m 'Add some AmazingFeature')
4. Push para a branch (git push origin feature/AmazingFeature)
5. Abra um Pull Request

📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

🤝 Suporte

Se você encontrar problemas ou tiver sugestões:

1. Verifique a documentação acima
2. Procure por issues existentes no repositório
3. Crie uma nova issue com detalhes do problema ou sugestão

📞 Contato

· Email: [seu-email@provedor.com]
· Site: [https://seu-site.com]
· Twitter: [@seu-usuario]

---

Kards - Organize. Priorize. Produza.