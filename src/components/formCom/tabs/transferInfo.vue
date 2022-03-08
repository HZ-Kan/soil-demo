<!--表3-->
<template>
  <div style="display: flex;justify-content: center;">
    <table>
      <tbody>
      <rowCom
          v-for="item in transfer"
          :key="item.label"
          :type="item.type"
          :label="item.label"
          :layout="item.layout"
          :data="tableData"
          :enKey="item.enKey"
      >
        <template v-if="item.type === 'table'" #operation="{scope}">
          <el-button type="text" @click="handleEdit('tcxzxx', scope.row)">编辑</el-button>
          <el-button type="text" @click="handleDelete('tcxzxx', scope)">删除</el-button>
        </template>
      </rowCom>
      <popUp :visible="isShowEdit" :formItemList="dialogConfig" :formData="formData" @updateTable="updateTable"></popUp>
      </tbody>
    </table>
  </div>
</template>

<script>
import rowCom from './rowCom/index'; //引入行样式组件
import config from "./config";
import popUp from './popUp/index'

export default {
  name: "transferInfo",
  components: {
    rowCom,
    popUp
  },
  data() {
    return {
      transfer: config.transfer,
      value: '123',
      isShowEdit: false,
      dialogConfig: [],
      formData: {},
      tableData: {
        sfyztt:'',
        tcxzxx:[
          {
            soilnumber: '1',
            soilproperties: '土层性质',
            note: '备注',
          }
        ],
        dxsms:'',
        bhdstx:'',
        dkszqysf:'',
        dnpjjsl:'',
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
      let ele = this.transfer.find(item => item.enKey === key);
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
