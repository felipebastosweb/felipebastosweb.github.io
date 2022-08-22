import m from "mithril"

export class FormLabel {
    constructor(self) {
        this.for = self.for
        this.body = self.body
    }
    view(vnode) {
        return m("label.form-label",
            {
                for: this.for
            },
            this.body
        )
    }
}

const InputType = {
    text: "text",
    number: "number",
    email: "email",
    phone: "phone",
    checkbox: "checkbox",
    radio: "radio"
}

export class FormInput {
    constructor(self) {
        if (self.id != undefined) this.id = self.id
        if (self.name != undefined) this.name = self.name
        this.type = InputType[self.type] != undefined ? InputType[self.type] : InputType.text
        this.class = self.class != undefine ? self.class : "form-control"
        if (self.placeholder != undefined) this.placeholder = self.placeholder
        if (self.value != undefined) this.value = self.value
        if (self.min != undefined) this.min = self.min
        if (self.max != undefined) this.max = self.max
        if (self.readonly != undefined) this.readonly = self.readonly
        if (self.enabled != undefined) this.enabled = self.enabled
    }
    view () {
        return m(
            "input.form-control", this
        )
    }
}

export class InputText extends FormInput {
    constructor(self) {
        self.type = FormType.text
        super(self)
    }
    view = () => super.view()
}


export class InputEmail extends FormInput {
    constructor(self) {
        self.type = FormType.email
        super(self)
    }
    view = () => super.view()
}


export class InputNumber extends FormInput {
    constructor(self) {
        self.type = FormType.number
        super(self)
        // TODO: format number
    }
    view = () => super.view()
}

export class InputPhone extends FormInput {
    constructor(self) {
        self.type = FormType.phone
        super(self)
    }
    view = () => super.view()
}


export class InputTextarea {
    constructor(self) {
        this.id = self.id
        this.name = self.name
        this.class = self.class != undefined ? self.class : "form-control"
        this.rows = self.rows
        this.cols = self.cols
        this.body = self.body
        if (self.readonly != undefined) this.readonly = self.readonly
        if (self.enabled != undefined) this.enabled = self.enabled
    }
    view() {
        return m("textarea", {
                id: this.id,
                class: this.class,
                name: this.name,
                cols: this.cols,
                rows: this.rows,
                value: this.content,
                placeholder: this.placeholder,
            },
            this.body
        )
    }
}

export class FormSelectOptions {
    constructor(self) {
        this.id = self.id
        this.name = self.name
        this.class = self.class != undefined ? self.class : "form-control"
        this.options = self.options != undefined ? self.options : []
        if (self.readonly != undefined) this.readonly = self.readonly
        if (self.enabled != undefined) this.enabled = self.enabled
    }
    view() {
        return m("select.form-control", {
                "class": this.class, 
                name: this.name,
                type: this.type
            },
            [
                this.options.forEach(element => {
                  m("option", {
                        value: element.value,
                    }),
                    element.body
                })
            ]
        )
    }
}

export class InputRadio {
    constructor(self) {
        this.type = InputType.radio
        if (self.value != undefined) this.value = self.value
        if (self.checked != undefined) this.checked = self.checked
        if (self.readonly != undefined) this.readonly = self.readonly
        if (self.enabled != undefined) this.enabled = self.enabled
    }
    view() {
        // TODO: refatory this to object attributes list
        /***
         * this -> {type: this.type, ...}
         * **/
        return m("input", this)
    }

}

export class InputCheckbox {
    constructor(self) {
        this.type = InputType.checkbox
        if (self.value != undefined) this.value = self.value
        if (self.checked != undefined) this.checked = self.checked
        if (self.readonly != undefined) this.readonly = self.readonly
        if (self.enabled != undefined) this.enabled = self.enabled
    }
    view() {
        // TODO: refatory this to object attributes list
        /***
         * this -> {type: this.type, ...}
         * **/
        return m("input", this)
    }
}


const FormMethod = {
    get: "get",
    post: "post",
    put: "put",
    delete: "delete",
    patch: "patch",
    options: "options"
}

const FormEnctype = {
    application: "application/x-www-form-urlencoded",
    multipart: "multipart/form-data",
    text: "text/plain"
}


export default class Form {
    constructor(self) {
        if (self.id != undefined) this.id = self.id
        if (self.class != undefined) this.class = self.class
        if (self.action != undefined) this.action = self.action
        this.enctype = FormEnctype[self.entype] != undefined ? FormEnctype[self.enctype] : FormEnctype.multipart
        this.body = self.body
    }
    view() {
        return m("form", this, this.body.forEach(element => {
            m(element)
        }))
    }
}