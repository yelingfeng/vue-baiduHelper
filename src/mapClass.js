import { creatMap, createPoint } from './helper'
/**
 * Map 类
 */
class Map {
    constructor(options) {
        this.options = options
        this.initMap()
        return this
    }

    initMap() {
        const defaultCenter = ['99.825', '36.384']
        const { el, center = defaultCenter, zoom, maxZoom } = this.options
        this.el = el
        this.mapCenter = center
        this.mapZoom = zoom
        this.maxZoom = maxZoom
        this.bMap = creatMap(this.el, { minZoom: 3, maxZoom: this.maxZoom })
        this.bMap.clearOverlays()

        const poi = createPoint(this.mapCenter[0], this.mapCenter[1])
        this.bMap.centerAndZoom(poi, this.mapZoom)
        this.bMap.enableScrollWheelZoom()
    }
}

export default Map
