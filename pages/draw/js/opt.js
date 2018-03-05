;
(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define('opt', [], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        if (root) {
            root.opt = factory();
        } else {
            const opt = factory();
        }
    }
}(this,
    function() {
        var opt = {
            "shape": {
                "text": "图形",
                "active": true,
                "shape": {
                    "value": [{
                            "key": "line",
                            "text": "线条"
                        },
                        {
                            "key": "triangle",
                            "text": "三角形"
                        },
                        {
                            "key": "square",
                            "text": "正方形"
                        },
                        {
                            "key": "rectangle",
                            "text": "矩形"
                        },
                        {
                            "key": "polygon",
                            "text": "多边形"
                        },
                        {
                            "key": "star",
                            "text": "星形"
                        },
                        {
                            "key": "circle",
                            "text": "圆形"
                        },
                        {
                            "key": "inpolygon",
                            "text": "内切多边形"
                        },
                        {
                            "key": "flower",
                            "text": "花"
                        },
                        {
                            "key": "sunflower",
                            "text": "太阳花"
                        },
                        {
                            "key": "sierpinski",
                            "text": "谢尔宾斯基"
                        },

                        {
                            "key": "ray",
                            "text": "射线"
                        },
                        {
                            "key": "ellipse",
                            "text": "椭圆"
                        },
                        {
                            "key": "diamond",
                            "text": "菱形"
                        },
                        {
                            "key": "cross",
                            "text": "交叉线"
                        },
                        {
                            "key": "ring",
                            "text": "环形"
                        },
                        {
                            "key": "mirror",
                            "text": "镜像"
                        },
                        {
                            "key": "spiral",
                            "text": "螺线"
                        },
                        {
                            "key": "fibonacci",
                            "text": "斐波那契螺线"
                        },
                        {
                            "key": "zebra",
                            "text": "斑马"
                        },
                        {
                            "key": "diagonal",
                            "text": "对角线"
                        }
                    ],
                    "type": "cycle",
                    "index": 19,
                    "text": "图形"

                },
                "a": {
                    "value": [0, 60, 120, 180],
                    "type": "cycle",
                    "index": 0,
                    "text": "角度",
                    "auto":true
                },
                "num": {
                    "value": [3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 100],
                    "type": "cycle",
                    "index": 0,
                    "text": "边数",
                    "auto":true
                },
                "r": {
                    "value": [5, 10, 30, 40, 60, 80, 120, 200, 300],
                    "type": "cycle",
                    "index": 2,
                    "text": "半径"
                },
                "rRatio": {
                    "value": [0.5, 0.6, 0.7, 0.8, 0.9, 0.99, 1, 1.01, 1.1, 1.2, 1.3, [0.5, 2],
                        [0.1, 5, 2]
                    ],
                    "type": "cycle",
                    "index": 6,
                    "text": "半径变化率"
                },
                "rRatioType": {
                    "value": [{
                            "key": "cv",
                            "text": "匀速"
                        },
                        {
                            "key": "ac",
                            "text": "加速"
                        }
                    ],
                    "type": "cycle",
                    "index": 0,
                    "text": "变化率类型"
                },
                "turns": {
                    "value": [1, 2, 3, 4, 5, 6, 10, 20],
                    "type": "cycle",
                    "index": 0,
                    "text": "匝数"
                },
                "begin": {
                    "value": true,
                    "text": "新开画布"
                },
                "closed": {
                    "value": true,
                    "text": "图形闭合"
                },
                "showExcircle": {
                    "value": false,
                    "text": "显示外切圆"
                },

                "showVertices": {
                    "value": false,
                    "text": "显示顶点"
                },

                "verticesIdentifier": {
                    "value": false,
                    "text": "顶点编号"
                },
                "showRadius": {
                    "value": false,
                    "text": "显示半径"
                },

                "lineWidth": {
                    "value": [0.5, 1, 2, 3, 4, 5, 10, 20],
                    "type": "cycle",
                    "index": 1,
                    "text": "线条宽度"
                },
                "lineColor":{
                    "value": "rgb",
                    "type": "color",
                    "text": "线条颜色"
                },

                "fill": {
                    "value": false,
                    "text": "填色"
                },
                "color": {
                    "value": "rgba",
                    "type": "color",
                    "text": "颜色"
                }
            },
            "group": {
                "text": "组合",
                "switch": "off",
                "group": {
                    "value": [{
                            "key": "surround",
                            "text": "环绕"
                        },
                        {
                            "key": "concentric",
                            "text": "同心"
                        },
                        // {
                        //     "key": "inpolygon",
                        //     "text": "内切多边形"
                        // },
                        {
                            "key": "excircle",
                            "text": "外切圆"
                        },
                        {
                            "key": "repeat",
                            "text": "平铺"
                        },
                        {
                            "key": "ring",
                            "text": "环形"
                        }
                    ],
                    "type": "cycle",
                    "index": 0,
                    "text": "组合"
                },
                "sr": {
                    "value": [0,30, 60, 120, 200, 300],
                    "type": "cycle",
                    "index": 3,
                    "text": "环绕半径"
                },
                "clockwise": {
                    "value": [{
                            "key": true,
                            "text": "顺时针"
                        },
                        {
                            "key": false,
                            "text": "逆时针"
                        }
                    ],
                    "type": "cycle",
                    "index": 0,
                    "text": "顺时针"
                },
                "rotation": {
                    "value": true,
                    "text": "自转"
                },
                "interval": {
                    "value": [0, 1, 2, 3, 4, 5, 6, 10, 20, 30, 36, 60, 72, 90, 108, 120, 180],
                    "type": "cycle",
                    "index": 10,
                    "text": "图形间距"
                },
                "animate": {
                    "value": true,
                    "text": "动画"
                },
                "animationInterval": {
                    "value": [5, 10, 20, 30, 60, 100, 500, 1000],
                    "type": "cycle",
                    "index": 1,
                    "text": "动画间隔"
                },
                "colorful": {
                    "value": true,
                    "text": "多彩"
                }

            },
            "motion": {
                "text": "运动",
                "switch": "off",
                "mode": {
                    "value": [{
                            "key": "move",
                            "text": "自由移动"
                        },
                        {
                            "key": "rotation",
                            "text": "旋转"
                        }
                    ],
                    "type": "cycle",
                    "index": 0,
                    "text": "运动形式"
                },
                "speed": {
                    "value": [0.1,0.5,1, 2, 3, 5, 10, 30, 60, 120],
                    "type": "cycle",
                    "index": 2,
                    "text": "速度"
                },
                "num": //movenum
                {
                    "value": [1, 2, 3, 4, 5, 10, 20],
                    "type": "cycle",
                    "index": 0,
                    "text": "物体数量"
                },
                "link": {
                    "value": false,
                    "text": "连线"
                },
                "bounce": {
                    "value": true,
                    "text": "反弹"
                },
                "colorful": {
                    "value": true,
                    "text": "多彩"
                }
            }
        }


        return opt;
    }));