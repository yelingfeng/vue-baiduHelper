import BMapHelper from './mapClass'

export const createBMapHelper = (opts = {}) => {
    const name = opts.name || 'BMapHelper'

    return {
        name,

        props: {
            title: {
                type: [String, Boolean]
            }
        },

        data() {
            return {
                $Helper: new BMapHelper({})
            }
        },

        render(h) {
            return h('div', {
                attrs: {
                    title: this.title
                }
            })
        }
    }
}

export const install = (Vue, opts) => {
    const Component = createBMapHelper(opts)
    Vue.component(Component.name, Component)
}

export default install
