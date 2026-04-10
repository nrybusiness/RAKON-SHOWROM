# RAKON SHOWROOM — DELTA v1.3

Este paquete contiene SOLO los archivos nuevos o modificados respecto a v1.2.
No toques el resto del proyecto en GAS — los archivos de Food, Services y Core
siguen iguales.

## ARCHIVOS A REEMPLAZAR (2)
- Code.gs           → reemplazar contenido completo (añade rutas vet, wash)
- HubView           → reemplazar contenido completo (6 cards activas)

## ARCHIVOS NUEVOS A CREAR EN GAS (12)
Crear como HTML files con estos nombres exactos (sin extensión):

RETAIL:
  RetailView · RetailLogic · RetailData

OPS (Taller):
  OpsView · OpsLogic · OpsData

VET (Veterinaria):
  VetView · VetLogic · VetData

WASH (Lavadero):
  WashView · WashLogic · WashData

## DESPLIEGUE
1. Reemplazar Code.gs y HubView con los nuevos.
2. Crear los 12 HTML files nuevos y pegar su contenido.
3. Implementar → Administrar implementaciones → lápiz → Nueva versión → Implementar.

## RUTAS NUEVAS
?app=retail · ?app=ops · ?app=vet · ?app=wash

## NOTAS COMERCIALES
- RETAIL: filtros por categoría, selector talla/color, chequeo de stock en vivo, cierre por WhatsApp.
- OPS: dashboard oscuro estilo GitHub, barra de progreso por orden, botón "Notificar cliente".
- VET: historia clínica digital con tabs (Vacunas/Baños/Consultas), badges de estado vigente/próxima/vencida, envío completo por WhatsApp.
- WASH: cotización dinámica cruzando tipo de vehículo × servicio, captura de placa, reserva por WhatsApp.
