<template>
	<div>
		<Navbar />

    <p
    class="emp__title">Data Employees</p>
		<div
    class="container">

      <router-link to="/add">
        <el-button 
        type="warning" 
        round
        class="btn__add">
          <i class="el-icon-plus"></i>
          Add</el-button>
      </router-link>

        <el-table
        :data="employees.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        :default-sort = "{prop: 'id', order: 'descending'}"
        style="width: 100%">
          <el-table-column
            type="index"
            prop="id"
            label="Id"
            sortable>
          </el-table-column>
          <el-table-column
            prop="name"
            label="Name">
          </el-table-column>
          <el-table-column
          prop="gender"
            label="Gender">
          </el-table-column>
          <el-table-column
            prop="department"
            label="Department">
          </el-table-column>
          <el-table-column
            prop="about"
            label="About">
          </el-table-column>
            <el-table-column>
              <template slot="header" slot-scope="scope">
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="Type to search"/>
                </template>
                <template slot-scope="scope">
                  <router-link :to="`/edit/${scope.row.id}`">
                  <el-button
                  type="text"
                  size="small">
                    Edit
                  </el-button>
                  </router-link>

                  <el-button
                    @click="modalDelete(scope.$index, scope.row)"
                    type="text"
                    size="small">
                    Remove
                  </el-button>
                </template> 
          </el-table-column>

      </el-table>  
    </div>
	</div>
</template>

<script>
import axios from "axios"
import Navbar from "../components/Navbar.vue"

export default {

  name: "Employees",
  components: {
	Navbar
  },

  data () {
    return {
      employees: [],
      selected: -1,
      search: ''
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/employees/")
      .then((response) => {
        // console.log(response.data)
        this.employees = response.data
      })
      .catch((e) => {
        console.error(e)
      })
  },
  methods: {
    modalDelete(index, row) {
        this.$confirm("This will permanently delete the file. Continue?", "Warning", {
          confirmButtonText: "Yes",
          cancelButtonText: "Cancel",
          type: "warning"
        }).then(() => {
          const id = row.id
          axios
          .delete(`http://localhost:3000/api/employees/${id}`)
          .then((response) => {
              this.employees.splice(index, 1)
              this.$message({
              type: "success",
              message: "Delete completed"
            });
          })
        }).catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled"
          });          
        })
  },

}
}
</script>

<style lang="css" scoped>
.emp__title {
  text-align: center;
  font-size: 2rem;
  margin: 1rem 0;
}
.btn__add {
  float: right;
  margin: 1rem 0;
}
</style>