// Sistema de Internacionalização (i18n)
const i18n = {
    // Detectar idioma do navegador
    detectLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0].toLowerCase();
        
        // Mapear códigos de idioma para idiomas suportados
        const supportedLanguages = {
            'pt': 'pt',
            'pt-br': 'pt',
            'pt-pt': 'pt',
            'es': 'es',
            'es-es': 'es',
            'es-mx': 'es',
            'es-ar': 'es',
            'en': 'en',
            'en-us': 'en',
            'en-gb': 'en'
        };
        
        return supportedLanguages[langCode] || 'en';
    },
    
    // Traduções
    translations: {
        en: {
            // Interface principal
            title: "📄 Mark Print",
            subtitle: "Markdown to PDF Converter",
            
            // Editor
            editorTitle: "📝 Markdown Editor",
            editorPlaceholder: "Paste your markdown code here...",
            loadExample: "Load Example",
            loadExampleTitle: "Load markdown example",
            uploadBtnTitle: "Load .md file",
            editorTitle: "Type or paste your markdown content here",
            
            // Preview
            previewTitle: "👁️ Preview",
            downloadBtn: "📥 Download PDF",
            downloadBtnTitle: "Download PDF",
            printBtn: "🖨️ Print",
            printBtnTitle: "Print",
            copyBtn: "📋 Copy HTML",
            copyBtnTitle: "Copy HTML",
            previewMaximizeTitle: "Maximize preview",
            previewRestoreTitle: "Restore split view",
            emptyPreview: "Type or paste your markdown in the editor to see the preview...",
            
            // Botões de feedback
            copied: "✅ Copied!",
            generating: "⏳ Generating PDF...",
            fileLoaded: "File loaded successfully!",
            pdfGenerated: "PDF generated successfully!",
            installApp: "Install App",
            appInstalled: "App installed successfully!",
            
            // Mensagens
            addContentFirst: "Add content to the editor before generating PDF!",
            addContentPrint: "Add content to the editor before printing!",
            addContentCopy: "Add content to the editor before copying!",
            errorRendering: "Error rendering markdown: ",
            errorGenerating: "Error generating PDF. Try again.",
            errorProcessing: "Error processing markdown. Check the content.",
            errorCopying: "Error copying HTML. Try again.",
            errorGeneratingHTML: "Error generating HTML: ",
            
            // Footer
            footer: "Developed with ❤️ to facilitate PDF creation from Markdown",
            githubStar: "⭐ If you liked it, consider giving a star on GitHub!",
            githubLink: "View on GitHub",
            githubCompact: "GitHub",
            openSource: "🔓 Open Source",
            
            // Exemplo de markdown (Mark Print showcase)
            exampleTitle: "# Mark Print",
            exampleSubtitle: "Convert Markdown to PDF with live preview. Write in the editor and see the result instantly.",
            exampleFeaturesTitle: "## Features",
            exampleFeature1: "**Live preview** — See the rendered result as you type.",
            exampleFeature2: "**PDF download** — Generate a PDF from your document with one click.",
            exampleFeature3: "**Print** — Send directly to the printer.",
            exampleFeature4: "**Copy HTML** — Copy the generated HTML.",
            exampleFeature5: "**Mermaid diagrams** — Flowcharts, sequence diagrams and more.",
            exampleFeature6: "**Syntax highlighting** — Code blocks with language support.",
            exampleHowTitle: "## How to use",
            exampleStep1: "Type or paste your Markdown in the left panel.",
            exampleStep2: "Use the buttons above the preview: **Download PDF**, **Print** or **Copy HTML**.",
            exampleStep3: "You can also load a `.md` file from your computer.",
            exampleCodeComment: "Example: your document can contain code blocks with syntax highlighting",
            exampleShortcutsTitle: "## Keyboard shortcuts",
            exampleTip: "**Tip:** This default text demonstrates headings, lists, code, tables, blockquotes and Mermaid. Replace it with your own content!",
            exampleWorkflowTitle: "## Mark Print workflow",
            exampleSource: "**Project:** [Mark Print on GitHub](https://github.com/souzara/mark-print)"
        },
        
        pt: {
            // Interface principal
            title: "📄 Mark Print",
            subtitle: "Conversor Markdown para PDF",
            
            // Editor
            editorTitle: "📝 Editor Markdown",
            editorPlaceholder: "Cole seu código markdown aqui...",
            loadExample: "Carregar Exemplo",
            loadExampleTitle: "Carregar exemplo de markdown",
            uploadBtnTitle: "Carregar arquivo .md",
            editorTitle: "Digite ou cole seu conteúdo markdown aqui",
            
            // Preview
            previewTitle: "👁️ Preview",
            downloadBtn: "📥 Download PDF",
            downloadBtnTitle: "Baixar PDF",
            printBtn: "🖨️ Imprimir",
            printBtnTitle: "Imprimir",
            copyBtn: "📋 Copiar HTML",
            copyBtnTitle: "Copiar HTML",
            previewMaximizeTitle: "Maximizar preview",
            previewRestoreTitle: "Restaurar visualização dividida",
            emptyPreview: "Digite ou cole seu markdown no editor para ver o preview...",
            
            // Botões de feedback
            copied: "✅ Copiado!",
            generating: "⏳ Gerando PDF...",
            fileLoaded: "Arquivo carregado com sucesso!",
            pdfGenerated: "PDF gerado com sucesso!",
            installApp: "Instalar App",
            appInstalled: "App instalado com sucesso!",
            
            // Mensagens
            addContentFirst: "Adicione conteúdo no editor antes de gerar o PDF!",
            addContentPrint: "Adicione conteúdo no editor antes de imprimir!",
            addContentCopy: "Adicione conteúdo no editor antes de copiar!",
            errorRendering: "Erro ao renderizar markdown: ",
            errorGenerating: "Erro ao gerar o PDF. Tente novamente.",
            errorProcessing: "Erro ao processar o markdown. Verifique o conteúdo.",
            errorCopying: "Erro ao copiar o HTML. Tente novamente.",
            errorGeneratingHTML: "Erro ao gerar HTML: ",
            
            // Footer
            footer: "Desenvolvido com ❤️ para facilitar a criação de PDFs a partir de Markdown",
            githubStar: "⭐ Se você gostou, considere dar uma estrela no GitHub!",
            githubLink: "Ver no GitHub",
            githubCompact: "GitHub",
            openSource: "🔓 Open Source",
            
            // Exemplo de markdown (Mark Print showcase)
            exampleTitle: "# Mark Print",
            exampleSubtitle: "Conversor de Markdown para PDF com preview em tempo real. Escreva no editor e veja o resultado na hora.",
            exampleFeaturesTitle: "## Recursos",
            exampleFeature1: "**Preview em tempo real** — Veja o resultado renderizado enquanto digita.",
            exampleFeature2: "**Download em PDF** — Gere um PDF do seu documento com um clique.",
            exampleFeature3: "**Imprimir** — Envie direto para a impressora.",
            exampleFeature4: "**Copiar HTML** — Copie o HTML gerado.",
            exampleFeature5: "**Diagramas Mermaid** — Fluxogramas, diagramas de sequência e mais.",
            exampleFeature6: "**Destaque de sintaxe** — Blocos de código com suporte a linguagens.",
            exampleHowTitle: "## Como usar",
            exampleStep1: "Digite ou cole seu Markdown no painel esquerdo.",
            exampleStep2: "Use os botões acima do preview: **Baixar PDF**, **Imprimir** ou **Copiar HTML**.",
            exampleStep3: "Você também pode carregar um arquivo `.md` do seu computador.",
            exampleCodeComment: "Exemplo: seu documento pode ter blocos de código com destaque de sintaxe",
            exampleShortcutsTitle: "## Atalhos de teclado",
            exampleTip: "**Dica:** Este texto padrão mostra títulos, listas, código, tabelas, citações e Mermaid. Substitua pelo seu conteúdo!",
            exampleWorkflowTitle: "## Fluxo do Mark Print",
            exampleSource: "**Projeto:** [Mark Print no GitHub](https://github.com/souzara/mark-print)"
        },
        
        es: {
            // Interface principal
            title: "📄 Mark Print",
            subtitle: "Conversor de Markdown a PDF",
            
            // Editor
            editorTitle: "📝 Editor de Markdown",
            editorPlaceholder: "Pega tu código markdown aquí...",
            loadExample: "Cargar Ejemplo",
            uploadBtnTitle: "Cargar archivo .md",
            editorTitle: "Escribe o pega tu contenido markdown aquí",
            
            // Preview
            previewTitle: "👁️ Vista Previa",
            downloadBtn: "📥 Descargar PDF",
            downloadBtnTitle: "Descargar PDF",
            printBtn: "🖨️ Imprimir",
            printBtnTitle: "Imprimir",
            copyBtn: "📋 Copiar HTML",
            copyBtnTitle: "Copiar HTML",
            previewMaximizeTitle: "Maximizar vista previa",
            previewRestoreTitle: "Restaurar vista dividida",
            emptyPreview: "Escribe o pega tu markdown en el editor para ver la vista previa...",
            
            // Botões de feedback
            copied: "✅ ¡Copiado!",
            generating: "⏳ Generando PDF...",
            fileLoaded: "¡Archivo cargado exitosamente!",
            pdfGenerated: "¡PDF generado exitosamente!",
            installApp: "Instalar App",
            appInstalled: "¡App instalado exitosamente!",
            
            // Mensagens
            addContentFirst: "¡Agrega contenido al editor antes de generar PDF!",
            addContentPrint: "¡Agrega contenido al editor antes de imprimir!",
            addContentCopy: "¡Agrega contenido al editor antes de copiar!",
            errorRendering: "Error al renderizar markdown: ",
            errorGenerating: "Error al generar PDF. Intenta de nuevo.",
            errorProcessing: "Error al procesar markdown. Verifica el contenido.",
            errorCopying: "Error al copiar HTML. Intenta de nuevo.",
            errorGeneratingHTML: "Error al generar HTML: ",
            
            // Footer
            footer: "Desarrollado con ❤️ para facilitar la creación de PDFs desde Markdown",
            githubStar: "⭐ ¡Si te gustó, considera dar una estrella en GitHub!",
            githubLink: "Ver en GitHub",
            githubCompact: "GitHub",
            openSource: "🔓 Open Source",
            
            // Exemplo de markdown (Mark Print showcase)
            exampleTitle: "# Mark Print",
            exampleSubtitle: "Conversor de Markdown a PDF con vista previa en tiempo real. Escribe en el editor y ve el resultado al instante.",
            exampleFeaturesTitle: "## Recursos",
            exampleFeature1: "**Vista previa en tiempo real** — Ve el resultado renderizado mientras escribes.",
            exampleFeature2: "**Descargar PDF** — Genera un PDF de tu documento con un clic.",
            exampleFeature3: "**Imprimir** — Envía directo a la impresora.",
            exampleFeature4: "**Copiar HTML** — Copia el HTML generado.",
            exampleFeature5: "**Diagramas Mermaid** — Fluxogramas, diagramas de secuencia y más.",
            exampleFeature6: "**Resaltado de sintaxis** — Bloques de código con soporte de lenguajes.",
            exampleHowTitle: "## Cómo usar",
            exampleStep1: "Escribe o pega tu Markdown en el panel izquierdo.",
            exampleStep2: "Usa los botones sobre la vista previa: **Descargar PDF**, **Imprimir** o **Copiar HTML**.",
            exampleStep3: "También puedes cargar un archivo `.md` desde tu computadora.",
            exampleCodeComment: "Ejemplo: tu documento puede tener bloques de código con resaltado de sintaxis",
            exampleShortcutsTitle: "## Atajos de teclado",
            exampleTip: "**Consejo:** Este texto por defecto muestra títulos, listas, código, tablas, citas y Mermaid. ¡Sustitúyelo por tu contenido!",
            exampleWorkflowTitle: "## Flujo de Mark Print",
            exampleSource: "**Proyecto:** [Mark Print en GitHub](https://github.com/souzara/mark-print)"
        }
    },
    
    // Obter tradução
    t(key) {
        const currentLang = this.currentLanguage || this.detectLanguage();
        const translation = this.translations[currentLang];
        
        if (!translation) {
            console.warn(`Translation not found for language: ${currentLang}`);
            return this.translations.en[key] || key;
        }
        
        return translation[key] || this.translations.en[key] || key;
    },
    
    // Definir idioma
    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            this.updateInterface();
            localStorage.setItem('mdprint_language', lang);
        }
    },
    
    // Obter idioma atual
    getCurrentLanguage() {
        return this.currentLanguage || this.detectLanguage();
    },
    
    // Atualizar interface
    updateInterface() {
        // Atualizar elementos da interface
        const elements = {
            'title': document.querySelector('header h1'),
            'subtitle': document.querySelector('header p'),
            'editorTitle': document.querySelector('.editor-header h3'),
            'editorPlaceholder': document.getElementById('markdownEditor'),
            'previewTitle': document.querySelector('.preview-header h3'),
            'footer': document.querySelector('footer p')
        };
        
        Object.keys(elements).forEach(key => {
            const element = elements[key];
            if (element) {
                if (key === 'editorPlaceholder') {
                    element.placeholder = this.t(key);
                } else {
                    element.textContent = this.t(key);
                }
            }
        });
        
        // Atualizar seção do GitHub
        this.updateGitHubSection();
        
        // Atualizar tooltips
        this.updateTooltips();
    },
    
    // Atualizar seção do GitHub
    updateGitHubSection() {
        const githubStar = document.querySelector('.github-section p:first-child');
        const githubLink = document.querySelector('.github-link span');
        const githubCompact = document.querySelector('.github-link-compact span');
        const openSource = document.querySelector('.open-source');
        const installBtnSpan = document.getElementById('installBtn')?.querySelector('span');
        
        if (githubStar) githubStar.textContent = this.t('githubStar');
        if (githubLink) githubLink.textContent = this.t('githubLink');
        if (githubCompact) githubCompact.textContent = this.t('githubCompact');
        if (openSource) openSource.textContent = this.t('openSource');
        if (installBtnSpan) installBtnSpan.textContent = this.t('installApp');
    },
    
    // Atualizar tooltips
    updateTooltips() {
        const tooltips = {
            'uploadBtnTitle': document.getElementById('uploadBtn'),
            'downloadBtnTitle': document.getElementById('downloadBtn'),
            'printBtnTitle': document.getElementById('printBtn'),
            'copyBtnTitle': document.getElementById('copyBtn'),
            'editorTitle': document.getElementById('markdownEditor'),
            'githubLink': document.querySelector('.github-link-compact'),
            'installApp': document.getElementById('installBtn')
        };
        
        Object.keys(tooltips).forEach(key => {
            const element = tooltips[key];
            if (element) {
                const translation = this.t(key);
                element.title = translation;
            }
        });

        const togglePreviewBtn = document.getElementById('togglePreviewBtn');
        if (togglePreviewBtn) {
            const mainLayout = document.querySelector('main');
            const key = mainLayout?.classList.contains('preview-modal-open')
                ? 'previewRestoreTitle'
                : 'previewMaximizeTitle';
            togglePreviewBtn.title = this.t(key);
        }
    },
    
    // Inicializar
    init() {
        // Carregar idioma salvo ou detectar
        const savedLang = localStorage.getItem('mdprint_language');
        if (savedLang && this.translations[savedLang]) {
            this.currentLanguage = savedLang;
        } else {
            this.currentLanguage = this.detectLanguage();
        }
        
        // Atualizar interface
        this.updateInterface();
        
        // Criar seletor de idioma
        this.createLanguageSelector();
    },
    
    // Criar seletor de idioma com bandeiras
    createLanguageSelector() {
        const header = document.querySelector('header');
        const languageSelector = document.createElement('div');
        languageSelector.className = 'language-selector';
        
        const currentLang = this.getCurrentLanguage();
        
        languageSelector.innerHTML = `
            <div class="flag-buttons">
                <button class="flag-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en" title="English">
                    <img src="https://flagcdn.com/w40/us.png" alt="English" class="flag-img">
                </button>
                <button class="flag-btn ${currentLang === 'pt' ? 'active' : ''}" data-lang="pt" title="Português">
                    <img src="https://flagcdn.com/w40/br.png" alt="Português" class="flag-img">
                </button>
                <button class="flag-btn ${currentLang === 'es' ? 'active' : ''}" data-lang="es" title="Español">
                    <img src="https://flagcdn.com/w40/es.png" alt="Español" class="flag-img">
                </button>
            </div>
        `;
        
        header.appendChild(languageSelector);
        
        // Event listeners para os botões de bandeira
        const flagButtons = languageSelector.querySelectorAll('.flag-btn');
        flagButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = btn.dataset.lang;
                this.setLanguage(lang);
                
                // Atualizar classes ativas
                flagButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }
};

// Exportar para uso global
window.i18n = i18n; 