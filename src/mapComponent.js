import Map from './mapClass'
import events from './events'
import { toKebabCase } from './util'

export const createMapOptions = (opts = {}) => {
    const name = opts.name || 'BMap'
    return {
        name,
        props: {
            width: {
                type: [String, Number]
            },
            height: {
                type: [String, Number]
            },
            center: {
                type: [Array]
            },
            zoom: {
                type: [Number, String]
            }
        },
        watch: {
            zoom(val, oldVal) {
                const { $map } = this
                if (val !== oldVal && val >= 3 && val <= 19) {
                    $map.bMap.setZoom(Number(val))
                }
            }
        },
        mounted() {
            this.$map = new Map({
                el: this.$refs.mapComp,
                zoom: this.zoom || 8,
                maxZoom: 18
            })
            this.bindEvent(this.$map.bMap)
        },
        methods: {
            bindEvent(map) {
                const ev = events[toKebabCase(this.$options._componentTag)]
                ev &&
                    ev.forEach(event => {
                        const hasOn = event.slice(0, 2) === 'on'
                        const eventName = hasOn ? event.slice(2) : event
                        const listener = this.$listeners[eventName]
                        listener && map.addEventListener(event, listener.fns)
                    })
            }
        },
        render(h) {
            const styles = {
                width: this.width + 'px',
                height: this.height + 'px'
            }
            return (
                <div class="mapContainer" style={styles}>
                    <div ref="mapComp" style="height:100%"></div>
                </div>
            )
        }
    }
}
