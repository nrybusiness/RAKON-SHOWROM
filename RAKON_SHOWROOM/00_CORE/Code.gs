/**
 * ============================================================
 * RAKON TECHNOLOGY — SHOWROOM ROUTER
 * Archivo: 00_CORE/Code.gs
 * Responsabilidad: Punto de entrada único de la Web App.
 *                  Enruta peticiones al Hub o a cada vertical.
 * ============================================================
 */

/**
 * Punto de entrada de la Web App de Google Apps Script.
 * Uso: ?app=hub | food | services | retail | ops
 * Por defecto sirve el Hub.
 */
function doGet(e) {
  const app = (e && e.parameter && e.parameter.app) ? e.parameter.app.toLowerCase() : 'hub';

  const ROUTES = {
    'hub':      { file: 'HubView',      title: 'RAKON Technology — Infraestructura Digital' },
    'food':     { file: 'FoodView',     title: 'RAKON · Food & Treats Demo' },
    'services': { file: 'ServicesView', title: 'RAKON · Servicios Profesionales Demo' },
    'retail':   { file: 'RetailView',   title: 'RAKON · Retail & Moda Demo' },
    'ops':      { file: 'OpsView',      title: 'RAKON · Gestión Operativa Demo' }
  };

  const route = ROUTES[app] || ROUTES['hub'];

  return HtmlService
    .createTemplateFromFile(route.file)
    .evaluate()
    .setTitle(route.title)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}

/**
 * Helper de inclusión de fragmentos HTML compartidos.
 * Permite que cualquier vista llame: <?!= include('rakon-tokens'); ?>
 */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/**
 * Devuelve la configuración pública al frontend (sin secretos).
 * Llamado desde JS cliente con google.script.run.getRakonConfig()
 */
function getRakonConfig() {
  return {
    brand:    RAKON_CONFIG.BRAND,
    whatsapp: RAKON_CONFIG.WHATSAPP_NUMBER,
    pricing:  RAKON_CONFIG.PRICING_PUBLIC,
    urls:     RAKON_CONFIG.DEMO_URLS
  };
}
