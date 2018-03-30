const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

export const client = new Lokka({
  transport: new Transport('/graphql')
});