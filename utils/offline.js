if (
  process.env.NODE_ENV === 'production' &&
  typeof window !== 'undefined' &&
  'serviceWorker' in navigator
) {
  navigator.serviceWorker
    .getRegistrations()
    .then(function(registrations) {
      for (let registration of registrations) {
        registration.unregister()
      }
    })
    .catch(e => {
      console.error('Error during service worker unregistration:', e)
    })
}
