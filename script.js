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
const uploadBtn = document.getElementById('uploadBtn');
const fileUpload = document.getElementById('fileUpload');

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
    
    // Mostrar toast de loading
    showToast(i18n.t('generating'), 'success');
    
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
            
            // Mostrar toast de sucesso
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

// Event listeners
markdownEditor.addEventListener('input', renderMarkdown);
downloadBtn.addEventListener('click', downloadPDF);
printBtn.addEventListener('click', printContent);
copyBtn.addEventListener('click', copyHTML);
uploadBtn.addEventListener('click', openFileSelector);
fileUpload.addEventListener('change', handleFileUpload);

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