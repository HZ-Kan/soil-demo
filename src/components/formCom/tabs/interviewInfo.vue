<!--表6-->
<template>
  <div style="display: flex;justify-content: center;">
    <table>
      <tbody>
      <rowCom
          v-for="item in interview"
          :key="item.label"
          :type="item.type"
          :label="item.label"
          :layout="item.layout"
          :data="tableData"
          :enKey="item.enKey"
      >
        <template #Interviewees>
            <div >
              <div style="margin: 5px 0;">
                <span>姓名：</span>
                <div class="colInput" contenteditable="true" v-html="tableData.fangtanrenyuan.name" @input="inputDiv($event)"></div>
              </div>
              <div style="margin: 5px 0;">
                <span>单位：</span>
                <div class="colInput" contenteditable="true" v-html="tableData.fangtanrenyuan.danwei" @input="inputDiv($event)"></div>
              </div>
              <div style="margin: 5px 0;">
                <span>身份证号：</span>
                <div class="colInput" contenteditable="true" v-html="tableData.fangtanrenyuan.idCard" @input="inputDiv($event)"></div>
              </div>
              <div style="margin: 5px 0;">
                <span>电话号码：</span>
                <div class="colInput" contenteditable="true" v-html="tableData.fangtanrenyuan.phonenumber" @input="inputDiv($event)"></div>
              </div>
            </div>
        </template>
        <template #Interviewee>
          <el-radio-group v-model="tableData.shoufangrenyuan.radio">>
            <el-radio label="1">土地使用者</el-radio>
            <el-radio label="2">企业管理人员</el-radio>
            <el-radio label="3">企业员工</el-radio>
            <el-radio label="4">政府管理人员</el-radio>
            <el-radio label="5">环保部门管理人员</el-radio>
            <el-radio label="6">地块周边区域工作人员或居民</el-radio>
          </el-radio-group>
          <div >
            <div>
              <span>姓名：</span>
              <div class="colInput" contenteditable="true" v-html="tableData.fangtanrenyuan.name" @input="inputDiv($event)"></div>
            </div>
            <div>
              <span>单位：</span>
              <div class="colInput" contenteditable="true" v-html="tableData.fangtanrenyuan.danwei" @input="inputDiv($event)"></div>
            </div>
            <div>
              <span>职务或职称：</span>
              <div class="colInput" contenteditable="true" v-html="tableData.fangtanrenyuan.zwhzc" @input="inputDiv($event)"></div>
            </div>
            <div>
              <span >联系电话：</span>
              <div class="colInput" contenteditable="true" v-html="tableData.fangtanrenyuan.phonenumber" @input="inputDiv($event)"></div>
            </div>
            <div>
              <span>身份证号：</span>
              <div class="colInput" contenteditable="true" v-html="tableData.fangtanrenyuan.idCard" @input="inputDiv($event)"></div>
            </div>
          </div>
        </template>
        <template #hasIE>
          <el-radio-group v-model="tableData.hasIE.radio">
            <el-radio label="1">是</el-radio>
            <el-radio label="2">否</el-radio>
            <el-radio label="3">不确定</el-radio>
          </el-radio-group>
          <div >
            <div>
              <span>企业名称：</span>
              <div class="colInput" contenteditable="true" v-html="tableData.hasIE.qiyemingcheng" @input="inputDiv($event)"></div>
            </div>
            <span style="width: 80px;display: inline-block">起始时间：</span>
            <el-date-picker
                v-model="tableData.hasIE.value2"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
            </el-date-picker>
          </div>
        </template>
        <template #hasSWD>
          <el-radio-group v-model="tableData.hasSWD.radio">
            <el-radio label="1">正规</el-radio>
            <el-radio label="2">非正规</el-radio>
            <el-radio label="3">无</el-radio>
            <el-radio label="4">不确定</el-radio>
          </el-radio-group>
          <div >
            <span>堆放场所在位置：</span>
            <div class="colInput" contenteditable="true" v-html="tableData.hasSWD.dfcwz" @input="inputDiv($event)"></div>
            <br><span style="width: 100px;">堆放废弃物名称：</span>
            <div class="colInput" contenteditable="true" v-html="tableData.hasSWD.dffwname" @input="inputDiv($event)"></div>
          </div>
        </template>
        <template #hasIWDD>
          <el-radio-group v-model="tableData.hasIWDD.radio">
            <el-radio label="1">是</el-radio>
            <el-radio label="2">否</el-radio>
            <el-radio label="3">不确定</el-radio>
          </el-radio-group>
          <div >
            <span>排放沟渠建筑材料：</span>
            <div class="colInput" contenteditable="true" v-html="tableData.hasIWDD.pfgq" @input="inputDiv($event)"></div>
            <div>
              <span style="display: inline-block">是否有硬化或防渗处理：</span>
              <el-radio v-model="tableData.hasIWDD.sfyy" label="1">是</el-radio>
              <el-radio v-model="tableData.hasIWDD.sfyy" label="2">否</el-radio>
            </div>
          </div>
        </template>
        <template #hasPRAMOP>
          <el-radio-group v-model="tableData.hasPRAMOP.radio">
            <el-radio label="1">正规</el-radio>
            <el-radio label="2">非正规</el-radio>
            <el-radio label="3">不确定</el-radio>
          </el-radio-group>
          <div >
            <span>发生过泄漏的次数（没有则填0）：</span>
            <div class="colInput" contenteditable="true" v-html="tableData.hasPRAMOP.fxltimes" @input="inputDiv($event)"></div>
          </div>
        </template>
        <template #hasIWW>
          <el-radio-group v-model="tableData.hasIWW.radio">
            <el-radio  label="1">正规</el-radio>
            <el-radio  label="2">非正规</el-radio>
            <el-radio  label="3">不确定</el-radio>
          </el-radio-group>
          <div >
            <span>发生过泄漏的次数（没有则填0）：</span>
            <div class="colInput" contenteditable="true" v-html="tableData.hasIWW.xltimes" @input="inputDiv($event)"></div>
          </div>
        </template>
        <template #hasCLA>
          <el-radio-group v-model="tableData.hasCLA.radio1">
            <el-radio  label="1">正规</el-radio>
            <el-radio  label="2">非正规</el-radio>
            <el-radio  label="3">不确定</el-radio>
          </el-radio-group>
          <div >
            <span>发生过泄漏的次数（没有则填0）：</span>
            <div class="colInput" contenteditable="true" v-html="tableData.hasCLA.xltimes1" @input="inputDiv($event)"></div>
          </div>
          <span>本地块周边邻近地块是否曾发生过化学品泄漏事故？或是否曾发生过其他环境污染事故？</span><br>
          <el-radio-group v-model="tableData.hasCLA.radio2">

            <el-radio  label="1">正规</el-radio>
            <el-radio  label="2">非正规</el-radio>
            <el-radio label="3">不确定</el-radio>
          </el-radio-group>
          <div >
            <span>发生过泄漏的次数（没有则填0）：</span>
            <div class="colInput" contenteditable="true" v-html="tableData.hasCLA.xltimes2" @input="inputDiv($event)"></div>
          </div>
        </template>
        <template #hasEE>
          <el-radio-group v-model="tableData.hasEE.radio1">
            <el-radio  label="1">是</el-radio>
            <el-radio  label="2">否</el-radio>
            <el-radio label="3">不确定</el-radio>
          </el-radio-group>
          <div>
            <span style="display: inline-block;width: 200px">是否有废气在线监测装置？</span>
            <el-radio-group v-model="tableData.hasEE.radio2">
              <el-radio  label="1">是</el-radio>
              <el-radio  label="2">否</el-radio>
              <el-radio  label="3">不确定</el-radio>
            </el-radio-group>
          </div>
          <div>
            <span style="display: inline-block;width: 200px">是否有废气治理设施？</span>
            <el-radio-group v-model="tableData.hasEE.radio3">
              <el-radio  label="1">是</el-radio>
              <el-radio  label="2">否</el-radio>
              <el-radio  label="3">不确定</el-radio>
            </el-radio-group>
          </div>
        </template>
        <template #hasIWG>
          <el-radio-group v-model="tableData.hasIWG.radio1">
            <el-radio label="1">是</el-radio>
            <el-radio label="2">否</el-radio>
            <el-radio label="3">不确定</el-radio>
          </el-radio-group>
          <div>
              <span style="display: inline-block;width: 200px">是否有废气在线监测装置？</span>
            <el-radio-group v-model="tableData.hasIWG.radio2">
              <el-radio  label="1">是</el-radio>
              <el-radio  label="2">否</el-radio>
              <el-radio  label="3">不确定</el-radio>
            </el-radio-group>
          </div>
          <div>
            <span style="display: inline-block;width: 200px">是否有废气治理设施？</span>
            <el-radio-group v-model="tableData.hasIWG.radio3">
              <el-radio label="1">是</el-radio>
              <el-radio  label="2">否</el-radio>
              <el-radio  label="3">不确定</el-radio>
            </el-radio-group>
          </div>
        </template>
        <template #hasSL>
          <el-radio-group v-model="tableData.hasSL.radio">
            <el-radio label="1">是</el-radio>
            <el-radio label="2">否</el-radio>
            <el-radio label="3">不确定</el-radio>
          </el-radio-group>
          <div >
            <span>敏感用地类型：</span>
            <div class="colInput" contenteditable="true" v-html="tableData.hasSL.mgydtype" @input="inputDiv($event)"></div>
            <br><span>敏感用地距离：</span>
            <div class="colInput" contenteditable="true" v-html="tableData.hasSL.mgydjl" @input="inputDiv($event)"></div>
            <br><span>种植农作物种类(敏感用地类型为农田时填写)：</span>
            <div class="colInput" contenteditable="true" v-html="tableData.hasSL.nzwtype" @input="inputDiv($event)"></div>
          </div>
        </template>
        <template #hasWell>
          <el-radio-group v-model="tableData.hasWell.radio">
            <el-radio  label="1">是</el-radio>
            <el-radio  label="2">否</el-radio>
            <el-radio  label="3">不确定</el-radio>
          </el-radio-group>
          <div >
            <span>水井的位置：</span>
            <div class="colInput" contenteditable="true" v-html="tableData.hasWell.sjwz" @input="inputDiv($event)"></div>
            <br><span>水井距离：</span>
            <div class="colInput" contenteditable="true" v-html="tableData.hasWell.sjjl" @input="inputDiv($event)"></div>
            <br><span>水井用途：</span>
            <div class="colInput" contenteditable="true" v-html="tableData.hasWell.sjyt" @input="inputDiv($event)"></div>
            <div>
              <span style="display: inline-block;width: 300px">是否发生过水体混浊、颜色或气味异常等现象?</span>
             <el-radio-group v-model="tableData.hasWell.sthz" >
               <el-radio label="1">是</el-radio>
               <el-radio label="2">否</el-radio>
               <el-radio label="3">否</el-radio>
             </el-radio-group>
            </div>
            <div>
              <span style="display: inline-block;width: 300px">是否观察到水体中有油状物质？</span>
              <el-radio-group v-model="tableData.hasWell.yzwz">
                <el-radio label="1">是</el-radio>
                <el-radio label="2">否</el-radio>
                <el-radio label="3">不确定</el-radio>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template #groundwaterUse>
          <el-radio-group v-model="tableData.groundwaterUse.radio">
            <el-radio label="1">饮用水</el-radio>
            <el-radio label="2">灌溉水</el-radio>
            <el-radio label="3">工业用</el-radio>
            <el-radio label="4">洗涤用水</el-radio>
            <el-radio label="5">不开采</el-radio>
          </el-radio-group>
          <div>
            <span>周边地表水用途是什么？</span>
            <el-radio-group v-model="tableData.groundwaterUse.yzwz">
              <el-radio label="1">饮用水</el-radio>
              <el-radio label="2">灌溉水</el-radio>
              <el-radio label="3">工业用</el-radio>
              <el-radio label="4">洗涤用水</el-radio>
            </el-radio-group>
          </div>
        </template>
        <template #hasSEI>
          <el-radio-group v-model="tableData.hasSEI.radio">
            <el-radio label="1">是</el-radio>
            <el-radio label="2">否</el-radio>
            <el-radio label="3">不确定</el-radio>
          </el-radio-group>
          <div>
            <span style="display: inline-block;width: 280px">是否曾开展过地下水环境调查监测工作？</span>
            <el-radio-group v-model="tableData.hasSEI.jcgz">
              <el-radio  label="1">是</el-radio>
              <el-radio  label="2">否</el-radio>
              <el-radio  label="3">不确定</el-radio>
            </el-radio-group>
          </div>
          <div>
            <span style="display: inline-block;width: 280px">是否开展过地块环境调查评估工作？</span>
            <el-radio-group v-model="tableData.hasSEI.pggz">
              <el-radio  label="1">是</el-radio>
              <el-radio label="2">否</el-radio>
              <el-radio label="3">不确定</el-radio>
            </el-radio-group>
          </div>
          <div>
            <span style="display: inline-block;width: 280px">若开展过，当前状态是？</span>
            <el-radio-group v-model="tableData.hasSEI.zt">
              <el-radio  label="1">正在完成</el-radio>
              <el-radio label="2">已经完成</el-radio>
            </el-radio-group>
          </div>
        </template>
      </rowCom>
      </tbody>
    </table>
  </div>
</template>

<script>
import rowCom from './rowCom/index'; //引入行样式组件
import config from "./config"; // 引入配置文件

export default {
  name: "interviewInfo",
  components: {
    rowCom
  },
  data() {
    return {
      interview: config.interview,
      value: '123',
      tableData: {
        hasSEI: {
          radio:'1',
          jcgz:'1',
          pggz:'1',
          zt:'1'
        },
        groundwaterUse:{
          radio:'1',
          yzwz:''
        },
        hasWell:{
          radio:'1',
          sjwz:'',
          sjjl:'',
          sjyt:'',
          sthz:'1',
          yzwz:'1'
        },
        hasSL:{
          radio:'1',
          mgydtype:'',
          mgydjl:'',
          nzwtype:''
        },
        hasIWG: {
          radio1:'1',
          radio2: '1',
          radio3:'1',
        },
        hasEE:{
          radio1:'1',
          radio2: '1',
          radio3:'1',
        },
        hasCLA:{
          radio1:'1',
          xltimes1:'',
          radio2:'1',
          xltimes2:''
        },
        hasPRAMOP:{
          radio:'1',
          fxltimes:''
        },
        hasIWW:{
          radio:'1',
          xltimes:''
        },
        hasIWDD:{
          radio:'1',
          pfgq:'',
          sfyy:'1'
        },
        hasSWD:{
          radio:'1',
          dfcwz:'',
          dffwname:''
        },
        hasIE:{
          radio: 'yes',
          qiyemingcheng:'',
          value2:''
        },
        fangtanrenyuan:{
          name:'',
          danwei:'',
          idCard:'',
          phonenumber:''
        },
        shoufangrenyuan:{
          radio:'1',
          name:'',
          danwei:'',
          idCard:'',
          phonenumber:'',
          zwhzc:''
        },
        dkbm:'',
        dkmc:'',
        ftsj:'',
        ftry:'',
        sfry:'',
        ftzp:'',
        ftly:'',
        bdklss:'',
        bdknsfdfc:'',
        bdknsfsk:'',
        bdknsfssgd:'',
        bdknsfccc:'',
        bdknsfwrsg:'',
        sfyfqpf:'',
        sfygyfscs:'',
        bdknsfycqw:'',
        bdknsflycz:'',
        bdknsffwdc:'',
        bdknwr:'',
        bdkndxs:'',
        bdkzb:'',
        bdkzbsj:'',
        bqydxs:'',
        bdkjcgz:'',
        qttr:''
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

::v-deep tr td:first-child {
  width: 300px;
}
::v-deep tr td:nth-child(2) {
  width: 600px;
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
  border-bottom: 0px solid #797979;
  margin: 5px 0;
}
</style>
