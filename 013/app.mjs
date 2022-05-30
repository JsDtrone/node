// import { characters, Greet } from './characters.mjs';
// for (const c of characters) {
//   Greet(c);
// }

async function main() {
  try {
    const { characters, Greet } = await import('./characters.mjs');
    for (const c of characters) {
      Greet(c);
    }
  } catch (e) {
    console.log('Fuck, you catch ERROR');
  }
}
main();
