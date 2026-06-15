# Guia para IA / Assistentes de Código

## Regra obrigatória: sempre incremente a versão

Este projeto é uma PWA com service worker (`sw.js`). A atualização automática no
dispositivo dos usuários só acontece quando a **versão muda**.

Ao fazer **qualquer alteração** em arquivos do app — por exemplo `script.js`,
`index.html`, `styles.css`, `i18n.js`, `sw.js` ou nos assets — você **deve**
incrementar a versão.

### Como incrementar

Edite a constante `APP_VERSION` no início do arquivo `sw.js`:

```js
const APP_VERSION = '1.0'; // → mude para '1.1', '1.2', '2.0', etc.
```

- Mudanças pequenas / correções: incremente o número menor (`1.0` → `1.1`).
- Mudanças grandes / quebras: incremente o número maior (`1.1` → `2.0`).

Nunca deixe a versão igual após uma alteração. Sem o incremento, os usuários
continuarão vendo a versão antiga em cache.
