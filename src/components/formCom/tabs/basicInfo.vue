<!--表1-->
<template>
    <div style="display: flex;justify-content: center;">
      <table>
        <tbody>
          <rowCom
              v-for="item in basic"
              :key="item.label"
              :type="item.type"
              :label="item.label"
              :layout="item.layout"
              :data="tableData"
              :enKey="item.enKey"
          >
            <template v-if="item.type === 'table'" #operation14="{scope}">
              <el-button type="text" @click="handleEdit('dklyls', scope.row)">编辑</el-button>
              <el-button type="text" @click="handleDelete('dklyls', scope)">删除</el-button>
            </template>
            <template v-if="item.type === 'table'" #operation15="{scope}">
              <el-button type="text" @click="handleEdit('dkkjsj', scope.row)">编辑</el-button>
              <el-button type="text" @click="handleDownLoad('dkkjsj', scope.row)">下载</el-button>
              <el-button type="text" @click="handleDelete('dkkjsj', scope)">删除</el-button>
            </template>
            <template #location>
              <el-dropdown @command="(command) => tableData.dkszd.province = command">
                <span class="el-dropdown-link">
                  {{ tableData.dkszd.province }}
                </span>
                <span>省</span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="黄金糕">黄金糕</el-dropdown-item>
                  <el-dropdown-item command="狮子头">狮子头</el-dropdown-item>
                  <el-dropdown-item command="螺蛳粉">螺蛳粉</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-dropdown @command="(command) => tableData.dkszd.city = command">
                <span class="el-dropdown-link">
                   {{ tableData.dkszd.city }}
                </span>
                <span>市</span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="黄金糕">黄金糕</el-dropdown-item>
                  <el-dropdown-item command="狮子头">狮子头</el-dropdown-item>
                  <el-dropdown-item command="螺蛳粉">螺蛳粉</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-dropdown @command="(command) => tableData.dkszd.area = command">
                <span class="el-dropdown-link">
                   {{ tableData.dkszd.area }}
                </span>
                <span>区</span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="黄金糕">黄金糕</el-dropdown-item>
                  <el-dropdown-item command="狮子头">狮子头</el-dropdown-item>
                  <el-dropdown-item command="螺蛳粉">螺蛳粉</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <div contenteditable="true" v-html="tableData.dkszd.address" @input="inputDiv($event)" style="display: inline-block;max-width: 300px;min-width: 200px;border-bottom: 1px solid #797979;"></div>
              <span>详细地址</span>
            </template>
          </rowCom>
          <popUp :visible="isShowEdit" :formItemList="dialogConfig" :formData="formData" @updateTable="updateTable"></popUp>
        </tbody>
      </table>
    </div>
</template>

<script>
import config from './config'; // 引入配置文件
import rowCom from './rowCom/index'; // 引入行样式组件
import popUp from './popUp/index'; // 引入修改弹窗

export default {
  name: "basicInfo",
  components: {
    rowCom,
    popUp
  },
  data() {
    return {
      basic: config.basic,
      isShowEdit: false,
      // 编辑框默认数据
      formData: {},
      // 弹出框布局
      dialogConfig: [],
      province: '下拉选择',
      tableData: {
        ydwmc: '',
        fddbr: '',
        dkszd: {
          province: '下拉选择',
          city: '下拉选择',
          area: '下拉选择',
          address: '123'
        },
        hylb: '',
        dkzdmj: '',
        yysj: {
          startDate: '',
          endDate: ''
        },
        dkxsyq: '',
        syqdwmc: '',
        syqdwlxfs: '',
        dksfwygyyhjjq: '',
        dkghyt: '',
        dklyls: [
          {
            startDate: '2016-05-02',
            endDate: '2016-05-02',
            purpose: '目的1',
            industry: '行业行业'
          },
          {
            startDate: '2016-05-02',
            endDate: '2016-05-02',
            purpose: '目的2',
            industry: '行业行业'
          },
          {
            startDate: '2016-05-02',
            endDate: '2016-05-02',
            purpose: '目的3',
            industry: '行业行业'
          }
        ],
        dkkjsj: [
          {
            dataName: '资料123',
            collectDate: '2021-12-20',
          }
        ],
        xczl: '',
        cs: []
      },
    }
  },
  beforeDestroy() {
    console.log(this.tableData);
  },
  methods: {
    inputDiv() {

    },
    // 编辑表格中的单行数据
    handleEdit(key, row) {
      this.formData = row;
      this.isShowEdit = true;
      let ele = this.basic.find(item => item.enKey === key);
      this.dialogConfig = ele.layout.dialogConfig;
    },
    updateTable(data) {
      this.isShowEdit = false;
      console.log(data)
    },
    // 删除表格中的单行数据
    handleDelete(key,scope) {
      this.$confirm('此操作将永久删除该记录, 是否继续？', '确认信息', {
        type: 'warning',
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
          .then(() => {
            this.$notify.success({
              title: '成功',
              message: '删除成功'
            });
            this.tableData[key].splice(scope.$index,1);
          })
          .catch(() => {
            this.$notify.info({
              title: '取消',
              message: '已取消删除'
            })
          });
    },
    handleDownLoad() {

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
    border-bottom: 1px solid #797979;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
