<!--表2-->
<template>
  <div style="display: flex;justify-content: center;">
    <table>
        <tbody>
        <rowCom
            v-for="item in source"
            :key="item.label"
            :type="item.type"
            :label="item.label"
            :layout="item.layout"
            :data="tableData"
            :enKey="item.enKey"
        >
          <template #area>
            <span>总面积(m²)：</span>
            <div contenteditable="true" v-html="tableData.mj.zmj" @input="inputDiv($event)" style="display: inline-block;max-width: 300px;min-width: 200px;border-bottom: 1px solid #797979;"></div>
            <div style="margin-top: 6px;">各区域面积(m²):</div>
            <div style="padding-left: 20px;">
              <div class="leftCol">
                <div>生产区：</div>
                <div>储存区：</div>
                <div>废水治理区：</div>
                <div>固体废物贮存或处置区：</div>
              </div>
              <div class="rightCol">
                <div class="colInput" contenteditable="true" v-html="tableData.mj.scq" @input="inputDiv($event)"></div>
                <div class="colInput" contenteditable="true" v-html="tableData.mj.ccq" @input="inputDiv($event)"></div>
                <div class="colInput" contenteditable="true" v-html="tableData.mj.fszlq" @input="inputDiv($event)"></div>
                <div class="colInput" contenteditable="true" v-html="tableData.mj.gtfwcc" @input="inputDiv($event)"></div>
              </div>
            </div>
          </template>
        </rowCom>
        </tbody>
      </table>
  </div>
</template>

<script>
import rowCom from './rowCom/index'; //引入行样式组件
import config from "./config";

export default {
  name: "sourceInfo",
  components: {
    rowCom
  },
  data() {
    return {
      source: config.source,
      value: '123',
      tableData: {
        mj:{
          zmj:'12138',
          scq:'',
          ccq:'',
          fszlq:'',
          gtfwcc:''
        },
        pmbzt:'',
        zycpqd:'',
        zyyfclqd:'',
        zyscgylct:'',
        zdqyzmj:'',
        zdqydb:'',
        zdqyyh:'',
        dknsfcz:'',
        dknsfycp:'',
        dknsfygy:'',
        dkndxcg:'',
        gdkhxp:'',
        gdktrsf:[],
        gdkdxs:[],
        tzwrwmc:''
      }
    }
  },
  methods: {
    inputDiv() {

    },
    handleEdit() {

    },
    handleDelete() {

    }
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  border-spacing: 0px;
  padding: 5px;
  border: 1px solid #797979;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-icon-arrow-down {
  font-size: 12px;
}
.leftCol {
  display: inline-block;
  text-align: right;
}

.rightCol {
  display: inline-block;
  width: 200px;
}
.colInput {
  display: inline-block;
  max-width: 300px;
  min-width: 200px;
  border-bottom: 1px solid #797979;
}
</style>
