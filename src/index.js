import { createMapOptions } from './mapComponent'

export const install = (Vue, opts) => {
    const Component = createMapOptions(opts)
    Vue.component(Component.name, Component)
}

export default install
