<template>
		<el-menu
	     :default-active="activeIndex2"
	     class="el-menu-demo"
	     mode="horizontal"
	     @select="handleSelect"
	     background-color="#545c64"
	     text-color="#fff"
	     active-text-color="#ffd04b">
	        <!-- <router-link to="/"> -->
	        	<el-menu-item index="1">Beranda</el-menu-item>
	        <!-- </router-link> -->
	        <el-submenu index="2">
	          <template slot="title">Data</template>
	          <router-link to="/employees">
	            <el-menu-item index="2-1">Employees</el-menu-item>
	          </router-link>
	          <el-menu-item index="2-2">Department</el-menu-item>
	          <el-menu-item index="2-3">Client</el-menu-item>
	        </el-submenu>
	    </el-menu>
</template>

<script>
export default {

  name: "Navbar",

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>