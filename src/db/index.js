const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

export const client = new Lokka({
  transport: new Transport('/graphql')
});

export * from './alignment';
export * from './armor';
export * from './class';
export * from './race';
export * from './skill';
export * from './spell';
export * from './subrace';
export * from './weapon';