# cv-html
profile curriculum vitae

## referencias
FABRIZIO-SALVADE-CV-PT
https://docs.google.com/document/d/1kfsp-DlOFQHZ3EgGnjFsFTzKjk_14n4KJbzo9YVLdTc/edit?tab=t.0#heading=h.44cd2qnxb8u5

## Pré-requisitos

Node.js instalado (LTS recomendado)

Puppeteer instalado (npm install puppeteer)

Git instalado e inicializado no repositório

VSCode ou terminal aberto na raiz do projeto

Verifique a estrutura do projeto

Certifique-se de que você tem:

your-repo/
├─ docs/
│  ├─ index.html
│  └─ assets/pdf/  <-- pasta existe, mesmo vazia
├─ generate-pdf.js
├─ package.json
├─ .git/

Se assets/pdf/ não existir, crie:

``` bash
mkdir -p docs/assets/pdf
```

Teste a geração do PDF

No terminal, rode:

``` bash
node generate-pdf.js
```

Isso vai abrir o HTML (docs/index.html) em headless Chrome.

Vai gerar o PDF em docs/assets/pdf/Fabrizio_Salvade_CV.pdf.

Você verá no terminal:

PDF gerado com sucesso em /full/path/docs/assets/pdf/Fabrizio_Salvade_CV.pdf


Abra o PDF e confira se o layout está correto.

2.3 Simule o commit automático

No terminal, rode:

``` bash
git config user.name "teste-actions"
git config user.email "teste-actions@example.com"

git add docs/assets/pdf/Fabrizio_Salvade_CV.pdf

# Comitar apenas se houver alterações
git diff-index --quiet HEAD || git commit -m "Atualiza PDF do currículo teste"
```

Se o PDF tiver mudado, ele será commitado.

Caso contrário, nada será feito (igual ao workflow).

2.4 Teste final de push (opcional)

Se quiser simular totalmente o workflow:

``` bash
git push origin main
```

No GitHub, quando você subir o workflow real, ele fará exatamente isso:
gerar PDF → comitar só se houver mudanças → push automático.
