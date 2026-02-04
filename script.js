// Configuração do Marked para renderização do markdown
marked.setOptions({
    highlight: function(code, lang) {
        // Blocos mermaid não são destacados como código
        if (lang === 'mermaid') {
            return code;
        }
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(code, { language: lang }).value;
            } catch (err) {
                console.error('Erro ao destacar código:', err);
            }
        }
        return hljs.highlightAuto(code).value;
    },
    breaks: true,
    gfm: true
});

// Inicializar Mermaid (sem auto-run; controlamos manualmente) — tema moderno
if (typeof mermaid !== 'undefined') {
    mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'loose',
        theme: 'base',
        themeVariables: {
            fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif',
            fontSize: '15px',
            primaryColor: '#e0f2fe',
            primaryTextColor: '#0c4a6e',
            primaryBorderColor: '#0ea5e9',
            secondaryColor: '#f0f9ff',
            secondaryTextColor: '#0369a1',
            secondaryBorderColor: '#38bdf8',
            tertiaryColor: '#f8fafc',
            tertiaryTextColor: '#334155',
            lineColor: '#64748b',
            textColor: '#334155',
            mainBkg: '#e0f2fe',
            nodeBorder: '#0ea5e9',
            clusterBkg: '#f1f5f9',
            titleColor: '#0f172a',
            edgeLabelBackground: '#f8fafc',
            nodeTextColor: '#0c4a6e',
            background: '#ffffff'
        }
    });
}

// Elementos do DOM
const markdownEditor = document.getElementById('markdownEditor');
const preview = document.getElementById('preview');
const downloadBtn = document.getElementById('downloadBtn');
const printBtn = document.getElementById('printBtn');
const copyBtn = document.getElementById('copyBtn');
const uploadBtn = document.getElementById('uploadBtn');
const fileUpload = document.getElementById('fileUpload');
const installBtn = document.getElementById('installBtn');

// Variáveis para PWA
let deferredPrompt;

// Função para mostrar toast message
function showToast(message, type = 'success') {
    // Remover toast existente se houver
    const existingToast = document.querySelector('.toast-message');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Criar toast
    const toast = document.createElement('div');
    toast.className = `toast-message toast-${type}`;
    toast.textContent = message;
    
    // Estilos do toast
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 12px 20px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 99999999;
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // Animar entrada
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.remove();
            }
        }, 300);
    }, 3000);
}

// Função para gerar exemplo de markdown baseado no idioma (showcase do Mark Print + todos os recursos)
function getExampleMarkdown() {
    return `${i18n.t('exampleTitle')}

${i18n.t('exampleSubtitle')}

${i18n.t('exampleFeaturesTitle')}

- ${i18n.t('exampleFeature1')}
- ${i18n.t('exampleFeature2')}
- ${i18n.t('exampleFeature3')}
- ${i18n.t('exampleFeature4')}
- ${i18n.t('exampleFeature5')}
- ${i18n.t('exampleFeature6')}

${i18n.t('exampleHowTitle')}

1. ${i18n.t('exampleStep1')}
2. ${i18n.t('exampleStep2')}
3. ${i18n.t('exampleStep3')}

### Bloco de código

${i18n.t('exampleCodeComment')}:

\`\`\`javascript
// Exemplo de código com destaque de sintaxe
function hello() {
  return "Olá, Mark Print!";
}
\`\`\`

### Citação

> ${i18n.t('exampleTip')}

${i18n.t('exampleShortcutsTitle')}

| Atalho | Ação |
|--------|------|
| \`Ctrl\` + \`Enter\` | Baixar PDF |
| \`Ctrl\` + \`Shift\` + \`P\` | Imprimir |
| \`Ctrl\` + \`Shift\` + \`C\` | Copiar HTML |
| \`Ctrl\` + \`O\` | Abrir arquivo .md |

${i18n.t('exampleWorkflowTitle')}

\`\`\`mermaid
flowchart LR
    A[Editor Markdown] --> B[Preview]
    B --> C[Download PDF]
    B --> D[Imprimir]
    B --> E[Copiar HTML]
\`\`\`

---

${i18n.t('exampleSource')}
`;
}

// Função para renderizar diagramas Mermaid no preview
function renderMermaidBlocks(container) {
    if (typeof mermaid === 'undefined') return;
    const mermaidBlocks = container.querySelectorAll('pre code.language-mermaid');
    mermaidBlocks.forEach((block) => {
        const pre = block.closest('pre');
        if (!pre) return;
        const source = block.textContent.trim();
        const div = document.createElement('div');
        div.className = 'mermaid';
        div.textContent = source;
        pre.parentNode.replaceChild(div, pre);
    });
    const mermaidNodes = container.querySelectorAll('.mermaid');
    if (mermaidNodes.length) {
        mermaid.run({ nodes: mermaidNodes }).catch((err) => {
            console.error('Erro ao renderizar Mermaid:', err);
        });
    }
}

// Função para renderizar markdown
function renderMarkdown() {
    const markdownText = markdownEditor.value;
    if (markdownText.trim() === '') {
        preview.innerHTML = `<p style="color: #6c757d; text-align: center; margin-top: 50px;">${i18n.t('emptyPreview')}</p>`;
        return;
    }
    
    try {
        const htmlContent = marked.parse(markdownText);
        preview.innerHTML = htmlContent;
        
        // Renderizar blocos Mermaid antes do highlight (substitui os pre/code)
        renderMermaidBlocks(preview);
        
        // Aplicar highlight.js aos blocos de código restantes
        preview.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });
    } catch (error) {
        preview.innerHTML = `<p style="color: #dc3545;">${i18n.t('errorRendering')}${error.message}</p>`;
    }
}

// Função para download do PDF
function downloadPDF() {
    const markdownText = markdownEditor.value;
    if (markdownText.trim() === '') {
        alert(i18n.t('addContentFirst'));
        return;
    }
    
    // Mostrar toast de loading
    showToast(i18n.t('generating'), 'success');
    
    try {
        // Largura A3 (297mm) — conteúdo quebra dentro dessa largura
        const PAGE_WIDTH_MM = 297;
        const cloneWidthPx = Math.round((PAGE_WIDTH_MM / 25.4) * 96);

        // Clonar o preview atual com todos os estilos
        const previewClone = preview.cloneNode(true);
        previewClone.style.cssText = `
            position: absolute;
            left: -9999px;
            top: 0;
            width: ${cloneWidthPx}px;
            max-width: ${cloneWidthPx}px;
            background: white;
            padding: 40px;
            margin: 0;
            border: none;
            box-shadow: none;
            overflow: visible;
            height: auto;
            min-height: auto;
            overflow-wrap: break-word;
            word-wrap: break-word;
        `;
        
        // Aplicar estilos de impressão ao clone
        previewClone.style.fontSize = '9pt';
        
        // Estilos para caber na página: quebra de linha em tabelas, código e texto longo
        const style = document.createElement('style');
        style.textContent = `
            .preview-content { box-sizing: border-box !important; }
            .preview-content h1 { font-size: 14pt !important; }
            .preview-content h2 { font-size: 12pt !important; }
            .preview-content h3 { font-size: 11pt !important; }
            .preview-content pre { font-size: 8pt !important; white-space: pre-wrap !important; word-wrap: break-word !important; overflow-wrap: break-word !important; max-width: 100% !important; }
            .preview-content code { font-size: 8pt !important; word-break: break-word !important; }
            .preview-content p, .preview-content li, .preview-content blockquote { font-size: 9pt !important; word-wrap: break-word !important; overflow-wrap: break-word !important; }
            .preview-content table { font-size: 8pt !important; table-layout: fixed !important; width: 100% !important; max-width: 100% !important; }
            .preview-content th, .preview-content td { padding: 6px !important; word-wrap: break-word !important; overflow-wrap: break-word !important; word-break: break-word !important; }
            .preview-content .mermaid, .preview-content .mermaid svg { max-width: 100% !important; height: auto !important; }
        `;
        previewClone.appendChild(style);
        
        document.body.appendChild(previewClone);
        
        // Usar html2canvas para capturar o conteúdo (largura fixa A4, conteúdo quebrado)
        html2canvas(previewClone, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            width: cloneWidthPx,
            height: previewClone.scrollHeight
        }).then(canvas => {
            // Remover elemento temporário
            document.body.removeChild(previewClone);
            
            const { jsPDF } = window.jspdf;
            // Página A3 (297mm) de largura, altura proporcional ao conteúdo
            const pdfWidthMm = PAGE_WIDTH_MM;
            const pdfHeightMm = (canvas.height / canvas.width) * pdfWidthMm;
            const pdf = new jsPDF({ orientation: 'p', unit: 'mm', format: [pdfWidthMm, pdfHeightMm] });
            
            const imgData = canvas.toDataURL('image/png');
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidthMm, pdfHeightMm);
            
            const fileName = `documento_${new Date().toISOString().slice(0, 10)}.pdf`;
            pdf.save(fileName);
            
            showToast(i18n.t('pdfGenerated'), 'success');
            
        }).catch(error => {
            console.error('Erro ao gerar PDF:', error);
            showToast(i18n.t('errorGenerating'), 'error');
        });
        
    } catch (error) {
        console.error('Erro ao processar markdown:', error);
        showToast(i18n.t('errorProcessing'), 'error');
    }
}

// Função para imprimir
function printContent() {
    const markdownText = markdownEditor.value;
    if (markdownText.trim() === '') {
        alert(i18n.t('addContentPrint'));
        return;
    }
    
    // Simplesmente chamar window.print() - os estilos já estão no CSS
    window.print();
}

// Função para copiar HTML
function copyHTML() {
    const markdownText = markdownEditor.value;
    if (markdownText.trim() === '') {
        alert(i18n.t('addContentCopy'));
        return;
    }
    
    try {
        const htmlContent = marked.parse(markdownText);
        navigator.clipboard.writeText(htmlContent).then(() => {
            // Mostrar toast de sucesso
            showToast(i18n.t('copied'), 'success');
        }).catch(err => {
            console.error('Erro ao copiar:', err);
            showToast(i18n.t('errorCopying'), 'error');
        });
    } catch (error) {
        showToast(i18n.t('errorGeneratingHTML') + error.message, 'error');
    }
}

// Função para carregar exemplo
function loadExample() {
    markdownEditor.value = getExampleMarkdown();
    renderMarkdown();
}

// Função para upload de arquivo
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Verificar se é um arquivo .md
    if (!file.name.toLowerCase().endsWith('.md')) {
        alert('Por favor, selecione apenas arquivos .md');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        markdownEditor.value = e.target.result;
        renderMarkdown();
        
        // Mostrar toast de sucesso
        showToast(i18n.t('fileLoaded'), 'success');
    };
    
    reader.onerror = function() {
        showToast('Erro ao ler o arquivo. Tente novamente.', 'error');
    };
    
    reader.readAsText(file);
}

// Função para abrir seletor de arquivo
function openFileSelector() {
    fileUpload.click();
}

// Funções para PWA
function showInstallPromotion() {
    installBtn.style.display = 'inline-flex';
}

function hideInstallPromotion() {
    installBtn.style.display = 'none';
}

function installPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
                showToast(i18n.t('appInstalled'), 'success');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
            hideInstallPromotion();
        });
    }
}

// Event listeners
markdownEditor.addEventListener('input', renderMarkdown);
downloadBtn.addEventListener('click', downloadPDF);
printBtn.addEventListener('click', printContent);
copyBtn.addEventListener('click', copyHTML);
uploadBtn.addEventListener('click', openFileSelector);
fileUpload.addEventListener('change', handleFileUpload);
installBtn.addEventListener('click', installPWA);

// Event listeners para PWA
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallPromotion();
});

window.addEventListener('appinstalled', () => {
    hideInstallPromotion();
    deferredPrompt = null;
    showToast(i18n.t('appInstalled'), 'success');
});

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Registrar service worker para PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('Service Worker registered successfully:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    }
    
    // Inicializar sistema de internacionalização
    i18n.init();
    
    // Renderizar preview inicial
    renderMarkdown();
    
    // Focar no editor
    markdownEditor.focus();
    
    // Adicionar atalhos de teclado
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + Enter para download PDF
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            downloadPDF();
        }
        
        // Ctrl/Cmd + Shift + P para imprimir
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'P') {
            e.preventDefault();
            printContent();
        }
        
        // Ctrl/Cmd + Shift + C para copiar HTML
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
            e.preventDefault();
            copyHTML();
        }
        
        // Ctrl/Cmd + O para abrir arquivo
        if ((e.ctrlKey || e.metaKey) && e.key === 'o') {
            e.preventDefault();
            openFileSelector();
        }
    });
});



// Carregar exemplo automaticamente
window.addEventListener('load', function() {
    // Carregar exemplo ao entrar na página
    loadExample();
}); 