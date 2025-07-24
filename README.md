# 📄 Mark Print - Conversor Markdown para PDF

Uma aplicação web simples e elegante para converter documentos Markdown em PDF com preview em tempo real.

## ✨ Funcionalidades

- **Editor Markdown**: Interface limpa para escrever ou colar código markdown
- **Preview em Tempo Real**: Visualização instantânea do resultado
- **Impressão para PDF**: Botão dedicado para gerar PDF
- **Syntax Highlighting**: Destaque de sintaxe para blocos de código
- **Impressão com Cores**: Preserva cores de fundo e syntax highlighting na impressão
- **Internacionalização**: Suporte para Inglês, Português e Espanhol
- **Detecção Automática**: Identifica automaticamente o idioma do navegador
- **Responsivo**: Funciona em desktop e dispositivos móveis
- **Auto-save**: Salva automaticamente o conteúdo no navegador
- **Atalhos de Teclado**: Comandos rápidos para imprimir e copiar

## 🚀 Como Usar

1. **Abra o arquivo `index.html`** no seu navegador
2. **Cole ou digite** seu código markdown no editor
3. **Visualize** o resultado no preview ao lado
4. **Clique em "🖨️ Imprimir PDF"** para gerar o PDF
5. **Use "📋 Copiar HTML"** para copiar o HTML gerado

## ⌨️ Atalhos de Teclado

- **Ctrl/Cmd + Enter**: Imprimir PDF
- **Ctrl/Cmd + Shift + C**: Copiar HTML

## 📋 Exemplo de Markdown Suportado

A aplicação suporta todos os elementos padrão do Markdown:

- **Títulos**: `# ## ###`
- **Negrito**: `**texto**`
- **Itálico**: `*texto*`
- **Código inline**: `` `código` ``
- **Blocos de código**: ```bash ... ```
- **Listas**: `- item` ou `1. item`
- **Links**: `[texto](url)`
- **Imagens**: `![alt](url)`
- **Tabelas**: `| coluna | coluna |`
- **Citações**: `> texto`
- **Linhas horizontais**: `---`

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da aplicação
- **CSS3**: Estilos modernos e responsivos
- **JavaScript Vanilla**: Funcionalidades sem dependências
- **Marked.js**: Conversão de Markdown para HTML
- **Highlight.js**: Destaque de sintaxe para código
- **Sistema i18n**: Internacionalização personalizada

## 📁 Estrutura do Projeto

```
markprint/
├── index.html          # Arquivo principal
├── styles.css          # Estilos da aplicação
├── script.js           # Funcionalidades JavaScript
├── i18n.js             # Sistema de internacionalização
├── teste-codigo.md     # Arquivo de teste em português
├── teste-espanol.md    # Arquivo de teste em espanhol
└── README.md           # Este arquivo
```

## 🎨 Características do Design

- **Interface Moderna**: Design limpo e profissional
- **Gradiente Atraente**: Background com gradiente roxo/azul
- **Animações Suaves**: Transições e efeitos visuais
- **Tipografia Clara**: Fonte legível e hierarquia visual
- **Cores Harmoniosas**: Paleta de cores consistente

## 🔧 Personalização

Você pode personalizar a aplicação editando:

- **`styles.css`**: Cores, fontes e layout
- **`script.js`**: Funcionalidades e comportamento
- **`index.html`**: Estrutura e conteúdo

## 📱 Compatibilidade

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móveis

## 🚀 Como Executar

1. Clone ou baixe os arquivos
2. Abra `index.html` no navegador
3. Comece a usar!

Não requer instalação de dependências ou servidor web.

## 🌍 Idiomas Suportados

A aplicação suporta três idiomas:

- **🇺🇸 Inglês (en)**: Idioma padrão
- **🇧🇷 Português (pt)**: Suporte completo
- **🇪🇸 Espanhol (es)**: Suporte completo

### Detecção Automática

A aplicação detecta automaticamente o idioma do seu navegador e:
- Se for português, espanhol ou inglês: usa o idioma detectado
- Se for qualquer outro idioma: assume inglês como padrão

### Mudança Manual de Idioma

Você pode alterar o idioma manualmente usando o seletor no canto superior direito da aplicação.

## 🧪 Testando a Impressão

Para testar se a impressão com cores está funcionando corretamente:

1. Abra um dos arquivos de teste (`teste-codigo.md` ou `teste-espanol.md`) em um editor de texto
2. Copie todo o conteúdo
3. Cole no editor do Mark Print
4. Clique em "🖨️ Imprimir" para testar a impressão
5. Verifique se os blocos de código mantêm suas cores de fundo e syntax highlighting

**Nota:** Certifique-se de que seu navegador e impressora suportam impressão colorida.

### Arquivos de Teste Disponíveis

- **`teste-codigo.md`**: Exemplos em português
- **`teste-espanol.md`**: Exemplos em espanhol

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente.

---

**Desenvolvido com ❤️ para facilitar a criação de PDFs a partir de Markdown** 