// Copyright (c) 2020 Mr. Coxall
// All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: June 2025
// This file contains the JS functions for index.html

// Copyright (c) 2020 Mr. Coxall
// All rights reserved
//
// Created by: Joyce Nkengbeza
// Created on: June 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function gets a random coffee image from the API
 * The 'async' keyword is used because it will take time from the internet to get data
 */
/* eslint-disable no-unused-vars */
async function getCoffeeImage() {
  try {
    // Use a public CORS proxy to avoid local file restrictions
    const corsProxy = "https://corsproxy.io/?"
    const apiUrl = "https://coffee.alexflipnote.dev/random.json"

    const response = await fetch(corsProxy + encodeURIComponent(apiUrl))
    const data = await response.json()
    console.log(data)

    // Output the coffee image to the page
    document.getElementById("show-coffee").innerHTML =
      '<b>Here is a random coffee image:</b><br /><img src="' + data.file + '" />'
  } catch (error) {
    console.error(error)
    document.getElementById("show-coffee").innerHTML =
      "Could not load coffee image."
  }
}
