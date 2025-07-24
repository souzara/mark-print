# Prueba de Impresión con Syntax Highlighting

## Código JavaScript

```javascript
// Función para calcular la suma de dos números
function suma(a, b) {
    return a + b;
}

// Variable con string
const mensaje = "¡Hola, mundo!";

// Array de números
const numeros = [1, 2, 3, 4, 5];

// Objeto con propiedades
const persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

// Bucle con template string
for (let i = 0; i < numeros.length; i++) {
    console.log(`Número ${i + 1}: ${numeros[i]}`);
}
```

## Código Python

```python
# Importar biblioteca
import os
import sys

# Función para verificar si archivo existe
def verificar_archivo(ruta):
    if os.path.exists(ruta):
        return True
    else:
        return False

# Clase simple
class Calculadora:
    def __init__(self):
        self.resultado = 0
    
    def sumar(self, a, b):
        self.resultado = a + b
        return self.resultado

# Lista con comprensión
numeros = [x * 2 for x in range(10)]

# String con formato
nombre = "María"
edad = 25
print(f"{nombre} tiene {edad} años")
```

## Código CSS

```css
/* Estilos para contenedor principal */
.contenedor {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
}

/* Estilos para botones */
.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease;
}

.btn-primario {
    background-color: #007bff;
    color: white;
}

.btn-primario:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
}

/* Media queries */
@media (max-width: 768px) {
    .contenedor {
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
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de Prueba</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="contenedor">
        <header>
            <h1>Título Principal</h1>
            <nav>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </nav>
        </header>
        
        <main>
            <section id="inicio">
                <h2>Bienvenido</h2>
                <p>Este es un párrafo de ejemplo.</p>
                <button class="btn btn-primario">Haz clic aquí</button>
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

# Script para backup de archivos
echo "Iniciando backup..."

# Crear directorio de backup
mkdir -p /backup/$(date +%Y%m%d)

# Copiar archivos importantes
cp -r /home/usuario/documentos/* /backup/$(date +%Y%m%d)/

# Verificar si el backup fue exitoso
if [ $? -eq 0 ]; then
    echo "¡Backup completado con éxito!"
else
    echo "¡Error durante el backup!"
    exit 1
fi

# Listar archivos de backup
ls -la /backup/$(date +%Y%m%d)/
```

## Código SQL

```sql
-- Crear tabla de usuarios
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar datos de ejemplo
INSERT INTO usuarios (nombre, email) VALUES 
    ('Juan Silva', 'juan@email.com'),
    ('María Santos', 'maria@email.com'),
    ('Pedro Costa', 'pedro@email.com');

-- Consulta con JOIN
SELECT 
    u.nombre,
    u.email,
    COUNT(p.id) as total_posts
FROM usuarios u
LEFT JOIN posts p ON u.id = p.usuario_id
WHERE u.fecha_creacion >= '2024-01-01'
GROUP BY u.id
ORDER BY total_posts DESC;
```

---

**Nota:** Este archivo contiene ejemplos de código en diferentes lenguajes para probar si el syntax highlighting se está preservando correctamente en la impresión. 