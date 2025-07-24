// Configuração do Marked para renderização do markdown
marked.setOptions({
    highlight: function(code, lang) {
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

// Elementos do DOM
const markdownEditor = document.getElementById('markdownEditor');
const preview = document.getElementById('preview');
const downloadBtn = document.getElementById('downloadBtn');
const printBtn = document.getElementById('printBtn');
const copyBtn = document.getElementById('copyBtn');
const loadExampleBtn = document.getElementById('loadExample');

// Função para gerar exemplo de markdown baseado no idioma
function getExampleMarkdown() {
    const lang = i18n.getCurrentLanguage();
    
    return `${i18n.t('exampleTitle')}

${i18n.t('exampleUpdate')}

\`\`\`bash
apt update && apt upgrade -y
\`\`\`

${i18n.t('exampleInstallCurl')}

\`\`\`bash
apt install -y curl
\`\`\`

${i18n.t('exampleDownload')}

### ${i18n.t('exampleLatest')}:

\`\`\`bash
curl -fsSL https://dot.net/v1/dotnet-install.sh | bash /dev/stdin
\`\`\`

### ${i18n.t('exampleSpecific')}:

\`\`\`bash
curl -fsSL https://dot.net/v1/dotnet-install.sh | bash /dev/stdin --version [versão]
\`\`\`

${i18n.t('examplePath')}

\`\`\`bash
export PATH="$HOME/.dotnet:$HOME/.dotnet/tools:$PATH"
\`\`\`

${i18n.t('exampleTest')}

\`\`\`bash
dotnet --version
dotnet tool list --global
\`\`\`

> ${i18n.t('exampleNote')}

### ${i18n.t('exampleCommands')}:

1. **Atualizar sistema**: \`apt update && apt upgrade -y\`
2. **Instalar curl**: \`apt install -y curl\`
3. **Instalar .NET**: \`curl -fsSL https://dot.net/v1/dotnet-install.sh | bash /dev/stdin\`

### ${i18n.t('exampleTable')}:

| Versão | Status | Data de Lançamento |
|--------|--------|-------------------|
| .NET 8.0 | ✅ Suportada | Novembro 2023 |
| .NET 7.0 | ✅ Suportada | Novembro 2022 |
| .NET 6.0 | ✅ Suportada | Novembro 2021 |

---

${i18n.t('exampleSource')}
`;
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
        
        // Aplicar highlight.js aos blocos de código
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
    
    // Mostrar loading
    downloadBtn.innerHTML = i18n.t('generating');
    downloadBtn.disabled = true;
    
    try {
        // Clonar o preview atual com todos os estilos
        const previewClone = preview.cloneNode(true);
        previewClone.style.cssText = `
            position: absolute;
            left: -9999px;
            top: 0;
            width: 800px;
            background: white;
            padding: 40px;
            margin: 0;
            border: none;
            box-shadow: none;
            overflow: visible;
            height: auto;
            min-height: auto;
        `;
        
        // Aplicar estilos de impressão ao clone
        previewClone.style.fontSize = '9pt';
        
        // Aplicar estilos específicos para impressão
        const style = document.createElement('style');
        style.textContent = `
            .preview-content h1 { font-size: 14pt !important; }
            .preview-content h2 { font-size: 12pt !important; }
            .preview-content h3 { font-size: 11pt !important; }
            .preview-content pre { font-size: 8pt !important; }
            .preview-content code { font-size: 8pt !important; }
            .preview-content p, .preview-content li, .preview-content blockquote { font-size: 9pt !important; }
            .preview-content table { font-size: 8pt !important; }
            .preview-content th, .preview-content td { padding: 6px !important; }
        `;
        previewClone.appendChild(style);
        
        document.body.appendChild(previewClone);
        
        // Usar html2canvas para capturar o conteúdo
        html2canvas(previewClone, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            width: 800,
            height: previewClone.scrollHeight
        }).then(canvas => {
            // Remover elemento temporário
            document.body.removeChild(previewClone);
            
            // Criar PDF
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF('p', 'mm', 'a4');
            
            const imgData = canvas.toDataURL('image/png');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = pdfWidth;
            const pageHeight = pdfHeight;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;
            
            // Adicionar primeira página
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
            
            // Adicionar páginas adicionais se necessário
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            
            // Download do PDF
            const fileName = `documento_${new Date().toISOString().slice(0, 10)}.pdf`;
            pdf.save(fileName);
            
            // Restaurar botão
            downloadBtn.innerHTML = i18n.t('downloadBtn');
            downloadBtn.disabled = false;
            
        }).catch(error => {
            console.error('Erro ao gerar PDF:', error);
            alert(i18n.t('errorGenerating'));
            downloadBtn.innerHTML = i18n.t('downloadBtn');
            downloadBtn.disabled = false;
        });
        
    } catch (error) {
        console.error('Erro ao processar markdown:', error);
        alert(i18n.t('errorProcessing'));
        downloadBtn.innerHTML = i18n.t('downloadBtn');
        downloadBtn.disabled = false;
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
            // Feedback visual
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = i18n.t('copied');
            copyBtn.style.background = '#28a745';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.style.background = '#6c757d';
            }, 2000);
        }).catch(err => {
            console.error('Erro ao copiar:', err);
            alert(i18n.t('errorCopying'));
        });
    } catch (error) {
        alert(i18n.t('errorGeneratingHTML') + error.message);
    }
}

// Função para carregar exemplo
function loadExample() {
    markdownEditor.value = getExampleMarkdown();
    renderMarkdown();
}

// Event listeners
markdownEditor.addEventListener('input', renderMarkdown);
downloadBtn.addEventListener('click', downloadPDF);
printBtn.addEventListener('click', printContent);
copyBtn.addEventListener('click', copyHTML);
loadExampleBtn.addEventListener('click', loadExample);

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
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
    });
});

// Auto-save no localStorage
markdownEditor.addEventListener('input', function() {
    localStorage.setItem('mdprint_content', markdownEditor.value);
});

// Carregar conteúdo salvo
window.addEventListener('load', function() {
    const savedContent = localStorage.getItem('mdprint_content');
    if (savedContent) {
        markdownEditor.value = savedContent;
        renderMarkdown();
    }
}); 