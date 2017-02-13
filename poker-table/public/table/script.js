var socket = io("http://10.0.1.61:3000");

function receiveCard() {
  anime({
    targets: ".card",
    translateY: "-500px",
    duration: 1000,
    loop: false
  });
}
function sendCard() {
  anime({
    targets: ".card",
    translateY: "0px",
    duration: 1000,
    loop: false
  });
}

$(document).ready(function() {
  socket.on("receive-from-hand", function(data) {
    console.log(data);
    console.log("receive");
    receiveCard();
  });
  $(".card").click(function(e) {
    sendCard();
    socket.emit("send-to-hand");
  });
});
