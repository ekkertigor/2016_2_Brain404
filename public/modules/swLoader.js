(function () {
    'use strict';

    if (!navigator.serviceWorker) {
        return;
    }
    navigator.serviceWorker.register(
        '/sw.js'
    ).then((registration) => {
        // при удачной регистрации имеем объект типа ServiceWorkerRegistration
        console.log('ServiceWorker registration', registration);
        // строкой ниже можно прекратить работу serviceWorker’а
        // registration.unregister();
    }).catch((err) => {
        throw new Error(`ServiceWorker error: ${err}`);
    });
})();
