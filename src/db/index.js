const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

export const client = new Lokka({
  transport: new Transport('/graphql')
});

export * from './alignment';
export * from './classes';
export * from './race';
export * from './subrace';