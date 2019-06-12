class MapHelper {
    constructor(options) {
        let { el, center, zoom, maxZoom, isDraw } = options
        this.options = options
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
    }
}

export default MapHelper
