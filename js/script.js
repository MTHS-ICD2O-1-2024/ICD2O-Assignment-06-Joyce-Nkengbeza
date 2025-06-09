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
  navigator.serviceWorker.register("/ICD2O-Unit-6-03-Joyce-Nkengbeza/sw.js", {
    scope: "/ICD2O-Unit-6-03-Joyce-Nkengbeza/",
  })
}

/**
 * This function gets a random Peaky Blinders quote.
 */
async function getQuote() {
  try {
    const resultJSON = await fetch(
      "https://peaky-blinders-quotes.vercel.app/api/quotes/random"
    )
    const jsonData = await resultJSON.json()
    console.log(jsonData)

    // output
    document.getElementById("quote").innerHTML = '"' + jsonData.quote + '"'
    document.getElementById("character").innerHTML = "- " + jsonData.character
  } catch (error) {
    console.error(error)
    document.getElementById("quote").innerHTML = "Could not load quote."
    document.getElementById("character").innerHTML = error.message
  }
}
