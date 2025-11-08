# 🌐 WebFacelifter — Optische Verbesserungen für Webseiten

> *„Ein Facelift für deine Lieblings-Websites – ohne Backend, nur mit CSS & JS.“*

**WebFacelifter** ist ein Sammelportfolio für benutzerdefinierte Skripte, die das visuelle Erscheinungsbild von Webseiten optisch optimieren – für eine **nutzerfreundlichere, klare und angenehmere Oberfläche**.  
Alle Skripte sind **rein dekorativ und funktional nicht-invasiv**. Sie verändern nichts an der Funktionsweise der Website – nur ihr Aussehen.

---

## ✅ Wie es funktioniert

1. **Ordner pro Website**: Jede Seite (z.B. `github.com`, `youtube.com`) hat ihren eigenen Ordner.
2. **In jedem Ordner findest du**:
    - `README.md`: Beschreibung der Optimierungen und Zielsetzung.
    - `script.user.js`: Das Tampermonkey-/UserJS-Script zur visuellen Optimierung.
    - *(Optional)* `example-before.png` / `example-after.png`: Vergleichsbilder.
3. **Nutze die Skripte mit**:
    - [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Edge, Safari)
    - Oder dem Browser-Plugin **“User JavaScript and CSS”** (Chrome)

> 💡 *Hinweis: Die Skripte werden **nicht automatisch installiert**. Du musst sie manuell in dein Browser-Plugin einfügen.*

---

## 📁 Projektstruktur

```
(nur exemplarisch)

WebFacelifter/
├── github.com/
│   ├── README.md
│   └── script.user.js
├── youtube.com/
│   ├── README.md
│   └── script.user.js
├── amazon.de/
│   ├── README.md
│   └── script.user.js
└── README.md              ← Dieses Dokument
```

## ⚠️ Haftungsausschluss (Important!)

- **Eigenverantwortliche Nutzung**: Diese Skripte sind für persönlichen Gebrauch gedacht.
- **Keine Garantie**: Die Skripte funktionieren so gut wie möglich, aber Änderungen der Ziel-Websites können sie brechen.
- **Kein Backend-Eingriff**: Es werden **keine Daten gesammelt**, keine Cookies verändert, kein Login umgangen.
- **Nicht für Produktivumgebungen**: Keine kommerzielle Nutzung ohne Zustimmung der Website-Betreiber.
- **Respektiere Nutzungsbedingungen**: Falls eine Website die Manipulation ihrer Oberfläche verbietet, verzichte auf den Einsatz.

> *„Ein schönes Design ist kein Verstoß – solange du es nicht missbrauchst.“*

---

## 🚀 Wie du beginnst

1. Klicke auf ein Beispiel-Skript (z.B. `github.com/script.user.js`).
2. Kopiere den kompletten Inhalt.
3. Öffne Tampermonkey → „Create a new script“ → Ersetze den Inhalt mit deinem kopierten Script.
4. Speichere und aktiviere es.
5. Besuche die Zielwebsite – dein Facelift ist live!

---

## 💬 Mitwirken

Möchtest du eine neue Website hinzufügen?  
→ Erstelle einen Ordner mit `README.md` und `script.user.js`, dann öffne einen Pull Request!

Falls du Hilfe brauchst, wie man ein Skript schreibt – frag einfach!

---

## 📌 Technische Hinweise

- Skripte sind in **JavaScript** geschrieben und nutzen **CSS-Injection**.
- Verwenden keine externen Bibliotheken (kein jQuery, kein Axios).
- Kompatibel mit Tampermonkey und „User JavaScript and CSS“.
- Funktionieren nur auf **Desktop-Browsern** (keine mobilen Apps).

---

> 🎨 *Gestalte deine Webwelt – nicht die Welt um dich herum.*

**Made with ❤️ for better UIs, not broken TOS.**

---
