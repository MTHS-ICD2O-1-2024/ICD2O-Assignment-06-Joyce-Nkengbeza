// Copyright (c) 2020 Mr. Coxall
// All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: June 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "/ICD2O-Assignment-06-Joyce-Nkengbeza/sw.js",
    {
      scope: "/ICD2O-Unit-Assignment-06-Joyce-Nkengbeza/",
    }
  )
}

/**
 * This function gets a Chinese radical's definition and pronunciation.
 */
async function getRadicalInfo() {
  try {
    // Use a CORS proxy so the browser can fetch the HTTP API safely
    const proxyURL = "https://corsproxy.io/?"
    const apiURL =
      "http://ccdb.hemiola.com/characters/radicals/?filter=gb&fields=kDefinition,kMandarin"

    const resultJSON = await fetch(proxyURL + encodeURIComponent(apiURL))
    const jsonData = await resultJSON.json()
    console.log(jsonData)

    // Output the definition and Mandarin pronunciation of the first result
    const radical = jsonData[0]
    document.getElementById("mandarin").innerHTML =
      "Mandarin Pronounciation: " + radical.kMandarin
    document.getElementById("definition").innerHTML =
      "Definition: " + radical.kDefinition
  } catch (error) {
    console.error(error)
    document.getElementById("mandarin").innerHTML = "Could not load radical."
    document.getElementById("definition").innerHTML = error.message
  }
}
