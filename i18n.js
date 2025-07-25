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
            emptyPreview: "Type or paste your markdown in the editor to see the preview...",
            
            // Botões de feedback
            copied: "✅ Copied!",
            generating: "⏳ Generating PDF...",
            fileLoaded: "File loaded successfully!",
            pdfGenerated: "PDF generated successfully!",
            
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
            
            // Exemplo de markdown
            exampleTitle: "# .NET SDK Installation and dump collection on Linux",
            exampleUpdate: "## Update system packages",
            exampleInstallCurl: "## Install `curl`, necessary to download .NET",
            exampleDownload: "## Download and install .NET SDK",
            exampleLatest: "### For **latest** SDK version:",
            exampleSpecific: "### For **specific** SDK version:",
            examplePath: "## Configure `PATH` to recognize .NET",
            exampleTest: "## Test if installation was successful",
            exampleNote: "> **Note:** This is an example of technical documentation in markdown.",
            exampleCommands: "### List of important commands:",
            exampleTable: "### Supported versions table:",
            exampleSource: "**Source:** Official Microsoft documentation"
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
            emptyPreview: "Digite ou cole seu markdown no editor para ver o preview...",
            
            // Botões de feedback
            copied: "✅ Copiado!",
            generating: "⏳ Gerando PDF...",
            fileLoaded: "Arquivo carregado com sucesso!",
            pdfGenerated: "PDF gerado com sucesso!",
            
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
            
            // Exemplo de markdown
            exampleTitle: "# Instalação do .NET SDK e coleta de dump no Linux",
            exampleUpdate: "## Atualiza os pacotes do sistema",
            exampleInstallCurl: "## Instala o `curl`, necessário para baixar o .NET",
            exampleDownload: "## Baixa e instala o .NET SDK",
            exampleLatest: "### Para **última versão** do SDK:",
            exampleSpecific: "### Para **versão específica** do SDK:",
            examplePath: "## Configura o `PATH` para reconhecer o .NET",
            exampleTest: "## Testa se a instalação foi bem-sucedida",
            exampleNote: "> **Nota:** Este é um exemplo de documentação técnica em markdown.",
            exampleCommands: "### Lista de comandos importantes:",
            exampleTable: "### Tabela de versões suportadas:",
            exampleSource: "**Fonte:** Documentação oficial da Microsoft"
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
            emptyPreview: "Escribe o pega tu markdown en el editor para ver la vista previa...",
            
            // Botões de feedback
            copied: "✅ ¡Copiado!",
            generating: "⏳ Generando PDF...",
            fileLoaded: "¡Archivo cargado exitosamente!",
            pdfGenerated: "¡PDF generado exitosamente!",
            
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
            
            // Exemplo de markdown
            exampleTitle: "# Instalación del SDK de .NET y recolección de dump en Linux",
            exampleUpdate: "## Actualiza los paquetes del sistema",
            exampleInstallCurl: "## Instala `curl`, necesario para descargar .NET",
            exampleDownload: "## Descarga e instala el SDK de .NET",
            exampleLatest: "### Para la **última versión** del SDK:",
            exampleSpecific: "### Para una **versión específica** del SDK:",
            examplePath: "## Configura el `PATH` para reconocer .NET",
            exampleTest: "## Prueba si la instalación fue exitosa",
            exampleNote: "> **Nota:** Este es un ejemplo de documentación técnica en markdown.",
            exampleCommands: "### Lista de comandos importantes:",
            exampleTable: "### Tabla de versiones soportadas:",
            exampleSource: "**Fuente:** Documentación oficial de Microsoft"
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
        
        if (githubStar) githubStar.textContent = this.t('githubStar');
        if (githubLink) githubLink.textContent = this.t('githubLink');
        if (githubCompact) githubCompact.textContent = this.t('githubCompact');
        if (openSource) openSource.textContent = this.t('openSource');
    },
    
    // Atualizar tooltips
    updateTooltips() {
        const tooltips = {
            'uploadBtnTitle': document.getElementById('uploadBtn'),
            'downloadBtnTitle': document.getElementById('downloadBtn'),
            'printBtnTitle': document.getElementById('printBtn'),
            'copyBtnTitle': document.getElementById('copyBtn'),
            'editorTitle': document.getElementById('markdownEditor'),
            'githubLink': document.querySelector('.github-link-compact')
        };
        
        Object.keys(tooltips).forEach(key => {
            const element = tooltips[key];
            if (element) {
                const translation = this.t(key);
                element.title = translation;
            }
        });
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