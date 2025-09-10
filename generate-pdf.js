const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  try {
    // Caminho do diretório do PDF
    const pdfDir = path.resolve('./docs/assets/pdf');

    // Cria a pasta se não existir
    if (!fs.existsSync(pdfDir)){
        fs.mkdirSync(pdfDir, { recursive: true });
        console.log(`Pasta criada: ${pdfDir}`);
    }

    // Caminho do HTML
    const url = `file://${path.resolve('./docs/index.html')}`;

    // Caminho do PDF
    const pdfPath = path.resolve(pdfDir, 'Fabrizio_Salvade_CV.pdf');

    // Inicia Puppeteer
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });

    // Gera PDF
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' }
    });

    await browser.close();

    console.log('PDF gerado com sucesso em', pdfPath);
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
  }
})();
