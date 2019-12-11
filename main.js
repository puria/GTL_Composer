let props = {
  unicode_name: '',
  rows: 10,
  lines: 10,
  mouseover: false,
  characters: '│┤└┴┬├─┼┘┌┐/\\',
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
    $(this).text(content !== "·" ? "·" : sign);
}

function draw_grid() {
  const lines = props.lines;
  const rows = props.rows;
  $("#glyph").html("");

  for (var line = 0; line < lines; line++) {
    $("#glyph").append($("<br>"));
    for (var row = 0; row < rows; row++) {
      $("#glyph").append($(`<code data-i='${row}' data-j='${line}'>·</code>`));
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

function export_glyph() {
  let o = {}
  var legacy = $("#glyph").html().replace(/<br>/gi, "\r\n").replace(/<[^>]*>/g, "");
  o.unicode = props.unicode_name
  o.legacy_text = legacy
  o.rows = props.rows
  o.lines = props.lines
  o.modules = []

  $("code").each(function(index) {
    let metadata = $(this).data()
    o.modules.push(metadata)
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
  var lines_controller = gui.add(props, "lines");
  var mouseover_controller = gui.add(props, "mouseover")
  var chars_controller = gui.add(props, "characters");
  var vertical_stretch_controller = gui.add(props, "vertical_stretch")
  var horizontal_stretch_controller = gui.add(props, "horizontal_stretch")
  rows_controller.onFinishChange(draw_grid)
  lines_controller.onFinishChange(draw_grid)
  mouseover_controller.onChange(attach_paint_event)
  chars_controller.onFinishChange(generate_radio)
  horizontal_stretch_controller.onChange(add_x_stetch)
  vertical_stretch_controller.onChange(add_y_stetch)


  $("#copy").on("click", function() {
    console.log(export_glyph())
    download()
    // var $temp = $("<textarea>");
    // $("body").append($temp);
    // var tbc = $("#glyph")
    //   .html()
    //   .replace(/<br>/gi, "\r\n")
    //   .replace(/<[^>]*>/g, "");
    // $temp.val(tbc).select();
    // document.execCommand("copy");
    // $temp.remove();
  });
});
