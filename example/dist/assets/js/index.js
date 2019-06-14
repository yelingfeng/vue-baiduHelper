/******/ ;(function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {} // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
            /******/ return installedModules[moduleId].exports
            /******/
        } // Create a new module (and put it into the cache)
        /******/ /******/ var module = (installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: false,
            /******/ exports: {}
            /******/
        }) // Execute the module function
        /******/
        /******/ /******/ modules[moduleId].call(
            module.exports,
            module,
            module.exports,
            __webpack_require__
        ) // Flag the module as loaded
        /******/
        /******/ /******/ module.l = true // Return the exports of the module
        /******/
        /******/ /******/ return module.exports
        /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
            /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            })
            /******/
        }
        /******/
    } // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            })
            /******/
        }
        /******/ Object.defineProperty(exports, '__esModule', { value: true })
        /******/
    } // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
        value,
        mode
    ) {
        /******/ if (mode & 1) value = __webpack_require__(value)
        /******/ if (mode & 8) return value
        /******/ if (
            mode & 4 &&
            typeof value === 'object' &&
            value &&
            value.__esModule
        )
            return value
        /******/ var ns = Object.create(null)
        /******/ __webpack_require__.r(ns)
        /******/ Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
        })
        /******/ if (mode & 2 && typeof value != 'string')
            for (var key in value)
                __webpack_require__.d(
                    ns,
                    key,
                    function(key) {
                        return value[key]
                    }.bind(null, key)
                )
        /******/ return ns
        /******/
    } // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
        /******/ var getter =
            module && module.__esModule
                ? /******/ function getDefault() {
                      return module['default']
                  }
                : /******/ function getModuleExports() {
                      return module
                  }
        /******/ __webpack_require__.d(getter, 'a', getter)
        /******/ return getter
        /******/
    } // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property)
    } // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = '/' // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 0))
    /******/
})(
    /************************************************************************/
    /******/ {
        /***/ './src/index.js':
            /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
            /*! exports provided: createBMapHelper, install, default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'createBMapHelper',
                    function() {
                        return createBMapHelper
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'install',
                    function() {
                        return install
                    }
                )
                /* harmony import */ var _mapClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./mapClass */ './src/mapClass.js'
                )

                const createBMapHelper = (opts = {}) => {
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
                            this.$map = new _mapClass__WEBPACK_IMPORTED_MODULE_0__[
                                'default'
                            ]({
                                el: this.$el,
                                zoom: 8,
                                maxZoom: 18
                            })
                        },

                        render(h) {
                            const styles = {
                                width: this.width + 'px',
                                height: this.height + 'px'
                            }
                            return
                            h('div', {
                                ref: 'mapComp',
                                style: styles
                            })
                        }
                    }
                }
                const install = (Vue, opts) => {
                    const Component = createBMapHelper(opts)
                    Vue.component(Component.name, Component)
                }
                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = install

                /***/
            },

        /***/ './src/mapClass.js':
            /*!*************************!*\
  !*** ./src/mapClass.js ***!
  \*************************/
            /*! exports provided: default */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony import */ var _mapCommoner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! ./mapCommoner */ './src/mapCommoner.js'
                )
                // 默认center

                const defaultCenter = ['99.825', '36.384']

                class MapHelper {
                    constructor({ el, center = defaultCenter, zoom, maxZoom }) {
                        this.el = el
                        this.mapCenter = center
                        this.mapZoom = zoom
                        this.maxZoom = maxZoom
                        this.create()
                    }

                    create() {
                        this.map = Object(
                            _mapCommoner__WEBPACK_IMPORTED_MODULE_0__[
                                'creatMap'
                            ]
                        )(this.el, {
                            minZoom: 3,
                            maxZoom: this.maxZoom
                        })
                        this.map.clearOverlays()
                        const poi = Object(
                            _mapCommoner__WEBPACK_IMPORTED_MODULE_0__[
                                'createPoint'
                            ]
                        )(this.mapCenter[0], this.mapCenter[1])
                        this.map.centerAndZoom(poi, this.mapZoom)
                        this.map.enableScrollWheelZoom()
                    }
                }

                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = MapHelper

                /***/
            },

        /***/ './src/mapCommoner.js':
            /*!****************************!*\
  !*** ./src/mapCommoner.js ***!
  \****************************/
            /*! exports provided: createPoint, creatMap, drawPolygon, drawPolyline, drawCircle, createMarker, createMyMarker, createInfoWindow, createDrawingManager, createHeatmapOverlay, getPolygonArea */
            /***/ function(module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'createPoint',
                    function() {
                        return createPoint
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'creatMap',
                    function() {
                        return creatMap
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'drawPolygon',
                    function() {
                        return drawPolygon
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'drawPolyline',
                    function() {
                        return drawPolyline
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'drawCircle',
                    function() {
                        return drawCircle
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'createMarker',
                    function() {
                        return createMarker
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'createMyMarker',
                    function() {
                        return createMyMarker
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'createInfoWindow',
                    function() {
                        return createInfoWindow
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'createDrawingManager',
                    function() {
                        return createDrawingManager
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'createHeatmapOverlay',
                    function() {
                        return createHeatmapOverlay
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'getPolygonArea',
                    function() {
                        return getPolygonArea
                    }
                )
                const areaConfig = {
                    strokeColor: 'rgba(255, 0, 0, 0.7)',
                    strokeWeight: 1,
                    strokeOpacity: 0.8,
                    fillColor: '#da416f',
                    fillOpacity: 0.2 // Win样式配置
                }
                const winConfig = {
                    width: 250,
                    height: 0,
                    enableMessage: true // Line 样式配置
                }
                const lineConfig = {
                    // 边线颜色。
                    strokeColor: '#da416f',
                    // 填充颜色。当参数为空时，圆形将没有填充效果。
                    fillColor: '#da416f',
                    // 边线的宽度，以像素为单位
                    strokeWeight: 2,
                    // 边线透明度，取值范围0 - 1。
                    strokeOpacity: 0.8,
                    // 填充的透明度，取值范围0 - 1。
                    fillOpacity: 0.8,
                    // 边线的样式，solid或dashed。
                    strokeStyle: 'solid' // 画图工具 样式配置
                }
                const drawOptions = {
                    // 边线颜色。
                    strokeColor: 'red',
                    // 填充颜色。当参数为空时，圆形将没有填充效果。
                    fillColor: '#da416f',
                    // 边线的宽度，以像素为单位。
                    strokeWeight: 1,
                    // 边线透明度，取值范围0 - 1。
                    strokeOpacity: 0.8,
                    // 填充的透明度，取值范围0 - 1。
                    fillOpacity: 0.4,
                    // 边线的样式，solid或dashed。
                    strokeStyle: 'solid'
                    /**
                     * [createPoint 创建点 ]
                     * @param  {[type]} lng [description]
                     * @param  {[type]} lat [description]
                     * @return {[type]}     [description]
                     */
                }
                const createPoint = (lng, lat) => {
                    return new BMap.Point(Number(lng), Number(lat))
                }
                /**
                 * [创建地图]
                 * @param  {Dom} map dom
                 * @param {Object} config 地图配置
                 * @return {[type]}     [description]
                 */

                const creatMap = function(map, config) {
                    return new BMap.Map(map, config)
                }
                /**
                 *
                 * [根据一组经纬度画多边形]
                 * @param arr {Array{Object}}``
                 * @return {[type]} [description]
                 */

                const drawPolygon = function(arr) {
                    if (arr && arr.length > 0) {
                        const points = arr.map(({ lng, lat }) => {
                            return createPoint(lng, lat)
                        })
                        return new BMap.Polygon(points, areaConfig)
                    }
                }
                /**
                 * [画轨迹线]
                 * @param  {[type]} arr [description]
                 * @return {[type]}     [description]
                 */

                const drawPolyline = function(arr) {
                    if (arr && arr.length > 0) {
                        const points = arr.map(({ lng, lat }) => {
                            return createPoint(lng, lat)
                        }) // Let sy = new BMap.Symbol(7, {
                        //     scale: 0.4, //图标缩放大小
                        //     strokeColor: '#fff', //设置矢量图标的线填充颜色
                        //     strokeWeight: 1, //设置线宽
                        //     strokeOpacity: 1
                        // });
                        // let icons = new BMap.IconSequence(sy, '10', '30');
                        // lineConfig['icons'] = [icons];

                        const polyline = new BMap.Polyline(points, lineConfig)
                        return polyline
                    }
                }
                /**
                 * [画圆]
                 * @param  {[type]} lng    [description]
                 * @param  {[type]} lat    [description]
                 * @param  {[type]} radius [description]
                 * @return {[type]}        [description]
                 */

                const drawCircle = function({ lng, lat, radius }) {
                    const circle = new BMap.Circle(
                        createPoint(lng, lat),
                        radius,
                        areaConfig
                    )
                    return circle
                }
                /**
                 * [创建标记marker对象]
                 * @param  {String} lng              [description]
                 * @param  {String} lat              [description]
                 * @param  {String} [colorType='red' }]            [description]
                 * @return {[type]}                  [description]
                 */

                const createMarker = function({ lng, lat, colorType = 'red' }) {
                    const path = `./lib/vendor/gis/images/${colorType}Marker.png`
                    const myIcon = new BMap.Icon(path, new BMap.Size(35, 55))
                    const point = createPoint(lng, lat)
                    const marker = new BMap.Marker(point, {
                        icon: myIcon
                    })
                    return marker
                }
                /**
                 * [创建自定义标记：圆中间带数字（total）]
                 * @param  {String} lng              [description]
                 * @param  {String} lat              [description]
                 * @param  {String} total            [description]
                 * @return {[type]}                  [description]
                 */

                const createMyMarker = function({ lng, lat, total }) {
                    const point = new BMap.Point(lng, lat)

                    function ComplexCustomOverlay(point, total) {
                        this._point = point
                        this._text = total
                    }

                    ComplexCustomOverlay.prototype = new BMap.Overlay()

                    ComplexCustomOverlay.prototype.initialize = function(map) {
                        this._map = map
                        let div = document.createElement('div')
                        div.style.position = 'absolute'
                        div.style.height = '25px'
                        div.style.width = '25px'
                        div.style.borderRadius = '50%'
                        div.style.backgroundColor = '#DA416F'
                        div.style.color = 'white'
                        div.style.boxShadow = '0 2px 4px 0 rgba(0,0,0,0.50)'
                        div.style.lineHeight = '25px'
                        div.style.whiteSpace = 'nowrap'
                        div.style.MozUserSelect = 'none'
                        div.style.cursor = 'pointer'
                        div.style.fontSize = '12px'
                        div.style.textAlign = 'center'
                        let span = document.createElement('span')
                        div.append(span)
                        span.append(document.createTextNode(this._text))
                        map.getPanes().labelPane.append(div)
                        return div
                    }

                    ComplexCustomOverlay.prototype.draw = function() {
                        let map = this._map
                        let pixel = map.pointToOverlayPixel(this._point)
                        this._div.style.left = pixel.x - 13 + 'px'
                        this._div.style.top = pixel.y - 20 + 'px' // This._div.style.top = pixel.y - (index + 1) * 3 + 'px';
                    }

                    ComplexCustomOverlay.prototype.addEventListener = function(
                        event,
                        fun
                    ) {
                        this._div['on' + event] = fun
                    }

                    let marker = new ComplexCustomOverlay(point, total)
                    return marker
                }
                /**
                 * [创建信息窗口对象]
                 * @param  {String} content [description]
                 * @return {[type]}         [description]
                 */

                const createInfoWindow = function(content) {
                    // 创建信息窗口对象
                    let infoWindow = new BMap.InfoWindow(content, winConfig)
                    return infoWindow
                }
                /**
                 * [创建画图工具对象]
                 * @return {[type]} [description]
                 */

                const createDrawingManager = function(map) {
                    return new BMapLib.DrawingManager(map, {
                        // 是否开启绘制模式
                        isOpen: false,
                        // 是否显示工具栏
                        enableDrawingTool: true,
                        drawingToolOptions: {
                            // 位置
                            anchor: window.BMAP_ANCHOR_TOP_RIGHT,
                            // 偏离值
                            offset: new BMap.Size(5, 5),
                            // 鼠标绘制工具
                            drawingModes: [
                                window.BMAP_DRAWING_POLYGON,
                                window.BMAP_DRAWING_CIRCLE,
                                window.BMAP_DRAWING_RECTANGLE
                            ]
                        },
                        circleOptions: drawOptions,
                        polylineOptions: drawOptions,
                        polygonOptions: drawOptions,
                        rectangleOptions: drawOptions
                    })
                }
                /**
                 * 创建热力图层
                 * @param  {[type]} heatRadius [description]
                 * @return {[type]}            [description]
                 */

                const createHeatmapOverlay = function(map) {
                    let heatRadius = 30
                    let zoom = map.getZoom()

                    switch (zoom) {
                        case 19:
                            heatRadius = 40
                            break

                        case 18:
                            heatRadius = 30
                            break

                        case 17:
                            heatRadius = 23
                            break

                        case 16:
                            heatRadius = 17
                            break

                        case 15:
                            heatRadius = 12
                            break

                        default:
                            heatRadius = 10
                            break
                    }

                    const heatMapColorConfig = {
                        0.3: 'rgb(0,42, 255)',
                        0.5: 'rgb(123, 240, 123)',
                        0.6: 'rgb(242, 248, 90)',
                        0.8: 'rgb(247, 73, 66)'
                    }
                    const heatMapOlay = new BMapLib.HeatmapOverlay({
                        radius: heatRadius,
                        visible: true,
                        gradient: heatMapColorConfig
                    })
                    return heatMapOlay
                }
                /**
                 * 获取一段path的区域
                 * @param  {[type]} path [description]
                 * @return {[type]}      [description]
                 */

                const getPolygonArea = function(path) {
                    const ply = new BMap.Polygon(path)
                    const area = BMapLib.GeoUtils.getPolygonArea(ply) / 1000000
                    return area
                }

                /***/
            },

        /***/ 0:
            /*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
            /*! no static exports found */
            /***/ function(module, exports, __webpack_require__) {
                module.exports = __webpack_require__(
                    /*! ./src/index.js */ './src/index.js'
                )

                /***/
            }

        /******/
    }
)
//# sourceMappingURL=index.js.map
