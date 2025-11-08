// ==UserScript==
// @name         Remove Sidebar and Clean Main Class (W3Schools)
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Removes l10, m12 from #main and deletes sidebar completely. Ensures full-width layout.
// @author       You
// @match        *://*.w3schools.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Funktion: Entferne alle Grid-Klassen (l*, m*, s*) von #main und behalte nur w3-col
    const cleanMainClass = () => {
        const main = document.getElementById('main');
        if (!main) return false;

        // Behalte nur "w3-col", entferne ALLE anderen Klassen
        const currentClasses = main.className.split(' ');
        const newClassList = currentClasses.filter(cls => cls === 'w3-col');

        if (newClassList.length < currentClasses.length) {
            main.className = newClassList.join(' ').trim();
            console.log('✅ #main: Alle Grid-Klassen (l10, m12, etc.) entfernt. Nur "w3-col" bleibt.');
            return true;
        }
        return false;
    };

    // Funktion: Entferne die Sidebar komplett aus dem DOM
    const removeSidebar = () => {
        const sidebar = document.querySelector('.w3-col.l1.w3-hide-medium');
        if (sidebar) {
            sidebar.remove();
            console.log('✅ Sidebar (.w3-col.l1.w3-hide-medium) komplett entfernt.');
            return true;
        }
        return false;
    };

    // Haupt-Logik: Wiederhole, bis alles erledigt ist (für dynamische Inhalte)
    let attempts = 0;
    const maxAttempts = 30; // ~7,5 Sekunden bei 250ms Intervall
    const interval = 250;

    const checkAndFix = () => {
        attempts++;

        const mainCleaned = cleanMainClass();
        const sidebarRemoved = removeSidebar();

        if (mainCleaned || sidebarRemoved) {
            console.log(`🔄 Versuch ${attempts}: Änderung erkannt.`);
        }

        // Beende, wenn beide Ziele erreicht sind ODER Max-Versuche überschritten
        if ((document.getElementById('main') && document.getElementById('main').className.trim() === 'w3-col') &&
            !document.querySelector('.w3-col.l1.w3-hide-medium')) {
            console.log('✅ ✅ ALLE ZIELE ERREICHT – SKRIPT BEENDET.');
            return;
        }

        if (attempts >= maxAttempts) {
            console.log('❌ MAXIMALE VERSUCHE ERREICHT – FERTIG.');
            return;
        }

        setTimeout(checkAndFix, interval);
    };

    // Starte die Überprüfung nach kurzer Verzögerung
    setTimeout(checkAndFix, 100);

})();
