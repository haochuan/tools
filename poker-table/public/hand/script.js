var socket = io("http://10.0.1.61:3000");

function sendCard() {
  anime({
    targets: ".card",
    translateY: "-500px",
    duration: 1000,
    loop: false
  });
}
function receiveCard() {
  anime({
    targets: ".card",
    translateY: "0px",
    duration: 1000,
    loop: false
  });
}

$(document).ready(function() {
  // $("button").click(function(e) {
  //   throwCard();
  // });
  $(".card").click(function(e) {
    sendCard();
    socket.emit("send-to-table");
    console.log("send");
  });
  socket.on("receive-from-table", function(data) {
    receiveCard();
  });
});
