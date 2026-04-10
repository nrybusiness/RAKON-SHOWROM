/**
 * RAKON TECHNOLOGY — SHOWROOM ROUTER v1.3
 * Archivo: Code.gs — Reemplazar contenido completo.
 */
function doGet(e) {
  const app = (e && e.parameter && e.parameter.app) ? e.parameter.app.toLowerCase() : 'hub';
  const ROUTES = {
    'hub':      { file: 'HubView',      title: 'RAKON Technology — Infraestructura Digital' },
    'food':     { file: 'FoodView',     title: 'RAKON · Food & Treats Demo' },
    'services': { file: 'ServicesView', title: 'RAKON · Servicios Profesionales Demo' },
    'retail':   { file: 'RetailView',   title: 'RAKON · Retail & Moda Demo' },
    'ops':      { file: 'OpsView',      title: 'RAKON · Gestión Operativa Demo' },
    'vet':      { file: 'VetView',      title: 'RAKON · Veterinaria Demo' },
    'wash':     { file: 'WashView',     title: 'RAKON · Lavadero Demo' }
  };
  const route = ROUTES[app] || ROUTES['hub'];
  const template = HtmlService.createTemplateFromFile(route.file);
  template.webAppUrl = ScriptApp.getService().getUrl();
  return template.evaluate()
    .setTitle(route.title)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getRakonConfig() {
  return {
    brand:     RAKON_CONFIG.BRAND,
    whatsapp:  RAKON_CONFIG.WHATSAPP_NUMBER,
    pricing:   RAKON_CONFIG.PRICING_PUBLIC,
    urls:      RAKON_CONFIG.DEMO_URLS,
    webAppUrl: ScriptApp.getService().getUrl()
  };
}
