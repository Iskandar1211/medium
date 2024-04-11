// 1. Generate a random string
// We can use Math.random to generate a random string, it’s very convenient when we need a unique ID.

const randomString = () => Math.random().toString(36).slice(2);

randomString(); // gi1qtdego0b
randomString(); // f3qixv40mot
randomString(); // eeelv1pm3ja

console.log("randomString()", randomString());

// 2.# Escape HTML special characters
// If you know about XSS, one of the solutions is to escape HTML strings.

const escape = (str) =>
  str.replace(
    /[&<>"']/g,
    (m) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        m
      ])
  );

escape('<div class="medium">Hi Medium.</div>');
// &lt;div class=&quot;medium&quot;&gt;Hi Medium.&lt;/div&gt

/*
3.# Uppercase the first character of each word in a string
This method is used to uppercase the first character of each word in a string.
*/

const uppercaseWords = (str) =>
  str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());

uppercaseWords("hello world"); // 'Hello World'

console.log("uppercaseWords", uppercaseWords("my name is Iskandar"));

// 4.# Convert a string to camelCase

const toCamelCase = (str) =>
  str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));

console.log("toCamelCase", toCamelCase("background-color")); 
