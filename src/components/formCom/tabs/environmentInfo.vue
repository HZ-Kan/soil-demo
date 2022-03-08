<!--表5-->
<template>
  <div style="display: flex;justify-content: center;">
    <table>
      <tbody>
      <rowCom
          v-for="item in environment"
          :key="item.label + item.enKey"
          :type="item.type"
          :label="item.label"
          :layout="item.layout"
          :data="tableData"
          :enKey="item.enKey"
      >
        <template v-if="item.type === 'table'" #operation1="{scope}">
          <el-button type="text" @click="handleEdit('cbwrwxx', scope.row)">编辑</el-button>
          <el-button type="text" @click="handleDelete('cbwrwxx', scope)">删除</el-button>
        </template>
        <template v-if="item.type === 'table'" #operation2="{scope}">
          <el-button type="text" @click="handleEdit('ercbwrwxx', scope.row)">编辑</el-button>
          <el-button type="text" @click="handleDelete('ercbwrwxx', scope)">删除</el-button>
        </template>
        <template v-if="item.type === 'table'" #operation3="{scope}">
          <el-button type="text" @click="handleEdit('sancbwrwxx', scope.row)">编辑</el-button>
          <el-button type="text" @click="handleDelete('sancbwrwxx', scope)">删除</el-button>
        </template>
        <template v-if="item.type === 'table'" #operation4="{scope}">
          <el-button type="text" @click="handleEdit('sicbwrwxx', scope.row)">编辑</el-button>
          <el-button type="text" @click="handleDelete('sicbwrwxx', scope)">删除</el-button>
        </template>
      </rowCom>
      <popUp :visible="isShowEdit" :formItemList="dialogConfig" :formData="formData" @updateTable="updateTable"></popUp>
      </tbody>
    </table>
  </div>
</template>

<script>
import rowCom from './rowCom/index'; //引入行样式组件
import config from "./config"; // 引入配置文件
import popUp from './popUp/index' // 引入编辑弹框组件

export default {
  name: "environmentInfo",
  components: {
    rowCom,
    popUp
  },
  data() {
    return {
      environment: config.environment,
      value: '123',
      isShowEdit: false,
      dialogConfig: [],
      formData: {},
      tableData: {
        trhjdc:'',
        dcsj: {
          startTime: '',
          endTime: ''
        },
        dcjcdw:'',
        sfjcwrw:'',
        cbwrwxx:[
          {
            pollutantName1:'污染物名称',
            concentration1:'1',
          }
        ],
        jcsjly:'',
        trhjdcjcgz:'',
        erdcsj:'',
        dcjcdwmc:'',
        sfjcwrwcb:'',
        ercbwrwxx:[
          {
            pollutantName2:'污染物名称',
            concentration2:'2',
          }
        ],
        erjcsjly:'',
        trhjdcjcgz2:'',
        dcpgsj:'',
        dcjgxssf:'',
        sancbwrwxx:[
          {
            pollutantName3:'污染物名称',
            concentration3:'3',
          }
        ],
        dcjgxssfytr:'',
        sicbwrwxx:[
          {
            pollutantName4:'污染物名称',
            concentration4:'4',
          }
        ],
        fxpg:'',
        dcpgsjxx:'',

      }
    }
  },
  methods: {
    inputDiv() {

    },
    // 编辑表格中的单行数据
    handleEdit(key, row) {
      this.formData = row;
      this.isShowEdit = true;
      let ele = this.environment.find(item => item.enKey === key);
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
</style>
