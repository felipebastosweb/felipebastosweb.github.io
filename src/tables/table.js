var m = require("mithril")

var thead = {
    view: function (vnode) {
        return m("thead", {class})
    }
}

var table = {}


function styleTable(table) {
    table.attrs.class = "table table-striped";
    return table;
};

styleTable(table(ctrl));

