$(document).ready(function () {
    $('.text').textillate({
        loop: true,
        sync: true,
        in: {
            effect: "bounceIn", // Corrected effect name
        },
        out: {
            effect: "bounceOut", // Corrected effect name
        },
    });
});
