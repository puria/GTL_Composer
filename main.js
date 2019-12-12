const table = {'a': {'structure': "[('rect', 0, False)]", 'index': 0}, 'b': {'structure': "[('rect', 90, False)]", 'index': 1}, 'c': {'structure': "[('rect', 180, False)]", 'index': 2}, 'd': {'structure': "[('rect', 270, False)]", 'index': 3}, 'e': {'structure': "[('rect', 0, False), ('rect', 180, False)]", 'index': 0}, 'f': {'structure': "[('rect', 90, False), ('rect', 270, False)]", 'index': 1}, 'g': {'structure': "[('rect', 0, False), ('rect', 90, False)]", 'index': 0}, 'h': {'structure': "[('rect', 90, False), ('rect', 180, False)]", 'index': 1}, 'i': {'structure': "[('rect', 180, False), ('rect', 270, False)]", 'index': 2}, 'j': {'structure': "[('rect', 270, False), ('rect', 0, False)]", 'index': 3}, 'k': {'structure': "[('rect', 0, False), ('rect', 90, False), ('rect', 180, False)]", 'index': 0}, 'l': {'structure': "[('rect', 90, False), ('rect', 180, False), ('rect', 270, False)]", 'index': 1}, 'm': {'structure': "[('rect', 180, False), ('rect', 270, False), ('rect', 0, False)]", 'index': 2}, 'n': {'structure': "[('rect', 270, False), ('rect', 0, False), ('rect', 90, False)]", 'index': 3}, 'o': {'structure': "[('rect', 0, False), ('rect', 90, False), ('rect', 180, False), ('rect', 0, False)]", 'index': 0}, 'p': {'structure': "[('rect', 0, False), ('diag_0', 0, True)]", 'index': 0}, 'q': {'structure': "[('rect', 90, False), ('diag_0', 90, True)]", 'index': 1}, 'r': {'structure': "[('rect', 180, False), ('diag_0', 180, True)]", 'index': 2}, 's': {'structure': "[('rect', 270, False), ('diag_0', 270, True)]", 'index': 3}, 't': {'structure': "[('rect', 0, False), ('diag_0', 0, False)]", 'index': 0}, 'u': {'structure': "[('rect', 90, False), ('diag_0', 90, False)]", 'index': 1}, 'v': {'structure': "[('rect', 180, False), ('diag_0', 180, False)]", 'index': 2}, 'w': {'structure': "[('rect', 270, False), ('diag_0', 270, False)]", 'index': 3}, 'x': {'structure': "[('diag_0', 0, True)]", 'index': 0}, 'y': {'structure': "[('diag_0', 90, True)]", 'index': 1}, 'z': {'structure': "[('diag_0', 180, True)]", 'index': 2}, 'A': {'structure': "[('diag_0', 270, True)]", 'index': 3}, 'B': {'structure': "[('diag_0', 0, False)]", 'index': 0}, 'C': {'structure': "[('diag_0', 90, False)]", 'index': 1}, 'D': {'structure': "[('diag_0', 180, False)]", 'index': 2}, 'E': {'structure': "[('diag_0', 270, False)]", 'index': 3}, 'F': {'structure': "[('diag_1', 0, False), ('diag_1', 180, False)]", 'index': 0}, 'G': {'structure': "[('diag_1', 90, False), ('diag_1', 270, False)]", 'index': 1}, 'H': {'structure': "[('diag_1', 0, False), ('diag_1', 180, False), ('diag_1', 180, True)]", 'index': 0}, 'I': {'structure': "[('diag_1', 90, False), ('diag_1', 270, False), ('diag_1', 270, True)]", 'index': 1}, 'J': {'structure': "[('diag_1', 0, True), ('diag_1', 180, True), ('diag_1', 180, False)]", 'index': 0}, 'K': {'structure': "[('diag_1', 90, True), ('diag_1', 270, True), ('diag_1', 270, False)]", 'index': 1}, 'L': {'structure': "[('diag_1', 0, False), ('diag_1', 180, False), ('diag_1', 180, True), ('diag_1', 0, True)]", 'index': 0}, 'M': {'structure': "[('rect', 0, False), ('rect', 180, False), ('diag_1', 0, False)]", 'index': 0}, 'N': {'structure': "[('rect', 90, False), ('rect', 270, False), ('diag_1', 90, False)]", 'index': 1}, 'O': {'structure': "[('rect', 180, False), ('rect', 0, False), ('diag_1', 180, False)]", 'index': 2}, 'P': {'structure': "[('rect', 270, False), ('rect', 90, False), ('diag_1', 270, False)]", 'index': 3}, 'Q': {'structure': "[('rect', 0, False), ('diag_1', 180, False), ('diag_1', 180, True)]", 'index': 0}, 'R': {'structure': "[('rect', 90, False), ('diag_1', 270, False), ('diag_1', 270, True)]", 'index': 1}, 'S': {'structure': "[('rect', 180, False), ('diag_1', 0, False), ('diag_1', 0, True)]", 'index': 2}, 'T': {'structure': "[('rect', 270, False), ('diag_1', 90, False), ('diag_1', 90, True)]", 'index': 3}, 'U': {'structure': "[('rect', 0, False), ('rect', 180, False), ('diag_1', 0, True), ('diag_1', 180, True)]", 'index': 0}, 'V': {'structure': "[('rect', 90, False), ('rect', 270, False), ('diag_1', 90, True), ('diag_1', 270, True)]", 'index': 1}, 'W': {'structure': "[('rect', 180, False), ('rect', 0, False), ('diag_1', 180, True), ('diag_1', 0, True)]", 'index': 2}, 'X': {'structure': "[('rect', 270, False), ('rect', 90, False), ('diag_1', 270, True), ('diag_1', 90, True)]", 'index': 3}, 'Y': {'structure': "[('rect', 0, False), ('rect', 90, False), ('rect', 180, False), ('diag_1', 0, True)]", 'index': 0}, 'Z': {'structure': "[('rect', 90, False), ('rect', 180, False), ('rect', 270, False), ('diag_1', 90, True)]", 'index': 1}, '0': {'structure': "[('rect', 180, False), ('rect', 270, False), ('rect', 0, False), ('diag_1', 180, True)]", 'index': 2}, '1': {'structure': "[('rect', 270, False), ('rect', 0, False), ('rect', 90, False), ('diag_1', 270, True)]", 'index': 3}, '2': {'structure': "[('rect', 0, False), ('rect', 180, False), ('diag_0', 0, True), ('diag_0', 180, True)]", 'index': 0}, '3': {'structure': "[('rect', 90, False), ('rect', 270, False), ('diag_0', 90, True), ('diag_0', 270, True)]", 'index': 1}, '4': {'structure': "[('rect', 180, False), ('rect', 0, False), ('diag_0', 180, True), ('diag_0', 0, True)]", 'index': 2}, '5': {'structure': "[('rect', 270, False), ('rect', 90, False), ('diag_0', 270, True), ('diag_0', 90, True)]", 'index': 3}}

let props = {
  unicode_name: '',
  rows: 7,
  lines: 7,
  mouseover: false,
  characters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ012345',
  vertical_stretch: false,
  horizontal_stretch: false,
};

function add_stretch(namespace) {
  const handler = props.mouseover ? "mouseover" : "click";
  $("code").off(`click.${namespace}`).off(`mouseover.${namespace}`)
  $(this).removeAttr(`data-${namespace}`)
  $(this).removeClass(`data-${namespace}`)

  const add_meta = function(e) {
    if (e.which == 1) {
      $(this).data(namespace, true)
      $(this).addClass(namespace)
    }
  }

  if (props[namespace]) {
    $("code")
      .on(`${handler}.${namespace}`, add_meta)
      .on(`mouseover.${namespace}`, add_meta)
  }
}

function add_x_stetch() { add_stretch('horizontal_stretch') }

function add_y_stetch() { add_stretch('vertical_stretch') }

function dot_paint(e) {
  let sign = $("input[name=char]:checked").val();
  var content = $(this).text();
  if (e.which==1)
    $(this).text(content !== "." ? "." : sign);
}

function draw_grid() {
  const lines = props.lines;
  const rows = props.rows;
  $("#glyph").html("");

  for (var line = 0; line < lines; line++) {
    $("#glyph").append($("<br>"));
    for (var row = 0; row < rows; row++) {
      var cls = ""
      if (row==0 || row==rows-1 || line==0 || line==lines-1)
         cls = "margin_area"

      $("#glyph").append($(`<code class="${cls}" data-i='${row}' data-j='${line}'>.</code>`));
    }
  }

  $("code").on(props.mouseover ? "mouseover.paint" : "click.paint", dot_paint);
}

function attach_paint_event() {
    $("code")
        .off("mouseover.paint")
        .off("click.paint")
        .on(props.mouseover ? "mouseover.paint" : "click.paint", dot_paint);
}

function generate_char_radio(char) {
    $("#chars").append($(`<div class='radio_container'>
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

function export_glyph() {
  let o = {}
  var legacy = $("#glyph").html().replace(/<br>/gi, "\r\n").replace(/<[^>]*>/g, "");
  o.unicode = props.unicode_name
  o.legacy_text = legacy
  o.rows = props.rows
  o.lines = props.lines
  o.cells = []

  $("code").each(function(index) {
    let metadata = $(this).data()
    metadata.char = $(this).text()
    metadata.transformation = table[metadata.char]
    o.cells.push(metadata)
  })

  return o;
}

function download() {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(export_glyph())));
  element.setAttribute('download', `${props.unicode_name}.json`);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

$(document).ready(function() {
  var gui = new dat.GUI();
  gui.add(props, "unicode_name")
  var rows_controller = gui.add(props, "rows");
  //var lines_controller = gui.add(props, "lines");
  var mouseover_controller = gui.add(props, "mouseover")
  var chars_controller = gui.add(props, "characters");
  var vertical_stretch_controller = gui.add(props, "vertical_stretch")
  var horizontal_stretch_controller = gui.add(props, "horizontal_stretch")
  rows_controller.onFinishChange(draw_grid)
  //lines_controller.onFinishChange(draw_grid)
  mouseover_controller.onChange(attach_paint_event)
  chars_controller.onFinishChange(generate_radio)
  horizontal_stretch_controller.onChange(add_x_stetch)
  vertical_stretch_controller.onChange(add_y_stetch)


  $("#copy").on("click", function() {
    console.log(export_glyph())
    download()
  });
});
