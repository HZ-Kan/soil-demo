<template>
    <tr>
      <td v-if="type === 'single'" colspan="2" class="single">{{ label }}</td>
      <td v-else><span v-html="label"></span></td>
      <td v-if="type === 'input'">
        <div contenteditable="true"  @blur="handleChange($event)"></div>
      </td>
      <td v-else-if="type === 'label'">
        <span style="color: #AAA;">自动带入</span>
      </td>
      <td v-else-if="type === 'radio'" style="padding: 0 20px;">
        <el-radio-group v-model="data[enKey]">
          <el-radio
              v-for="item in layout.radioGroup"
              :key="item"
              :label="item"
          >{{ item }}</el-radio>
        </el-radio-group>
        <div v-if="layout.tip">{{ layout.tip }}</div>
      </td>
      <td v-else-if="type === 'table'">
        <el-button type="primary" size="small" @click="handleAdd">+&nbsp;&nbsp;&nbsp;新增</el-button>
        <el-table
            :data="data[enKey]"
        >
          <el-table-column
              v-if="layout.showIndex"
              type="index"
              label="序号"
              align="center"
              header-align="center"
              width="50">
          </el-table-column>
          <template v-for="item in layout.tableArrange">
            <el-table-column
                v-if="item.prop !== 'slot'"
                :key="item.label"
                :prop="item.prop"
                :label="item.label"
                align="center"
                header-align="center"
                :width="item.width"
            >
            </el-table-column>
            <el-table-column
                v-else
                :key="item.label"
                :prop="item.prop"
                :label="item.label"
                align="center"
                header-align="center"
                :width="item.width"
            >
              <template slot-scope="scope">
                <slot :name="item.slotName" :scope="scope"></slot>
              </template>
            </el-table-column>
          </template>
        </el-table>
        <popUp :visible="isShowAdd" :formItemList="layout.dialogConfig"  @updateTable="updateTable">
          <tempalte slot="ttt">
            自定义插槽
          </tempalte>
        </popUp>
      </td>
      <td v-else-if="type === 'checkbox'">
        <el-checkbox-group v-model="data[enKey]">
          <el-checkbox
              v-for="item in layout.checkGroup"
              :key="item"
              :label="item"></el-checkbox>
        </el-checkbox-group>
      </td>
      <td v-else-if="type === 'upload'">
        <el-button type="primary" size="small">上传资料</el-button>
      </td>
      <td v-else-if="type === 'date'">
        <template v-if="layout.isRange">
          <el-date-picker
              v-model="data[enKey][layout.enKeys[0]]"
              :type="layout.dateType"
              :placeholder="layout.placeholder"
              :format="layout.format"
              class="datePicker">
          </el-date-picker>
          <span>至</span>
          <el-date-picker
              v-model="data[enKey][layout.enKeys[1]]"
              :type="layout.dateType"
              :placeholder="layout.placeholder"
              class="datePicker dateSecond">
          </el-date-picker>
        </template>
        <template v-else>
          <el-date-picker
              v-model="data[enKey]"
              :type="layout.dateType"
              :placeholder="layout.placeholder"
              :format="layout.format"
              class="datePicker">
          </el-date-picker>
        </template>
      </td>
      <td v-else-if="type !== 'single'">
          <slot :name="type"></slot>
      </td>
    </tr>
</template>

<script>
import popUp from '../popUp/index'; // 引入新增弹框组件

export default {
  name: "formComRow",
  components: {
    popUp
  },
  props: {
    type: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    layout: {
      type: Object
    },
    data: {
      type: Object,
      // required: true
    },
    enKey: {
      type: String
    },
    showIndex: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      isShowAdd: false,
    }
  },
  methods: {
    handleChange(e) {
      this.data[this.enKey] = e.target.innerHTML;
    },
    handleAdd() {
      this.isShowAdd = true;
    },
    updateTable(params) {
      console.log(params)
      if (params !== false) {
        this.data[this.enKey].push(params);
      }
      this.isShowAdd = false;
    }
  }
}
</script>

<style scoped>
  [contenteditable]:focus {
    outline: none;
  }
  td {
    padding: 5px;
    border: 1px solid #797979;
  }
  tr td:first-child {
    background-color: #f2f2f2;
    text-align: center;
    font-weight: 400;
    font-size: 13px;
    color: #333333;
  }
  .single {
    text-align: center;
    border-bottom: 2px #797979 solid;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial', sans-serif;
    font-weight: 700;
    font-size: 14px;
  }
  .el-checkbox {
    margin: 10px;
    display: block;
  }

  ::v-deep .el-radio {
    margin: 10px 30px 10px 0;
  }

  .el-checkbox:hover {
    background-color: #eee;
  }

  .datePicker {
    width: 135px;
  }
  .dateSecond {
    margin-left: 30px;
  }
  ::v-deep .datePicker .el-input__inner {
    border: none;
  }
</style>
