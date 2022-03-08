<template>
    <el-container>
        <el-header>
            <div style="display: flex; justify-content: space-between; flex: 7;">
                <div>
                    <span class="header-top-label">任务名称：</span>
                    <span class="header-top-value">地块调查任务1</span>
                </div>
                <div>
                    <span class="header-top-label">地块名称：</span>
                    <span class="header-top-value">地块1</span>
                </div>
                <div>
                    <span class="header-top-label">工单编号：</span>
                    <span class="header-top-value">CY2021120100001</span>
                </div>
                <div>
                    <span class="header-top-label">调查表状态：</span>
                    <el-tag size="small">填报中</el-tag>
                </div>
            </div>
            <div style="flex: 3; display: flex; justify-content: right;">
                <el-button type="primary" size="medium ">提交审核</el-button>
            </div>
        </el-header>
        <el-main>
            <el-tabs :stretch='true' v-model="currentTabComponent" >
                <el-tab-pane name="basicInfo">
                  <span slot="label" class="tab-label">重点行业污染地块基本情况表<img v-if="isSubmitted.includes(1)" class="tab-img" src="../../assets/u2406.png"> </span>
                  <div class="tableName">
                    表1 重点行业污染地块基本情况表
                  </div>
                </el-tab-pane>
                <el-tab-pane name="sourceInfo">
                  <span slot="label" class="tab-label">重点行业污染地块污染源信息调查表<img v-if="isSubmitted.includes(2)" class="tab-img" src="../../assets/u2406.png"> </span>
                  <div class="tableName">
                    表2 重点行业污染地块污染源信息调查表
                  </div>
                </el-tab-pane>
                <el-tab-pane  name="transferInfo">
                  <span slot="label" class="tab-label">迁移途径信息调查表<img v-if="isSubmitted.includes(3)" class="tab-img" src="../../assets/u2406.png"> </span>
                  <div class="tableName">
                    表3 迁移途径信息调查表
                  </div>
                </el-tab-pane>
                <el-tab-pane  name="sensitiveInfo">
                  <span slot="label" class="tab-label">敏感受体信息调查表<img v-if="isSubmitted.includes(4)" class="tab-img" src="../../assets/u2406.png"> </span>
                  <div class="tableName">
                    表4 敏感受体信息调查表
                  </div>
                </el-tab-pane>
                <el-tab-pane name="environmentInfo">
                  <span slot="label" class="tab-label">环境监测和调查评估信息调查表<img v-if="isSubmitted.includes(5)" class="tab-img" src="../../assets/u2406.png"> </span>
                  <div class="tableName">
                    表5 环境监测和调查评估信息调查表
                  </div>
                </el-tab-pane>
                <el-tab-pane name="interviewInfo">
                  <span slot="label" class="tab-label">人员访谈记录表<img v-if="isSubmitted.includes(6)" class="tab-img" src="../../assets/u2406.png"> </span>
                  <div class="tableName">
                    表6 人员访谈记录表
                  </div>
                </el-tab-pane>
            </el-tabs>
            <keep-alive>
              <component :is="currentTabComponent" :ref="currentTabComponent"></component>
            </keep-alive>
            <div style="margin-top: 40px;">
              <div style="display: flex;justify-content: space-around;padding: 0 50px;">
                <div>采集人：<span class="controlPeo">自动带入</span></div>
                <div>审核人：<span class="controlPeo">自动带入</span></div>
                <div>复核人：<span class="controlPeo">自动带入</span></div>
              </div>
              <div style="display: flex;justify-content: space-around;margin: 50px 0;">
                <div style="width: 200px; display: flex;justify-content: space-between;">
                  <el-button type="primary" size="medium" @click="handleSave">暂存</el-button>
                  <el-button type="primary" size="medium" @click="handleSubmit">提交</el-button>
                </div>
              </div>
            </div>
        </el-main>
    </el-container>
</template>

<script>
import { validate } from "./tabs/utils/validate"; // 验证规则
// 引入表单组件
const tabs = require.context('./tabs', false, /\.vue$/)
const components = tabs.keys().map(tabs).reduce((components, component) => {
  components[component.default.name] = component.default;
  return components;
},{})
export default {
  name: 'formCom',
  components,
  data() {
      return {
        // 当前tab栏
        currentTabComponent: 'basicInfo',
        // 已提交tab栏
        isSubmitted: [1,2,3,4,5,6],
        // 动态组件
        tabComponents: ['basicInfo', 'sourceInfo', 'transferInfo', 'sensitiveInfo', 'environmentInfo', 'interviewInfo']
      }
  },
  methods: {
      // 暂存
      handleSave() {
        // console.log(this.$refs[this.currentTabComponent])
        console.log(validate(this.$refs[this.currentTabComponent].tableData));
      },
      // 提交
      handleSubmit() {

      }
  }
}
</script>

<style scoped>
  body{
      font-family: 'Microsoft Sans Serif Normal', 'Microsoft Sans Serif', sans-serif;
  }

  .el-container {
      width: 1205px;
      margin: 0 auto;
      font-size: 14px;
  }

  .el-header {
      padding-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
  }

  .tableName {
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 10px;
  }

  .header-top-label {
      font-weight: 700;
      color: rgba(0, 0, 0, 0.847058823529412);
  }

  .header-top-value{
      font-family: 'SF UI Text ', 'SF UI Text', sans-serif;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.647058823529412);
  }

  .tab-label {
      display: flex;
      align-items: center;
  }

  .tab-img {
      width: 14px;
      margin-left: 3px;
  }

  ::v-deep .el-tabs__item {
      padding: 0 11px;
  }

  .controlPeo {
      display: inline-block;
      width: 100px;
      text-align: center;
      border-bottom: 1px solid #797979;
      color: #AAA;
      font-family: 'Arial Normal', 'Arial', sans-serif;
      font-weight: 400;
      font-size: 13px;
  }
</style>
