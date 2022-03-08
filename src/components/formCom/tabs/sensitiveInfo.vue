<!--表4-->
<template>
  <div style="display: flex;justify-content: center;">
    <table>
      <tbody>
      <rowCom
          v-for="item in sensitive"
          :key="item.label"
          :type="item.type"
          :label="item.label"
          :layout="item.layout"
          :data="tableData"
          :enKey="item.enKey"
      >
      </rowCom>
      </tbody>
    </table>
  </div>
</template>

<script>
import rowCom from './rowCom/index'; //引入行样式组件
import config from "./config";

export default {
  name: "sensitiveInfo",
  components: {
    rowCom
  },
  data() {
    return {
      sensitive: config.sensitive,
      value: '123',
      tableData: {
        dknjzb:'',
        rqjr:[],
        dkzb:[],
        dkszqy:'',
        dkljqy:'',

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
  width: 260px;
}
</style>
