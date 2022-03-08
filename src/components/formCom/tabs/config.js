// 配置文件（用于表格布局）
export default {
    // 表1 重点行业污染地块基本情况表
    basic: [
        {
            type: "label",
            label: "1.地块编码",
            enKey: 'dkbm'
        },
        {
            type: "label",
            label: "2.地块名称",
            enKey: 'dkmc'
        },
        {
            type: "input",
            label: "3.原单位名称",
            enKey: 'ydwmc'
        },
        {
            type: "input",
            label: "4.法定代表人",
            enKey: 'fddbr'
        },
        {
            type: "location",
            label: "5.地块所在地",
            enKey: 'dkszd'
        },
        {
            type: "input",
            label: "6.行业类别",
            enKey: 'hylb'
        },
        {
            type: "input",
            label: "7.地块占地面积(m²)",
            enKey: 'dkzdmj'
        },
        {
            type: "date",
            label: "8.运营时间",
            enKey: 'yysj',
            layout: {
                dateType: 'date',
                isRange: true,
                placeholder: '选择日期',
                enKeys: [
                    'startDate',
                    'endDate'
                ]
            }
        },
        {
            type: "radio",
            label: "9.地块现使用权",
            enKey: 'dkxsyq',
            layout: {
                radioGroup:[
                    '原关闭搬迁企业',
                    '集体',
                    '土地储备单位',
                    '开发单位'
                ]
            }
        },
        {
            type: "input",
            label: "10.使用权单位名称",
            enKey: 'syqdwmc'
        },
        {
            type: "contact",
            label: "11.使用权单位联系方式",
            enKey: 'syqdwlxfs'
        },
        {
            type: "radio",
            label: "12.地块是否位于工业园或聚集区",
            enKey: 'dksfwygyyhjjq',
            layout: {
                radioGroup:[
                    '是',
                    '否',
                ]
            }
        },
        {
            type: "radio",
            label: "13.地块规划用途",
            enKey: 'dkghyt',
            layout: {
                radioGroup:[
                    '工业类用地',
                    '住宅类用地',
                    '商业类用地',
                    '公共场所用地',
                    '不确定'
                ]
            }
        },
        {
            type: "table",
            label: "14.地块利用历史",
            enKey: 'dklyls',
            layout: {
                tableArrange: [
                    {
                        prop: 'startDate',
                        label: '起始时间',
                    },
                    {
                        prop: 'endDate',
                        label: '结束时间',
                    },
                    {
                        prop: 'purpose',
                        label: '土地用途',
                    },
                    {
                        prop: 'industry',
                        label: '行业',
                    }
                    ,
                    {
                        prop: 'slot',
                        label: '操作',
                        slotName: 'operation14',
                    }
                ],
                dialogConfig: [
                    {
                        type: 'date',
                        label: '起始时间',
                        enKey: 'startDate',
                        labelWidth : "200px"
                    },
                    {
                        type: 'date',
                        label: '结束时间',
                        enKey: 'endDate',
                        labelWidth : "200px"
                    },
                    {
                        type: 'select',
                        label: '土地用途',
                        enKey: 'purpose',
                        labelWidth : "200px"
                    },
                    {
                        type: 'select',
                        label: '行业',
                        enKey: 'industry',
                        labelWidth : "200px"
                    }
                ]
            }
        },
        {
            type: "table",
            label: "15.地块空间数据",
            enKey: 'dkkjsj',
            layout: {
                tableArrange: [
                    {
                        prop: 'dataName',
                        label: '资料名称',
                    },
                    {
                        prop: 'collectDate',
                        label: '采集时间',
                    },
                    {
                        prop: 'slot',
                        label: '操作',
                        slotName: 'operation15',
                    }
                ],
                dialogConfig: [
                    {
                        type: 'input',
                        label: '资料名称',
                        enKey: 'dataName'
                    },
                    {
                        type: 'date',
                        label: '采集时间',
                        enKey: 'collectDate'
                    },
                    {
                        type: 'slot',
                        label: '地图',
                        enKey: 'mapData',
                        slotName: 'map'
                    }
                ]
            }
        },
        {
            type: "slot",
            label: "16.现场资料",
            enKey: 'xczl'
        },
        {
            type: "checkbox",
            label: "17.测试",
            enKey: 'cs',
            layout: {
                checkGroup: [
                    '地块内裸露土壤有明显颜色异常、油渍等污染痕迹',
                    '地块内裸露土壤有异常气味',
                    '现场快速检测设备（XRF、PID 等）显示污染物含量明显高于清洁土壤',
                    '周边邻近地块曾发生过化学品泄漏或环境污染事故',
                    '该企业危险废物曾自行利用处置',
                    '地块内有遗留的危险废物',
                    '地块内设施、构建筑物等已拆除或严重破损',
                    '通过访谈或已有记录表明该地块内土壤曾受到过污染'
                ]
            }

        }
    ],
    // 表2 重点行业污染地块污染源信息调查表
    source: [
        {
            type: "single",
            label: "一、基本情况"
        },
        {
            type: "upload",
            label: "1.平面布置图",
            enKey: 'pmbzt'
        },
        {
            type: "upload",
            label: "2. 主要产品清单",
            enKey: 'zycpqd'
        },
        {
            type: "upload",
            label: "3. 主要原辅材料清单",
            enKey: 'zyyfclqd'
        },
        {
            type: "upload",
            label: "4. 主要生产工艺流程图",
            enKey: 'zyscgylct'
        },
        {
            type: "single",
            label: "二、地块综合情况",
        },
        {
            type: "area",
            label: "1.重点区域总面积(m²)<br>(包括生产区、储存区、废水治理区、固体废物贮存或处置区)",
            enKey: "zdqyzmj"
         },
        {
            type: "radio",
            label: "2. 重点区域地表（除绿化带外）是否存在未硬化地面",
            enKey: "zdqydb",
            layout: {
                radioGroup:[
                    '是',
                    '否',
                ]
            }
        },
        {
            type: "radio",
            label: "3.重点区域硬化地面是否存在破损或裂缝",
            enKey: "zdqyyh",
            layout: {
                radioGroup:[
                    '是',
                    '否',
                ]
            }
        },
        {
            type: "radio",
            label: "4. 地块内是否存在无硬化或防渗的工业废水排放沟渠、渗坑、水塘",
            enKey: "dknsfcz",
            layout: {
                radioGroup:[
                    '是',
                    '否',
                ]
            }
        },
        {
            type: "radio",
            label: "5. 地块内是否有产品、原辅材料、油品的地下储罐或输送管线",
            enKey: "dknsfycp",
            layout: {
                radioGroup:[
                    '是',
                    '否',
                ]
            }
        },
        {
            type: "radio",
            label: "6. 地块内是否有工业废水的地下输送管线或储存池",
            enKey: "dknsfygy",
            layout: {
                radioGroup:[
                    '是',
                    '否',
                ]
            }
        },
        {
            type: "radio",
            label: "7. 地块内地下储罐、管线、储水池等设施是否有防渗措施",
            enKey: "dkndxcg",
            layout: {
                radioGroup:[
                    '全有',
                    '部分有',
                    '全无'
                ]
            }
        },
        {
            type: "input",
            label: "8. 该地块化学品泄漏或环境污染事故发生次数 (没有则填0)",
            enKey: "gdkhxp"
        },
        {
            type: "checkbox",
            enKey: "gdktrsf",
            label: "9. 该地块土壤是否存在以下情况",
            layout: {
                checkGroup: [
                    '地块内裸露土壤有明显颜色异常、油渍等污染痕迹',
                    '地块内裸露土壤有异常气味',
                    '现场快速检测设备（XRF、PID 等）显示污染物含量明显高于清洁土壤',
                    '周边邻近地块曾发生过化学品泄漏或环境污染事故',
                    '该企业危险废物曾自行利用处置',
                    '地块内有遗留的危险废物',
                    '地块内设施、构建筑物等已拆除或严重破损',
                    '通过访谈或已有记录表明该地块内土壤曾受到过污染'
                ]
            }
        },
        {
            type: "checkbox",
            enKey: "gdkdxs",
            label: "10. 该地块地下水是否存在以下情况",
            layout: {
                checkGroup: [
                    '地下水能见到油状物质',
                    '地下水有颜色或气味等异常现象',
                    '现场快速检测设备显示地下水水质异常',
                    '该企业有易迁移的污染物（如六价铬、氯代烃、石油烃、苯系物等）',
                    '地块内及周边邻近地块曾发生过地下储罐泄漏或其他可能导致地下水污染的环境污染事故',
                    '通过访谈或已有记录表明该地块地下水曾受到过污染'
                ]
            }
        },
        {
            type: "input",
            enKey: "tzwrwmc",
            label: `11. 特征污染物名称<br>(依次填写，不同污染物间使用一个空格分隔，如：汞 镉 甲醛)`
        }
    ],
    // 表3 迁移途径信息调查表
    transfer: [
        {
            type: "single",
            label: "一、土壤途径"
        },
        {
            type: "single",
            label: "包气带（地下水位以上）土壤分层情况（自上而下）",
        },
        {
            type: "radio",
            enKey: "sfyztt",
            label: "1.是否有杂填土等人工填土层",
            layout: {
                radioGroup:[
                    '是',
                    '否',
                ]
            }
        },
        {
            type: "table",
            enKey: "tcxzxx",
            label: "2.土层性质信息",
            layout: {
                tableArrange: [
                    {
                        prop: 'soilnumber',
                        label: '土层序号',
                        width: 100
                    },
                    {
                        prop: 'soilproperties',
                        label: '土层性质',
                        width: 100
                    },
                    {
                        prop: 'note',
                        label: '备注',
                        width: 300
                    },
                    {
                        prop: 'slot',
                        label: '操作',
                        slotName: 'operation',
                        width: 200
                    }
                ],
                dialogConfig: [
                    {
                        type: 'input',
                        label: '土层序号',
                        enKey: 'soilnumber'
                    },
                    {
                        type: 'select',
                        label: '土层用途',
                        enKey: 'soilproperties'
                    },
                    {
                        type: 'slot',
                        label: '备注',
                        enKey: 'note',
                        slotName: 'note'
                    }
                ]
            }
        },
        {
            type: "single",
            label: "二、地下水途径"
        },
        {
            type: "input",
            enKey: "dxsms",
            label: "1.地下水埋深*（m）"
        },
        {
            type: "radio",
            enKey: "bhdstx",
            label: "2.饱和带渗透性",
            layout: {
                radioGroup:[
                    '砾砂土及以上',
                    '粗砂土、中砂土及细砂土',
                    '粉砂土及以下',
                    '不确定'
                ]
            }
        },
        {
            type: "radio",
            enKey: "dkszqysf",
            label: "3.地块所在区域是否属于喀斯特地貌*",
            layout: {
                radioGroup:[
                    '是',
                    '否',
                ]
            }
        },
        {
            type: "input",
            enKey: "dnpjjsl",
            label: "4.多年平均降水量*(mm)"
        }
    ],
    // 表4 敏感受体信息调查表
    sensitive: [
        {
            type: "radio",
            enKey:"dknjzb",
            label: "1.地块内及周边500m范围内人口数量",
            layout: {
                radioGroup:[
                    '>5000',
                    '1000~5000',
                    '100~1000',
                    '<100'
                ]
            }
        },
        {
            type: "checkbox",
            enKey: "rqjr",
            label: "2.人群进入和接触地块可能性*(可多选)",
            layout: {
                checkGroup:[
                    '有围栏设施限制进入，人群进入可能性较低',
                    '地块无隔离或管制措施，人群进入可能性高',
                    '有专人值守禁止进入，人群进入可能性较低',
                    '地块位于偏远地区，人群进入可能性较低'
                ]
            }
        },
        {
            type: "checkbox",
            enKey: "dkzb",
            label: "3.地块周边 1 km 范围内存在以下敏感目标及敏感目标到最近的重点区域的距离*（可多选）",
            layout: {
                checkGroup:[
                    '无敏感目标',
                    '幼儿园',
                    '学校',
                    '居民区',
                    '医院',
                    '集中式饮用水水源地',
                    '饮用水井',
                    '食用农产品产地',
                    '自然保护区',
                    '地表水体'
                ]
            }
        },
        {
            type: "radio",
            enKey: "dkszqy",
            label: "4.地块所在区域地下水用途*",
            layout: {
                radioGroup:[
                    '饮用或生活用水',
                    '水源保护',
                    '食品加工',
                    '农业灌溉',
                    '工业用途',
                    '不开发',
                    '不确定',
                ]
            }
        },
        {
            type: "radio",
            enKey: "dkljqy",
            label: "5.地块邻近区域（100 m 范围内）地表水用途*（若地块周边100 m范围内无地表水，则不填）",
            layout: {
                radioGroup:[
                    '饮用或生活用水',
                    '水源保护',
                    '食品加工',
                    '农业灌溉',
                    '工业用途',
                    '不开发',
                    '不确定',
                ]
            }
        }
    ],
    // 表5 环境监测和调查评估信息调查表
    environment: [
        {
            type: "single",
            label: "一、土壤监测数据"
        },
        {
            type: "radio",
            enKey:"trhjdc",
            label: "1.土壤环境调查监测工作",
            layout: {
                radioGroup:[
                    '未展开过',
                    '曾展开过',
                ]
            }
        },
        {
            type: "date",
            enKey: "dcsj",
            label: "2.调查时间",
            layout: {
                dateType: 'year',
                placeholder: '选择年份',
                format: 'yyyy年'
            }
        },
        {
            type: "input",
            enKey: "dcjcdw",
            label: "3.调查监测单位名称"
        },
        {
            type: "radio",
            enKey: "sfjcwrw",
            label: "4.是否检出污染物超标",
            layout: {
                radioGroup:[
                    '是',
                    '否',
                ]
            }
        },
        {
            type: "table",
            enKey: "cbwrwxx",
            label: "5.超标污染物信息",
            layout: {
                showIndex: true,
                tableArrange: [
                    {
                        prop: 'pollutantName1',
                        label: '超标污染物名称',
                        width: 200
                    },
                    {
                        prop: 'concentration1',
                        label: '最大实测浓度（mg/kg）',
                        width: 200
                    },
                    {
                        prop: 'slot',
                        label: '操作',
                        slotName: 'operation1',
                        width: 200
                    }
                ],
                dialogConfig: [
                    {
                        type: 'select',
                        label: '超标污染物名称',
                        enKey: 'pollutantName1'
                    },
                    {
                        type: 'input',
                        label: '最大实测浓度（mg/kg)',
                        enKey: 'concentration1'
                    }
                ]
            }
        },
        {
            type: "input",
            enKey: "jcsjly",
            label: `6.监测数据来源<br>(如某某报告(某某年))`
        },
        {
            type: "single",
            label: "二、地下水途径"
        },
        {
            type: "radio",
            enKey: "trhjdcjcgz",
            label: "1.土壤环境调查监测工作",
            layout: {
                radioGroup:[
                    '未展开过',
                    '曾展开过',
                ]
            }
        },
        {
            type: "date",
            enKey: "erdcsj",
            label: "2.调查时间",
            layout: {
                dateType: 'year',
                placeholder: '选择年份',
                format: 'yyyy年'
            }
        },
        {
            type: "input",
            enKey: "dcjcdwmc",
            label: "3.调查监测单位名称"
        },
        {
            type: "radio",
            enKey: "sfjcwrwcb",
            label: "4.是否检出污染物超标",
            layout: {
                radioGroup:[
                    '是',
                    '否',
                ]
            }
        },
        {
            type: "table",
            enKey: "ercbwrwxx",
            label: "5.超标污染物信息",
            layout: {
                showIndex: true,
                tableArrange: [
                    {
                        prop: 'pollutantName2',
                        label: '超标污染物名称',
                        width: 200
                    },
                    {
                        prop: 'concentration2',
                        label: '最大实测浓度（mg/kg）',
                        width: 200
                    },
                    {
                        prop: 'slot',
                        label: '操作',
                        slotName: 'operation2',
                        width: 200
                    }
                ],
                dialogConfig: [
                    {
                        type: 'select',
                        label: '超标污染物名称',
                        enKey: 'pollutantName2'
                    },
                    {
                        type: 'input',
                        label: '最大实测浓度（mg/kg)',
                        enKey: 'concentration2'
                    }
                ]
            }
        },
        {
            type: "input",
            enKey: "erjcsjly",
            label: `6.监测数据来源<br>(如某某报告(某某年))`
        },
        {
            type: "single",
            label: "三、调查评估"
        },
        {
            type: "radio",
            enKey: "trhjdcjcgz2",
            label: "1.土壤环境调查监测工作*",
            layout: {
                radioGroup:[
                    '未展开过',
                    '曾展开过',
                    '已经完成'
                ]
            }
        },
        {
            type: "date",
            enKey: "dcpgsj",
            label: "2.调查评估时间",
            layout: {
                dateType: 'year',
                placeholder: '选择年份',
                format: 'yyyy年'
            }
        },{
            type: "radio",
            enKey: "dcjgxssf",
            label: "3.调查结果显示是否有土壤污染",
            layout: {
                radioGroup:[
                    '是',
                    '否',
                ]
            }
        },
        {
            type: "table",
            enKey: "sancbwrwxx",
            label: "4.超标污染物信息",
            layout: {
                showIndex: true,
                tableArrange: [
                    {
                        prop: 'pollutantName3',
                        label: '超标污染物名称',
                        width: 200
                    },
                    {
                        prop: 'concentration3',
                        label: '最大实测浓度（mg/kg）',
                        width: 200
                    },
                    {
                        prop: 'slot',
                        label: '操作',
                        slotName: 'operation3',
                        width: 200
                    }
                ],
                dialogConfig: [
                    {
                        type: 'select',
                        label: '超标污染物名称',
                        enKey: 'pollutantName3'
                    },
                    {
                        type: 'input',
                        label: '最大实测浓度（mg/kg)',
                        enKey: 'concentration3'
                    }
                ]
            }
        },
        {
            type: "radio",
            enKey: "dcjgxssfytr",
            label: "5.调查结果显示是否有土壤污染",
            layout: {
                radioGroup:[
                    '是',
                    '否',
                ]
            }
        },
        {
            type: "table",
            enKey: "sicbwrwxx",
            label: "6.超标污染物信息",
            layout: {
                showIndex: true,
                tableArrange: [
                    {
                        prop: 'pollutantName4',
                        label: '11超标污染物名称',
                        width: 200
                    },
                    {
                        prop: 'concentration4',
                        label: '最大实测浓度（mg/kg）',
                        width: 200
                    },
                    {
                        prop: 'slot',
                        label: '操作',
                        slotName: 'operation4',
                        width: 200
                    }
                ],
                dialogConfig: [
                    {
                        type: 'select',
                        label: '超标污染物名称',
                        enKey: 'pollutantName4'
                    },
                    {
                        type: 'input',
                        label: '最大实测浓度（mg/kg)',
                        enKey: 'concentration4'
                    }
                ]
            }
        },
        {
            type: "input",
            enKey: "fxpg",
            label: "7.风险评估主要结论<br>(土壤或地下水污染是否超过可接受风险水平等)"
        },
        {
            type: "input",
            enKey: "dcpgsjxx",
            label: `8.调查评估数据信息的来源<br>(如某某报告(某某年))`
        }
    ],
    // 表6 人员访谈记录表
    interview: [
        {
            type: "single",
            label: "一、基本信息"
        },
        {
            type: "label",
            label: "1.地块编码",
            enKey:"dkbm"
        },
        {
            type: "label",
            enKey: "dkmc",
            label: "2.地块名称"
        },
        {
            type: "date",
            enKey: "ftsj",
            label: "3.访谈时间",
            layout: {
                dateType: 'date',
                placeholder: '选择日期'
            }
        },
        {
            type: "Interviewees",
            enKey: "ftry",
            label: "4.访谈人员"
        },
        {
            type: "Interviewee",
            enKey: "sfry",
            label: "5.受访人员",
        },
        {
            type: "upload",
            enKey: "ftzp",
            label: "6.访谈照片",
        },
        {
            type: "upload",
            enKey: "ftly",
            label: "7.访谈录音",
        },
        {
            type: "single",
            label: "二、访谈问题"
        },
        {
            type: "hasIE",
            enKey: "bdklsssf",
            label: "1.本地块历史上是否有其他工业企业存在？",
        },
        {
            type: "hasSWD",
            enKey: "bdknsfyrhw",
            label: "2.本地块内是否有任何正规或非正规的工业固体废物堆放场？",
        },
        {
            type: "hasIWDD",
            enKey: "bdknsfsk",
            label: "3.本地块内是否有工业废水排放沟渠或渗坑？",
        },
        {
            type: "hasPRAMOP",
            enKey: "bdknsfssgd",
            label: '4.本地块内是否有产品、原辅材料、油品的地下储罐或地下输送管道？',
        },
        {
            type: "hasIWW",
            enKey: "bdknsfccc",
            label: "5.本地块内是否有工业废水的地下输送管道或储存池？",
        },
        {
            type: "hasCLA",
            enKey: "bdknsfwrsg",
            label: "6.本地块内是否曾发生过化学品泄漏事故？或是否曾发生过其他环境污染事故？",
        },
        {
            type: "hasEE",
            enKey: "sfyfqpf",
            label: "7.是否有废气排放？",
        },
        {
            type: "hasIWG",
            enKey: "sfygyfscs",
            label: "8.是否有工业废水产生？",
        },
        {
            type: "radio",
            enKey: "bdknsfycqw",
            label: "9.本地块内是否曾闻到过由土壤散发的异常气味？",
            layout: {
                radioGroup:[
                    '是',
                    '否',
                    '不确定'
                ]
            }
        },
        {
            type: "radio",
            enKey: "bdknsflycz",
            label: "10.本地块内危险废物是否曾自行利用处置？",
            layout: {
                radioGroup:[
                    '是',
                    '否',
                    '不确定'
                ]
            }
        },
        {
            type: "radio",
            enKey: "bdknsffwdc",
            label: "11.本地块内是否有遗留的危险废物堆存？",
            layout: {
                radioGroup:[
                    '是',
                    '否',
                    '不确定'
                ]
            }
        },
        {
            type: "radio",
            enKey: "bdknwr",
            label: "12.本地块内土壤是否曾受到过污染？",
            layout: {
                radioGroup:[
                    '是',
                    '否',
                    '不确定'
                ]
            }
        },
        {
            type: "radio",
            enKey: "bdkndxs",
            label: "13.本地块内地下水是否曾受到过污染？",
            layout: {
                radioGroup:[
                    '是',
                    '否',
                    '不确定'
                ]
            }
        },
        {
            type: "hasSL",
            enKey: "bdkzb",
            label: "14.本地块周边1km范围内是否有幼儿园、学校、居民区、医院、自然保护区、农田、集中式饮用水水源地、饮用水井、地表水体等敏感用地？",
        },
        {
            type: "hasWell",
            enKey: "bdkzbsj",
            label: "15.本地块周边 1km 范围内是否有水井？",
        },
        {
            type: "groundwaterUse",
            enKey: "bqydxs",
            label: "16.本区域地下水用途是什么？",
        },
        {
            type: "hasSEI",
            enKey: "bdkjcgz",
            label: "17.本地块内是否曾开展过土壤环境调查监测工作？",
        },
        {
            type: "input",
            enKey: "qttr",
            label: "18.其他土壤或地下水污染相关疑问"
        }
    ]
}
