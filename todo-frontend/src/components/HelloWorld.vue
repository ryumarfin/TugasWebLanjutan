<template>
  <div>
    <h1>Selamat Datang di Tugas WebLanjutan Ryu</h1>
    <div>Berikut daftar kerja kita:</div>
    <ul>
      <li v-for="item in todos" :key="item.id">{{item.deskripsi}} <button @click="hapus(item.id)">X</button></li>
    </ul>
    <input v-model="myText"/>
    <button @click="tambahkan">Klik Me</button>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data: () => {
    return { 
        todos: [
          // {desc: 'Makan ubi goreng'},
          // {desc: 'Minum jus apel with nata de coco'},
          // {desc: 'Makan ikan panggang pkk cabe ijo'}
        ] ,
        myText: ''
      }
  },

  mounted: function() {
    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", "http://localhost:3000/todo");
    // xhr.send();
    // xhr.onreadystatechange();

    axios.get('http://localhost:3000/todo')
    .then(result => {
      // alert(JSON.stringify(result.data))
      this.todos = result.data
    })
  },

  methods: {
    tambahkan: function(){
      let newItem = {deskripsi: this.myText}
      axios.post('http://localhost:3000/todo', newItem)
      this.todos.push(newItem)
      console.log(newItem)
    },
    hapus: function(id){
      // alert(id)
      // this.todos.splice(id,1)
      this.todos = this.todos.filter((e)=>e.id !== id )
      axios.delete(`http://localhost:3000/todo/${id}`)
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
