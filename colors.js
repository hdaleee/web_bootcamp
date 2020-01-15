// function LinksSetColor(color){
//   var alist = document.querySelectorAll('a')
//   var i = 0
//   while(i < alist.length){
//   alist[i].style.color = color;
//     i = i + 1
//   }
// }
// function BodySetColor(color){
//   document.querySelector('body').style.color=color;
// }
// function BodySetBackgroundColor(color){
//   document.querySelector('body').style.backgroundColor=color;
// }

var Body = {
  setColor : function (color){
    document.querySelector('body').style.color=color;
  },
  setBackgroundColor : function (color){
    document.querySelector('body').style.backgroundColor=color;
  }
}
var Links = {
  setColor : function (color){
    // var alist = document.querySelectorAll('a')
    // var i = 0
    // while(i < alist.length){
    // alist[i].style.color = color;
    // i = i + 1
    // }
    $('a').css('color', color)
  }
}

function nightDayHandler(self){
   var target = document.querySelector('body');
   if(self.value === 'night'){
     self.value = 'day';
     Links.setColor('powderblue');
     Body.setColor('white');
     Body.setBackgroundColor('#313131')

   } else {
     self.value = 'night';
     Links.setColor('blue');
     Body.setColor('#313131');
     Body.setBackgroundColor('white')
   }
}
