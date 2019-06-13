import BMapHelper from './mapClass'

export const createBMapHelper = (opts = {}) => {
    const name = opts.name || 'BMapHelper'

    return {
        name,

        props: {
            title: {
                type: [String, Boolean]
            },
            width: {
                type: [String, Number]
            },
            height: {
                type: [String, Number]
            }
        },

        data() {
            return {}
        },

        mounted() {
            this.$map = new BMapHelper({
                el: this.$el,
                zoom: 8,
                maxZoom: 18
            })
        },

        render(h) {
            return h('div', {
                ref: 'mapComp',
                attrs: {
                    title: this.title
                },
                style: {
                    width: this.width + 'px',
                    height: this.height + 'px'
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
