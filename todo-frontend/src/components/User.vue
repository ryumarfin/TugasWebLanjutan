<template>
  <div>
    <h1>Selamat Datang di Halaman USERR</h1>
    <div>Berikut adalah semua user nya:</div>
    <ul>
      <li v-for="item in users" :key="item.id">{{item.deskripsi}} <button @click="hapus(item.id)">X</button></li>
    </ul>
    <input v-model="username"/>
    <input v-model="password"/>
    <button @click="tambahUser">Add User</button>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data: () => {
    return { 
        users: [] ,
        username: '',
        password: ''
      }
  },

  created: function() {
    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", "http://localhost:3000/todo");
    // xhr.send();
    // xhr.onreadystatechange();

    axios.get('http://localhost:3000/user')
    .then(result => {
      // alert(JSON.stringify(result.data))
      this.users = result.data
    })
  },

  methods: {
    tambahUser: function(){
      let newItem = {username: this.username, password: this.password}
      axios.post('http://localhost:3000/user', newItem)
      this.username =''
      this.password =''
      this.users.push(newItem)
      console.log(newItem)
    },
    hapus: function(id){
      // alert(id)
      // this.todos.splice(id,1)
      this.todos = this.todos.filter((e)=>e.id !== id )
      axios.delete(`http://localhost:3000/user/${id}`)
    }
  }

  // data: () => {
  //   return { 
  //       nilaiBudi: 0 ,
  //       nilaiDedi: 0 ,
  //       nilaiCindy: 0 
  //     }
  // },
  // methods:{
  //   addAll: function() {
  //     this.nilaiBudi++;
  //     this.nilaiDedi++;
  //     this.nilaiCindy++;
  //   }
  // }
}
</script>
