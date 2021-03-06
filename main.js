const char_table = {
  "e": "B0",
  "f": "B1",
  "m": "I2",
  "n": "I1",
  "k": "I0",
  "l": "I3",
  "x": "C0",
  "y": "C1",
  "z": "C2",
  "w": "C3",
  "j": "A0",
  "g": "A1",
  "h": "A2",
  "i": "A3",
  "a": "T0",
  "b": "T1",
  "c": "T2",
  "d": "T3",
  "o": "D0",
  "p": "D1",
  "q": "D2",
  "r": "D3",
  "s": "V3",
  "t": "V1",
  "u": "V0",
  "v": "V2",
  ".": "00",
  "\r\n": "\r\n",
};

let props = {
  unicode_name: '',
  rows: 7,
  lines: 3,
  mouseover: false,
  characters: 'abcdjghixyzwknmlopqrutsvef',
  horizontal_stretch: false,
};

function add_stretch(namespace) {
  $("code").off(`click.${namespace}`).off(`mouseover.${namespace}`)
  $(this).removeAttr(`data-${namespace}`)
  $(this).removeClass(`data-${namespace}`)

  const add_meta = function(e) {
    if (e.which == 1) {
      $(this).data(namespace, true)
      $(this).toggleClass(namespace)
    }
  }

  if (props[namespace]) {
    $("code")
      .on(`click.${namespace}`, add_meta)
      .on(`mouseover.${namespace}`, add_meta)
  }
}

function add_x_stetch() { add_stretch('horizontal_stretch') }

function add_y_stetch() { add_stretch('vertical_stretch') }

function dot_paint() {
  let sign = $("input[name=char]:checked").val();
  var content = $(this).text();
  // if (e.which==1)
  $(this).text(content !== "." ? "." : sign);
}

function dot_paint_over(e) {
  let sign = $("input[name=char]:checked").val();
  var content = $(this).text();
  if (e.which==1)
    $(this).text(content !== "." ? "." : sign);
}

function rotate() {
  var index = $(this).data('rotate');
  var next_index = (index + 1) % 4;
  $(this).removeClass(`rotate-${index}`);
  $(this).data('rotate', next_index);
  $(this).addClass(`rotate-${index}`);

  var el = $(this);
  var newone = el.clone(true);
  el.before(newone);
  el.remove();
}

function draw_grid() {
  const lines = props.lines;
  const rows = props.rows;
  $("#glyph").html("");

  for (var line = 0; line < lines; line++) {
    $("#glyph").append($("<br>"));
    for (var row = 0; row < rows; row++) {
      var cls = ""
      if (row==0 || row==rows-1)
         cls = "margin_area"

      $("#glyph").append($(`<code class="${cls}" data-rotate='0' data-i='${row}' data-j='${line}'>.</code>`));
    }
  }

  attach_paint_event()
}

function attach_paint_event() {
    $("code")
        .on("mouseover.paint", dot_paint_over)
        .on("click.paint", dot_paint);
}

function generate_char_radio(char) {
    $("#chars").append($(`<div class='radio_container'>
    <input type="radio" id="${char}" name="char" value="${char}">
    <label for="char">${char}</label>
    </div>`))
}

function generate_radio() {
    $("#chars").html("")
    for (var i in props.characters) {
        generate_char_radio(props.characters[i])
    }
    generate_char_radio(".")
}

function export_glyph() {
  let csv = ""
  let legacy = $("#glyph").html().replace(/<br>/gi, "\r\n").replace(/<[^>]*>/g, "");

  $("code").each(function(i) {
    let el = i % props.rows + 1 == props.rows
    let expanded = $(this).data('horizontal_stretch') ? "*" : "";
    let code = char_table[$(this).text()]

    const ending = el ? "\r\n" : ","
    const __ = code + expanded + ending
    csv += __
  });

  return csv;
}

function download() {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(export_glyph()));
  element.setAttribute('download', `${props.unicode_name}.csv`);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

function findInCharTable(value) {
  return Object.keys(char_table).find(key => char_table[key] === value);
}

function load() { 
  let csv = $('#CSV').val()
  const lines = csv.split('\n')
  for (let i in lines) {
    const glyphs = lines[i].split(",").map(function(item) { return item.trim(); });
    for (let j in glyphs) {
      const splitted_char = glyphs[j].split("*")
      const extended = splitted_char.length == 2
      const cell = $(`[data-i=${j}][data-j=${i}]`)
      cell.html(findInCharTable(splitted_char[0]))
      if (extended) {
        cell.data('horizontal_stretch', true)
        cell.addClass('horizontal_stretch')
      }
    }
  }
}

function load_modal() {  $(".modal").addClass("is-active") }

function close_modal() {  $(".modal").removeClass("is-active") }

$(document).ready(function() {
  var gui = new dat.GUI();
  gui.add(props, "unicode_name")
  var rows_controller = gui.add(props, "rows");
  var lines_controller = gui.add(props, "lines");
  // var mouseover_controller = gui.add(props, "mouseover")
  // var chars_controller = gui.add(props, "characters");
  // var vertical_stretch_controller = gui.add(props, "vertical_stretch")
  var horizontal_stretch_controller = gui.add(props, "horizontal_stretch")
  rows_controller.onFinishChange(draw_grid)
  lines_controller.onFinishChange(draw_grid)
  // mouseover_controller.onChange(attach_paint_event)
  // chars_controller.onFinishChange(generate_radio)
  generate_radio()
  draw_grid()
  horizontal_stretch_controller.onChange(add_x_stetch)
  // vertical_stretch_controller.onChange(add_y_stetch)

  $("#load").on("click", load_modal);
  $("#load_csv").on("click", load);
  $("#copy").on("click", download);
  $(".close").on("click", close_modal);
});
