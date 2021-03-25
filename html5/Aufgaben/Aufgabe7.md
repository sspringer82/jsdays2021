# Webworker

Verlagere die Ver- und Entschlüsselung in einen Workerprozess.

Erzeuge eine neue Datei proxy.js, die API kompatibel mit crypto ist und die Kommunikation mit dem Worker übernimmt.
encrypt und decrypt aus dem proxy senden Nachrichten an den Worker und warten auf Antwort. Die Kommunikation kann über Promises gekapselt werden

```
return new Promise((res, rej) => {
  // senden der nachricht
  // empfangen der nachricht + resolve der promise
})
```

Erzeuge eine worker.js Datei, die mit der crypto.js Datei arbeitet.
