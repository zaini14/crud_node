<template>
	<div>
		<el-form ref="form" :model="form" label-width="120px" v-loading="loading" style="width: 100%"
		>
		  <el-form-item label="Your Name">
		    <el-input v-model="employees.name"></el-input>
		  </el-form-item>
		  <el-form-item label="Gender">
		    <el-select v-model="employees.gender" placeholder="Your Gender Please">
		      <el-option label="Pria" value="pria"></el-option>
		      <el-option label="Wanita" value="wanita"></el-option>
		    </el-select>
		  </el-form-item>
		  <el-form-item label="Department">
		    <el-input v-model="employees.department"></el-input>
		  </el-form-item>
		  <el-form-item label="About">
		    <el-input type="textarea" v-model="employees.about"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="onSubmit">Save</el-button>
		    <el-button>Cancel</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>

<script>
import axios from 'axios'

export default {

  name: 'Edit',

  data () {
    return {
    	employees: [],
    	loading: false
    }
  },
  methods: {
  	onSubmit() {
      	const data = this.employees
      	const id = this.employees.id
      	this.loading= true
        axios
       	.put(`http://localhost:3000/api/employees/${id}`, data)
        .then((response) => {
   		this.loading = false


   		const h = this.$createElement;

        this.$notify({
          title: 'Success',
          message: h('i', { style: 'color: teal' }, 'Data Success')
        });

        this.$router.push('/employees');


        })
        .catch((e) => {
        	console.error(e)
        })
      }
  },

  created() {
   	const id = this.$route.params.id
   	axios
   	.get(`http://localhost:3000/api/employees/${id}`)
   	.then((response) => {
   		response => response.json()
   		this.employees = response.data[0]
   		console.log(response)
   	})
   	.catch((e) => {
   		console.log(e)
   	})
   }
}
</script>

<style lang="css" scoped>
</style>