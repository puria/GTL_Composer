let props = {
  rows: 10,
  lines: 10,
  mouseover: false,
  characters: '0#',
};

function dot_paint() {
  let sign = $("input[name=char]:checked").val();
  var content = $(this).text();
  $(this).text(content !== "·" ? "·" : sign);
}

function draw_grid() {
  const lines = props.lines;
  const rows = props.rows;
  $("#glyph").html("");

  for (var line = 0; line < lines; line++) {
    $("#glyph").append($("<br>"));
    for (var row = 0; row < rows; row++) {
      $("#glyph").append($("<code>·</code>"));
    }
  }

  $("code").on(props.mouseover ? "mouseover" : "click", dot_paint);
}

function attach_paint_event() {
    $("code")
        .off("mouseover")
        .off("click")
        .on(props.mouseover ? "mouseover" : "click", dot_paint);
}

function generate_char_radio(char) {
    $("#chars").append($(`<div>
    <input type="radio" id="${char}" name="char" value="${char}">
    <label for="sharp">${char}</label>
    </div>`))
}

function generate_radio() {
    $("#chars").html("")
    for (var i in props.characters) {
        generate_char_radio(props.characters[i])
    }
}

$(document).ready(function() {
  var gui = new dat.GUI();
  var rows_controller = gui.add(props, "rows");
  var lines_controller = gui.add(props, "lines");
  var mouseover_controller = gui.add(props, "mouseover")
  var chars_controller = gui.add(props, "characters");
  rows_controller.onFinishChange(draw_grid)
  lines_controller.onFinishChange(draw_grid)
  mouseover_controller.onChange(attach_paint_event)
  chars_controller.onFinishChange(generate_radio)
  

  $("#copy").on("click", function() {
    var $temp = $("<textarea>");
    $("body").append($temp);
    var tbc = $("#glyph")
      .html()
      .replace(/<br>/gi, "\r\n")
      .replace(/<[^>]*>/g, "");
    console.log(tbc, $("#glyph").html());
    $temp.val(tbc).select();
    document.execCommand("copy");
    $temp.remove();
  });
});
