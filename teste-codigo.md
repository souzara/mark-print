# Teste de Impressão com Syntax Highlighting

## Código JavaScript

```javascript
// Função para calcular a soma de dois números
function soma(a, b) {
    return a + b;
}

// Variável com string
const mensagem = "Olá, mundo!";

// Array de números
const numeros = [1, 2, 3, 4, 5];

// Objeto com propriedades
const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

// Loop com template string
for (let i = 0; i < numeros.length; i++) {
    console.log(`Número ${i + 1}: ${numeros[i]}`);
}
```

## Código Python

```python
# Importar biblioteca
import os
import sys

# Função para verificar se arquivo existe
def verificar_arquivo(caminho):
    if os.path.exists(caminho):
        return True
    else:
        return False

# Classe simples
class Calculadora:
    def __init__(self):
        self.resultado = 0
    
    def somar(self, a, b):
        self.resultado = a + b
        return self.resultado

# Lista com compreensão
numeros = [x * 2 for x in range(10)]

# String com formatação
nome = "Maria"
idade = 25
print(f"{nome} tem {idade} anos")
```

## Código CSS

```css
/* Estilos para container principal */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
}

/* Estilos para botões */
.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease;
}

.btn-primary {
    background-color: #007bff;
    color: white;
}

.btn-primary:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
}

/* Media queries */
@media (max-width: 768px) {
    .container {
        padding: 10px;
    }
    
    .btn {
        width: 100%;
        margin-bottom: 10px;
    }
}
```

## Código HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de Teste</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Título Principal</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
        
        <main>
            <section id="home">
                <h2>Bem-vindo</h2>
                <p>Este é um parágrafo de exemplo.</p>
                <button class="btn btn-primary">Clique aqui</button>
            </section>
        </main>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

## Código Bash

```bash
#!/bin/bash

# Script para backup de arquivos
echo "Iniciando backup..."

# Criar diretório de backup
mkdir -p /backup/$(date +%Y%m%d)

# Copiar arquivos importantes
cp -r /home/user/documents/* /backup/$(date +%Y%m%d)/

# Verificar se o backup foi bem-sucedido
if [ $? -eq 0 ]; then
    echo "Backup concluído com sucesso!"
else
    echo "Erro durante o backup!"
    exit 1
fi

# Listar arquivos de backup
ls -la /backup/$(date +%Y%m%d)/
```

## Código SQL

```sql
-- Criar tabela de usuários
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir dados de exemplo
INSERT INTO usuarios (nome, email) VALUES 
    ('João Silva', 'joao@email.com'),
    ('Maria Santos', 'maria@email.com'),
    ('Pedro Costa', 'pedro@email.com');

-- Consulta com JOIN
SELECT 
    u.nome,
    u.email,
    COUNT(p.id) as total_posts
FROM usuarios u
LEFT JOIN posts p ON u.id = p.usuario_id
WHERE u.data_criacao >= '2024-01-01'
GROUP BY u.id
ORDER BY total_posts DESC;
```

---

**Nota:** Este arquivo contém exemplos de código em diferentes linguagens para testar se o syntax highlighting está sendo preservado corretamente na impressão. 