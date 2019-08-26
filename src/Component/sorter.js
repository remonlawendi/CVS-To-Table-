// export default class Sorter {
//   constructor(collection) {
//     this.collection = collection;
//   }

//   sort(index, options = null) {
//     if (options) {
//       this.collection.sort((a, b) => {
//         if (a[index] && b[index]) {
//           if (typeof a[index] === 'string' && typeof b[index] === 'string') {
//             if (parseInt(a[index] && b[index])) {
//               // so this is a valid number
//               if (parseInt(a[index]) < parseInt(b[index])) {
//                 return options.clickCounter === 'once' ? -1 : 1;
//               } else {
//                 return options.clickCounter === 'once' ? 1 : -1;
//               }
//             } else {
//               // so this is a string

//               if (a[index].toLowerCase() < b[index].toLowerCase()) {
//                 return options.clickCounter === 'once' ? -1 : 1;
//               } else {
//                 return options.clickCounter === 'once' ? 1 : -1;
//               }
//             }
//           }
//         }
//       });
//     } else {
//       this.collection.sort((a, b) => {
//         if (a[index] && b[index]) {
//           if (typeof a[index] === 'string' && typeof b[index] === 'string') {
//             if (parseInt(a[index] && b[index])) {
//               // so this is a valid number
//               if (parseInt(a[index]) < parseInt(b[index])) {
//                 return -1;
//               } else {
//                 return 1;
//               }
//             } else {
//               // so this is a string

//               if (a[index].toLowerCase() < b[index].toLowerCase()) {
//                 return -1;
//               } else {
//                 return 1;
//               }
//             }
//           }
//         }
//       });
//     }
//   }
// }
