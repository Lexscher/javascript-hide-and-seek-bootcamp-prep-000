function getFirstSelector(selector) {
  // pass our parameter, selector, to the query selector
  return document.querySelector(selector);
}

function nestedTarget() {
  // find nested...
  let nested = document.querySelector('#nested');
  // ...access the target within.
  return nested.querySelector('.target');
}

function deepestChild() {
  // find grand-node div
  let grandma = document.getElementById('#grand-node');
  
  return console.log(`${grandma.nodeName} > ${grandma.querySelector('div').nodeName} >>> ${grandma.querySelector('div').querySelector('div').nodeName} >>>> ${grandma.querySelector('div').querySelector('div').querySelector('div').nodeName} ->> ${grandma.querySelector('div').querySelector('div').querySelector('div').querySelector('div').nodeName}`);
}

function increaseRankBy(n) {
  let listArr = [];
  let list = document.getElementsByClassName('.ranked-list').querySelectorAll('li');
  for (let l of list.nodeList) {
    listArr.push(l.nodeName);
  }
  return console.log(list);
  for (let i = 0; i < n ;i++) {
    list[i].innerHTML = parseInt(l) + 1 || list[i].innerHTML++;
  }
  
  // return console.log(list)
  
  
}