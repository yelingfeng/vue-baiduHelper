import { creatMap, createPoint } from './mapCommoner'
// 默认center
const defaultCenter = ['99.825', '36.384']

class MapHelper {
    constructor({ el, center = defaultCenter, zoom, maxZoom, isDraw }) {
        this.el = el
        this.mapCenter = center
        this.mapZoom = zoom
        this.maxZoom = maxZoom
        // 是否开启绘制模式
        this.isDraw = isDraw
        this.overlays = []
        // 箭头相关
        this.arrowLays = []
        this.ploylineDatas = []
        this.create()
    }

    create() {
        this.map = creatMap(this.el, { minZoom: 3, maxZoom: this.maxZoom })
        this.map.clearOverlays()
        const poi = createPoint(this.mapCenter[0], this.mapCenter[1])
        this.map.centerAndZoom(poi, this.mapZoom)
        this.map.enableScrollWheelZoom()
    }
}

export default MapHelper
