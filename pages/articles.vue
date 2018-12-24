<template>
  <div class="articles">
    <el-table border ref="filterTable" :data="tableData" style="width: 100%" >
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column 
          prop="date" 
          label="发布日期" 
          sortable 
          column-key="date" 
          :filters="[{text: '2015-05-01'}]"
          :filter-method="filterHandler"></el-table-column>
      <el-table-column 
          prop="modifytime" 
          label="最后修改日期" 
          sortable 
          ></el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions>{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          title: '第一篇',
          date: '2016-05-03',
          tag: '家',
          modifytime: '2018-10-20'
        }, {
          title: '第一篇',
          date: '2016-05-03',
          tag: '公司',
          modifytime: '2018-10-20'
        }, {
          title: '第一篇',
          date: '2016-05-03',
          tag: '家',
          modifytime: '2018-10-20'
        }, {
          title: '第99篇',
          date: '2016-05-03',
          tag: '公司',
          modifytime: '2018-10-20'
        }],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    methods: {
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date')
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter()
      },
      formatter(row, column) {
        return row.address
      },
      filterTag(value, row) {
        return row.tag === value
      },
      filterHandler(value, row, column) {
        const property = column['property']
        return row[property] === value
      },
      handleEdit(index, row) {
        console.log(index, row)
      },
      handleDelete(index, row) {
        console.log(index, row)
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
      }
    }
  }
</script>
<style lang="scss" scoped>
.articles {
    display: flex;
    flex-direction: column;
    align-items: center;
    // height: 100%;
}
.el-table {
  margin-bottom: 20px;
}
</style>
