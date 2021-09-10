# Strong Password Generator

[Live Demo](https://cranky-goldwasser-bc93db.netlify.app/)

![screenshot](/public/screenshot.png)

## Background

This is based on [1Password's Strong Password Generator](https://1password.com/password-generator/). I'm a big fan of 1Password (been using it for a number of years) and strong passwords in general. Ever since they introduced their [strong password generator](https://1password.com/password-generator/), I knew I wanted to try and recreate it.

## Features

- Built with React
- Utilized `useState` hook to manage values of the password itself, password length, as well as if numbers or symbols checkboxes are checked.
- I used CSS animations for the "Copy To Clipboard" and circular arrow refresh buttons.

## Upcoming

- For random-word passphrase, the [Wordnik API](https://developer.wordnik.com/) will be used to fetch random words.
