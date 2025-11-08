
Hier ist eine professionell formulierte **`README.md`**, die das Skript klar, präzise und für andere Nutzer verständlich beschreibt:

---

# 📄 README.md — W3Schools Sidebar Remover & Main Cleaner

## 💡 Was macht dieses Skript?

Dieses **Tampermonkey/Violentmonkey-Skript** optimiert das Layout von [W3Schools.com](https://www.w3schools.com) – insbesondere auf Lehrseiten wie PHP, HTML oder JavaScript – indem es:

1. **Die linke Sidebar komplett entfernt**
2. **Den Hauptinhalt (`#main`) von allen Grid-Klassen befreit**, sodass er **vollbreit** angezeigt wird

---

## 🔧 Funktionen im Detail

| Aufgabe | Beschreibung |
|--------|--------------|
| ✅ **Sidebar entfernen** | Entfernt das Element mit `class="w3-col l1 w3-hide-medium"` vollständig aus dem DOM. Es wird nicht nur versteckt (`display: none`) – es **verschwindet komplett**, spart Speicher und verhindert Layout-Interferenzen. |
| ✅ **Hauptinhalt bereinigen** | Das Element mit `id="main"` hat oft Klassen wie `w3-col l10 m12`. Dieses Skript **entfernt alle Grid-Klassen (`l*`, `m*`, `s*`)** und behält **nur `w3-col`**. Dadurch nimmt der Inhalt die volle Breite des Containers ein – ohne starre W3.CSS-Grid-Beschränkungen. |
| ✅ **Dynamische Seitenunterstützung** | W3Schools lädt Inhalte (Ads, Widgets) asynchron nach. Das Skript **prüft alle 250 ms für bis zu 7,5 Sekunden**, ob die Elemente vorhanden sind – und passt sie nach, wenn sie später geladen werden. |
| ✅ **Keine CSS-Überschreibungen nötig** | Kein `!important`, keine `width: 100%`-Hacke – die Breite ergibt sich natürlicherweise, weil keine Grid-Klassen mehr existieren. |

---

## 🌐 Für welche Seiten ist das Skript gedacht?

- Alle Seiten von `*.w3schools.com`, z. B.:
    - `https://www.w3schools.com/php/default.asp`
    - `https://www.w3schools.com/html/default.asp`
    - `https://www.w3schools.com/js/default.asp`

> ❗ **Nicht für andere Webseiten** – das Skript ist speziell auf W3Schools’ HTML-Struktur zugeschnitten.

---

## ⚙️ Installation

1. Installiere einen Userscript-Manager:  
   → [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Edge, Firefox)  
   → [Violentmonkey](https://violentmonkey.github.io/) (Chrome, Firefox)

2. Öffne den Skript-Editor:  
   → Klicke auf das Tampermonkey-Icon → „Create a new script“

3. **Lösche alles** im Editor und ersetze es mit dem vollständigen Code oben.

4. Klicke auf **„Save“** (Speichern).

5. Gehe zu einer W3Schools-Seite und drücke **F5**, um sie neu zu laden.

---

## 🔍 Wie prüfst du, ob es funktioniert?

1. Öffne die **Browser-Konsole** (`F12` → „Console“)
2. Prüfe die Ausgaben:
