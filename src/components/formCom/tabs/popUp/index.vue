<template>
  <el-dialog
      title="新增"
      :visible.sync="visible"
      width="40%"
      :before-close="handleClose"
  >
    <el-form ref="form" :model="formData" label-width="200px">
      <el-form-item
          v-for="item in formItemList"
          :key="item.label"
          :label="item.label"
          :label-width="item.labelWidth"
      >
        <el-input style="width: 65%" v-if="item.type === 'input'" v-model="formData[item.enKey]"></el-input>
        <el-select v-else-if="item.type === 'select'" v-model="formData[item.enKey]">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        <el-date-picker v-else-if="item.type === 'date'"  v-model="formData[item.enKey]" value-format="yyyy-MM-dd" type="date"></el-date-picker>
        <template v-else-if="item.type === 'slot'">
          <slot name="ttt"></slot>
        </template>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="handleClose">取 消</el-button>
      <el-button type="primary" size="small" @click="handleAdd">确 定</el-button>
    </span>
  </el-dialog>

</template>

<script>
export default {
  name: "rowPopUp",
  props:{
    visible: {
      type: Boolean,
      default: () => false
    },
    formItemList: {
      type: Array,
      default: () => []
    },
    formData: {
      type: Object,
      default: () => { return {} }
    }
  },
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }]
    }
  },
  methods: {
    handleClose() {
      this.$emit('updateTable', false);
    },
    handleAdd() {
      this.$emit('updateTable', this.formData);
    }
  }
}
</script>

<style scoped>

</style>
