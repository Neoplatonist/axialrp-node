// const db = {
//   names: [
//     {id: 0, text: 'James'}, 
//     {id: 1, text: 'William'}
//   ]
// };

// class MainApi{
//   async getAll(){
//     return new Promise(y => setTimeout(() => {
//       y(db.names)
//     }, 200))
//   }

//   async getFirst(){
//     return new Promise(y => setTimeout(() => {
//       y(db.names[0])
//     }, 200))
//   }

//   async getLast(){
//     return new Promise(y => setTimeout(() => {
//       y(db.names[1])
//     }, 200))
//   }

//   async getPersonId(id){
//     return new Promise(y => setTimeout(() => {
//       y(db.names.find(v => v.id === parseInt(id, 10)))
//     }, 200))
//   }

//   async getPersonName(name){
//     return new Promise(y => setTimeout(() => {
//       y(db.names.find(v => v.text === name))
//     }, 200))
//   }
// }

// module.exports = {
//   MainApi
// };
