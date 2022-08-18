import m from "mithril"

export class FormLabel {
    constructor(vnode) {}
    view(vnode) {
        return m(
            "label.form-label",
            {
                for: vnode.attrs.for
            },
            vnode.attrs.body
            )
    }
}

export class FormInput {
    constructor(vnode) {}
    view (vnode) {
        return m(
            "input.form-control", {
                name: vnode.attrs.name,
                type: vnode.attrs.type,
                placeholder: vnode.attrs.placeholder,
                required: vnode.attrs.required,
                readonly: vnode.attrs.readonly,
                value: vnode.attrs.value,
                min: vnode.attrs.min
            }
        )
    }
}

export class FormTextarea {
    constructor(vnode) {}
    view(vnode) {
        return m(
            "textarea.form-control", {
                name: vnode.attrs.name,
                cols: vnode.attrs.cols,
                rows: vnode.attrs.rows,
                value: vnode.attrs.content,
                placeholder: vnode.attrs.placeholder,
            }
        )
    }
}

export class FormSelectOptions {
    constructor(vnode) {}
    view(vnode) {
        return m(
            "select.form-control",
            {
                name: vnode.attrs.name,
                type: vnode.attrs.type
            }, 
            [
                vnode.attrs.options.forEach(element => {
                  m(
                    "option",
                    {
                        value: element.value,
                    }),
                    element.body
                })
            ]
        )
    }
}
