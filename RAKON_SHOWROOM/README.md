# RAKON SHOWROOM v1.1

Suite modular de mockups comerciales para **Rakon Technology**, desplegable como Web App única en Google Apps Script.

## ⚡ Cambios v1.1 (parche iframe sandbox)

- `Code.gs` ahora inyecta `template.webAppUrl = ScriptApp.getService().getUrl()` para que el frontend conozca la URL pública real.
- `HubView.html` y `FoodView.html` leen `window.RAKON_WEBAPP_URL` en lugar de `window.location.pathname`.
- Esto resuelve el bug donde los enlaces entre Hub y demos no abrían nada por estar dentro del iframe sandbox de GAS.

## Estructura del Repositorio

```
RAKON_SHOWROOM/
├── 00_CORE/                  Núcleo compartido (tokens, helpers, router)
│   ├── Code.gs               Router doGet() multi-ruta
│   ├── Config.gs             Constantes globales (marca, pricing, WhatsApp)
│   ├── rakon-tokens.html     Variables CSS de marca
│   ├── rakon-base.html       CDNs (Tailwind, SweetAlert2) + utilidades
│   └── rakon-helpers.html    JS helpers (COP, WhatsApp, Swal, carrito)
│
├── 01_HUB/
│   └── HubView.html          Vitrina principal Rakon
│
└── 02_FOOD/                  Vertical Heladería / Postres
    ├── FoodView.html         UI pastel-minimal
    ├── FoodLogic.html        Constructor de pedido
    └── FoodData.html         Catálogo mock (sabores, toppings, tamaños)
```

## Despliegue en Google Apps Script

1. Crea un proyecto nuevo en https://script.google.com — nómbralo `RAKON_SHOWROOM`.
2. **Pega los archivos `.gs`** (Code.gs, Config.gs) como Scripts.
3. **Pega los archivos `.html`** como HTML files. **IMPORTANTE:** GAS no respeta carpetas, por lo que debes pegarlos planos con estos nombres exactos (sin extensión, GAS la añade):
   - `rakon-tokens`
   - `rakon-base`
   - `rakon-helpers`
   - `HubView`
   - `FoodView`
   - `FoodLogic`
   - `FoodData`
4. **Implementar → Nueva Implementación → Tipo: Aplicación Web**
   - Ejecutar como: Yo
   - Quién tiene acceso: Cualquiera
5. Copia la URL pública.

## Rutas disponibles

| URL | Vertical |
|---|---|
| `?app=hub` (o sin parámetro) | Hub principal Rakon |
| `?app=food` | Demo Heladería |
| `?app=services` | (en cola) |
| `?app=retail` | (en cola) |
| `?app=ops` | (en cola) |

## Configuración rápida

Cambia marca, WhatsApp, precios o URLs en un solo punto: **`00_CORE/Config.gs`** → `RAKON_CONFIG`.

El número de WhatsApp también está cableado en `rakon-helpers.html` (línea `whatsapp:`) para uso 100% client-side. Cambia ambos para coherencia total.

## Próximos verticales en cola

- `03_SERVICES/` — Barbería/Spa con calendario
- `04_RETAIL/` — Boutique con filtros y stock
- `05_OPS/` — Taller con máquina de estados

---

**RAKON Technology** · Medellín, Colombia · 2026
