<template>
	<div>



<el-form ref="form" :model="form" label-width="120px" v-loading="loading" style="width: 100%"
>
  <el-form-item label="Your Name">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="Gender">
    <el-select v-model="form.gender" placeholder="Your Gender Please">
      <el-option label="Pria" value="pria"></el-option>
      <el-option label="Wanita" value="wanita"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Department">
    <el-input v-model="form.department"></el-input>
  </el-form-item>
  <el-form-item label="About">
    <el-input type="textarea" v-model="form.about"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Add</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>
 
	</div>
</template>

<script>
import axios from 'axios'

export default {

  name: 'Add',

 	 data() {
      return {
        form: {
          name: '',
          gender: ['wanita', 'pria'],
          department: '',
          about: ''
        },
        loading: false,
      }
    },
    methods: {
      onSubmit() {
      	const data = this.form
      	this.loading= true
        axios
       	.post('http://localhost:3000/api/employees/', data)
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
    }
}
</script>

<style lang="css" scoped>
</style>