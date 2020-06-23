# PWA Example
Toy PWA Project.

## Background Material
Progressive Web Applications (PWA) are web applications
that have certain characteristics of native applications.
Notably:
- **Instability** : Stays on user's home screen.
- **Network Independence** : Works when offline.
- **Re-engageability** : Calls users back to app when needed via notifications.

While keeping many of web app's characteristics:
- **Discoverability** : Easier to get exposed to search engines.
- **Linkability** : Can be accessed by simple URLs.

[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction)

**Service Worker API** allows web apps to become PWA.
**Service worker** is a small background script that acts as a middleman
for fetch requests and push notifications. It gets registered to browsers
and only reacts to fetch events and push events. Developers can configure
a service worker to return cached content while offline, or push notifications
to user devices even when users are not actively using the web app.

[Service Worker Cookbook](https://github.com/mozilla/serviceworker-cookbook)

It is easy to check whether an web app is a PWA or not by using
[Lighthouse](https://developers.google.com/web/tools/lighthouse)
in Chrome DevTools.

## Demo
This project is published here :
<https://pwa-practice-7070.herokuapp.com/>
