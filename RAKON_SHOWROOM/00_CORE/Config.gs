/**
 * ============================================================
 * RAKON TECHNOLOGY — CONFIGURACIÓN GLOBAL
 * Archivo: 00_CORE/Config.gs
 * Responsabilidad: Single source of truth para marca,
 *                  pricing, contacto y URLs.
 * ============================================================
 */

const RAKON_CONFIG = {

  BRAND: {
    name:        'RAKON Technology',
    tagline:     'Infraestructura Digital para Negocios que Quieren Escalar',
    subtagline:  'No hacemos páginas web. Automatizamos tus ventas, controlamos tu inventario y eliminamos errores operativos.',
    year:        2026
  },

  WHATSAPP_NUMBER: '573026313969',

  PRICING_PUBLIC: {
    setup_from:        500000,
    saas_monthly_from: 89000,
    engineering_hour:  120000,
    currency:          'COP'
  },

  DEMO_URLS: {
    hub:      '?app=hub',
    food:     '?app=food',
    services: '?app=services',
    retail:   '?app=retail',
    ops:      '?app=ops'
  },

  CONTACT: {
    email:    'comercial@rakon.tech',
    location: 'Medellín, Colombia'
  }
};
