// document.querySelector('#elastic').oninput = function () {
//   let val = this.value.trim();
//   let elasticItems = document.querySelectorAll('.elastic li');

//   if (val !== '') {
//     elasticItems.forEach(function (elem) {
//       if (elem.innerText.search(val) === -1) {
//         elem.classList.add('hide');
//         elem.innerHTML = elem.innerText;
//       } else {
//         elem.classList.remove('hide');
//         let str = elem.innerText;
//         elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
//       }
//     });
//   } else {
//     elasticItems.forEach(function (elem) {
//       elem.classList.remove('hide');
//       elem.innerHTML = elem.innerText;
//     });
//   }
// };

// function insertMark(string, pos, len) {
//   return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
// }





// document.querySelector('#elastic').oninput = function () {
//   let val = this.value.trim().toLowerCase();
//   let elasticItems = document.querySelectorAll('.elastic li');

//   if (val !== '') {
//     elasticItems.forEach(function (elem) {
//       let text = elem.innerText.toLowerCase();
//       let searchPos = text.indexOf(val);

//       if (searchPos === -1) {
//         elem.classList.add('hide');
//         elem.innerHTML = elem.innerText;
//       } else {
//         elem.classList.remove('hide');
//         let originalText = elem.innerText;
//         elem.innerHTML = insertMark(originalText, searchPos, val.length);
//       }
//     });
//   } else {
//     elasticItems.forEach(function (elem) {
//       elem.classList.remove('hide');
//       elem.innerHTML = elem.innerText;
//     });
//   }
// };

// function insertMark(string, pos, len) {
//   return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
// }



// document.querySelector('#elastic').oninput = function () {
//     let val = this.value.trim().toLowerCase();
//     let elasticItems = document.querySelectorAll('.elastic .card');

//     if (val !== '') {
//         elasticItems.forEach(function (elem) {
//             let title = elem.querySelector('h3').innerText.toLowerCase();
//             let text = elem.querySelector('p').innerText.toLowerCase();
//             let content = title + ' ' + text;
//             let searchPos = content.indexOf(val);

//             if (searchPos === -1) {
//                 elem.classList.add('hide');
//                 elem.querySelector('h3').innerHTML = title;
//             } else {
//                 elem.classList.remove('hide');
//                 let originalTitle = elem.querySelector('h3').innerText;
//                 let pos = originalTitle.toLowerCase().indexOf(val);
//                 if (pos !== -1) {
//                     elem.querySelector('h3').innerHTML = insertMark(originalTitle, pos, val.length);
//                 }
//             }
//         });
//     } else {
//         elasticItems.forEach(function (elem) {
//             elem.classList.remove('hide');
//             elem.querySelector('h3').innerHTML = elem.querySelector('h3').innerText;
//         });
//     }
// };

// function insertMark(string, pos, len) {
//     return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
// }




// document.querySelector('#elastic').oninput = function () {
//   let val = this.value.trim().toLowerCase();
//   let elasticItems = document.querySelectorAll('.elastic .card');

//   if (val !== '') {
//     elasticItems.forEach(function (elem) {
//       const titleElem = elem.querySelector('h3');
//       const textElem = elem.querySelector('p');

//       const originalTitle = titleElem.innerText;
//       const originalText = textElem.innerText;

//       const title = originalTitle.toLowerCase();
//       const text = originalText.toLowerCase();

//       const combined = title + ' ' + text;

//       if (combined.indexOf(val) === -1) {
//         elem.classList.add('hide');
//         titleElem.innerHTML = originalTitle;
//         textElem.innerHTML = originalText;
//       } else {
//         elem.classList.remove('hide');

//         // Подсветка в заголовке
//         const titlePos = title.indexOf(val);
//         if (titlePos !== -1) {
//           titleElem.innerHTML = insertMark(originalTitle, titlePos, val.length);
//         } else {
//           titleElem.innerHTML = originalTitle;
//         }

//         // Подсветка в описании
//         const textPos = text.indexOf(val);
//         if (textPos !== -1) {
//           textElem.innerHTML = insertMark(originalText, textPos, val.length);
//         } else {
//           textElem.innerHTML = originalText;
//         }
//       }
//     });
//   } else {
//     elasticItems.forEach(function (elem) {
//       const titleElem = elem.querySelector('h3');
//       const textElem = elem.querySelector('p');
//       elem.classList.remove('hide');
//       titleElem.innerHTML = titleElem.innerText;
//       textElem.innerHTML = textElem.innerText;
//     });
//   }
// };

// function insertMark(string, pos, len) {
//   return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
// }





document.querySelector('#elastic').oninput = function () {
  let val = this.value.trim().toLowerCase();
  let elasticItems = document.querySelectorAll('.elastic .card');
  let hasVisible = false;

  if (val !== '') {
    elasticItems.forEach(function (elem) {
      const titleElem = elem.querySelector('h3');
      const textElem = elem.querySelector('p');

      const originalTitle = titleElem.innerText;
      const originalText = textElem.innerText;

      const title = originalTitle.toLowerCase();
      const text = originalText.toLowerCase();

      const combined = title + ' ' + text;

      if (combined.indexOf(val) === -1) {
        elem.classList.add('hide');
        titleElem.innerHTML = originalTitle;
        textElem.innerHTML = originalText;
      } else {
        elem.classList.remove('hide');
        hasVisible = true;

        const titlePos = title.indexOf(val);
        titleElem.innerHTML = titlePos !== -1
          ? insertMark(originalTitle, titlePos, val.length)
          : originalTitle;

        const textPos = text.indexOf(val);
        textElem.innerHTML = textPos !== -1
          ? insertMark(originalText, textPos, val.length)
          : originalText;
      }
    });
  } else {
    elasticItems.forEach(function (elem) {
      const titleElem = elem.querySelector('h3');
      const textElem = elem.querySelector('p');
      elem.classList.remove('hide');
      titleElem.innerHTML = titleElem.innerText;
      textElem.innerHTML = textElem.innerText;
    });
    hasVisible = true;
  }

  document.getElementById('no-results').style.display = hasVisible ? 'none' : 'block';
};

function insertMark(string, pos, len) {
  return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}



