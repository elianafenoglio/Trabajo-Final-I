OBJETIVO DEL FLUJO A PROBAR
1) Ingreso al sistema con contraseña (LoginScreen.jsx)

2) Acceso a la lista de contactos (ContactScreen.jsx)

3) Selección de un contacto → redirige a ChatScreen.jsx

    3.1 -En ChatScreen:

    3.2 -Se visualizan los mensajes correspondientes al contacto

    3.3 -Al enviar un mensaje, se genera una respuesta automática única por contacto

4) COMPONENTES Y ESTADOS INVOLUCRADOS
    Componente	Estado/Propósito
    App.jsx:	isAuthenticated, contactoSeleccionado, mensajesPorContacto
    LoginScreen:	Autenticación y navegación a /contactos
    ContactScreen:	Lista de contactos y selección
    ChatScreen:	Muestra mensajes del contacto actual, envía mensajes nuevos
    MessageList.jsx:	Renderiza los mensajes del contacto activo
    MessageInput.jsx:	Input para escribir mensajes

5) ¿Qué vas a ver al probarlo?
        5.1 -Escribís "1234" en el login → te lleva a /contactos

        5.2 - Elegís, por ejemplo, "Lucía" → te lleva a /chat

        5.3 - Aparece "Chat con Lucía" y un área vacía de mensajes.

        5.4 - Escribís un mensaje → aparece el mensaje enviado + una respuesta automática

6) Si luego elegís "Pedro", verás solo la conversación con Pedro (vacía o con su propio hilo).


CONSIGNA TF
El trabajo final de frontend consistirá en una aplicación web con los siguientes lineamientos:


Despliegue en vercel (o hosting de elección) funcional - LOGRADO

Código subido en github - LOGRADO

Readme.md con una descripción del desafío elegido, librerías usadas y dificultades presentadas a la hora de resolverse (opcional)

La página debe ser totalmente responsiva de las medidas 320px a 2000px

La página debe tener estilos accesibles acordes a los vistos en clase (fondos claros con letras claras se considera inaccesible)

La página debe estar desarrollada en React. LOGRADO

La página debe contar con el uso de estados 

Se valora el uso de contextos. (ESTO???)

El enrutamiento de la página debe ser desarrollado con react-router-dom. LOGRADO

Debe contar con el uso de al menos 1 formulario. LOGRADO

Deben usarse componentes 

Se debe contar con al menos 2 páginas en el flujo de la aplicación y debe usarse al menos en una los parámetros de búsqueda de react-router-dom 

Se valora la calidad de código siguiendo los principios de la programación vistos en clase (DRY, YAGNI, KISS)

Se pueden usar diseños o páginas ya creadas de guía para poder despreocuparse de los aspectos estéticos de la página desarrollada . LOGRADO