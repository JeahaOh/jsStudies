//  배열 비구조화 할당 객체안의 깊은 곳의 값을 꺼내보자.
//  feature의 flat object화..
const deepObject = {
  state : {
    info: {
      name : 'asdf',
      lang : ['js', 'java', 'melody']
    }
  },
  value : 5
}

// const { name, lang } = deepObject.state.info;
// const { value } = deepObject;

// const extracted = {
//   name,
//   lang,
//   value
// }
// console.log( extracted );


//  ----------------------------------------------


// const {
//   state: {
//     info : {
//       name, lang : [fistLang]
//     }
//   },
//   value
// } = deepObject;


// const extracted = {
//   name,
//   fistLang,
//   value
// }
// console.log( extracted );


//  ----------------------------------------------


const { name, lang : [firstLang] } = deepObject.state.info;
const { value } = deepObject;

const extracted = {
  name,
  firstLang,
  value
}
console.log( extracted );