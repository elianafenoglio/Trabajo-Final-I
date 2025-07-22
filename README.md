OBJETIVO DEL FLUJO A PROBAR
Ingreso al sistema con contraseña (LoginScreen.jsx)

Acceso a la lista de contactos (ContactScreen.jsx)

Selección de un contacto → redirige a ChatScreen.jsx

En ChatScreen:

Se visualizan los mensajes correspondientes al contacto

Al enviar un mensaje, se genera una respuesta automática única por contacto

🧩 COMPONENTES Y ESTADOS INVOLUCRADOS
Componente	Estado/Propósito
App.jsx	isAuthenticated, contactoSeleccionado, mensajesPorContacto
LoginScreen	Autenticación y navegación a /contactos
ContactScreen	Lista de contactos y selección
ChatScreen	Muestra mensajes del contacto actual, envía mensajes nuevos
MessageList.jsx	Renderiza los mensajes del contacto activo
MessageInput.jsx	Input para escribir mensajes

🔄 ¿Qué vas a ver al probarlo?
Escribís "1234" en el login → te lleva a /contactos

Elegís, por ejemplo, "Lucía" → te lleva a /chat

Aparece "Chat con Lucía" y un área vacía de mensajes.

Escribís un mensaje → aparece el mensaje enviado + una respuesta automática

Si luego elegís "Pedro", verás solo la conversación con Pedro (vacía o con su propio hilo).