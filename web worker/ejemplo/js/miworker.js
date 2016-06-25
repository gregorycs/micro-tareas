self.addEventListener('message', function (event) {
 
var fecha= new Date();

while (new Date() - fecha <10000){

}
self.postMessage("desde el worker :"+event.data)
 
}, false);