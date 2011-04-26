dojo.provide("sketchSpaceDesigner.designer.modes.PanPlus");

dojo.require("sketchSpaceDesigner.designer.modes.Zoom");

dojo.declare("sketchSpaceDesigner.designer.modes.PanPlus", [sketchSpaceDesigner.designer.modes.Zoom], {
  enable: function () {
    this.inherited(arguments);
    $(this.designer.container).css({'cursor': 'url(/static/html/plugins/sketchSpace/imgeditbar_pan_icon.png),default'});
  },
  disable: function () {
    this.inherited(arguments);
    $(this.designer.container).css({'cursor': 'default'});
  },
  onMouseMove: function(event) {
    this.inherited(arguments);
    var mouse = this.inputState.mouse;
    var key = this.inputState.keyboard;
    if (    mouse[dojo.mouseButtons.LEFT] != undefined
        && !mouse[dojo.mouseButtons.LEFT].ctrlKey
        && !mouse[dojo.mouseButtons.LEFT].altKey
        && !mouse[dojo.mouseButtons.LEFT].shiftKey) {
       var mouseDown = mouse[dojo.mouseButtons.LEFT];
       var orig = this.getCurrentMouse(mouseDown, this.designer.surface);
       var mouse = this.getCurrentMouse(event, this.designer.surface);
       var move = dojox.gfx.matrix.translate(mouse.x - orig.x, mouse.y - orig.y);
       this.designer.surface_transform.setTransform(dojox.gfx.matrix.multiply(move, this.designer.surface_transform.originalMatrix));
    }
  }
});
