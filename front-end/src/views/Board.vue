<template>
  <div class="">
    <div class="add">
      <h1 class="title">Write A Note!</h1>
      <div class="center">
        <div class="form">
          <div class="obj">
            <input v-model="name" placeholder="Enter Name">
          </div>
          <p></p>
          <textarea v-model="message" name="message" rows="6" cols="30" placeholder="Write a note to share!"></textarea>
          <p></p>
          <input type="file" name="photo"  @change="fileChanged">
          <p></p>
          <button @click="upload">Post Note!</button>
        </div>
      </div>
    </div>
    <button @click="toggleEdit()">Toggle Edit Mode</button>

    <div class="peg-board">
      <div class="post" v-for="note in notes" :key="note.id">
        <div v-if="editMode">
          <input v-model="note.name" placeholder="Name Goes Here">
          <textarea v-model="note.message" name="message" rows="6" cols="30" placeholder="Write message here"></textarea>
          <img :src="note.path" />
          <button @click="editItem(note, note._id)">Confirm Edit</button>
          <button @click="deleteItem(note._id)">Delete</button>

        </div>
        <div v-else>

          <h2>{{note.name}}</h2>
          <h3>{{note.message}}</h3>
          <img :src="note.path" />
        </div>


      </div>
    </div>
  </div>


</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Board',
  data() {
    return {
      name: "",
      message: "",
      file: null,
      notes: [],
      editMode: null,
    }
  },
  created() {
    this.getNotes();
  },
  methods: {
    async getNotes() {
        let response = await axios.get("/api/notes");
        this.notes = response.data;
        return true;
    },
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async upload() {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/notes', {
          name: this.name,
          message: this.message,
          path: r1.data.path,
        });
        this.addItem = r2.data;
        this.getNotes();
    },
    async deleteItem(id) {
        await axios.delete("/api/notes/" + id);
        //this.findItem = null;
        this.getNotes();
        return true;
    },
    async editItem(note,id) {
        await axios.put("/api/notes/" + id, {
          name: note.name,
          message: note.message,
        });
        //this.findItem = null;
        this.getNotes();
        return true;
    },
    toggleEdit() {
      if (this.editMode) {
        this.editMode= null;
      } else {
        this.editMode= "true";
      }
    },
  },
}


</script>


<style scoped>
  .peg-board {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 50px;
  }

  .image-gallery {
    column-gap: 1.5em;
  }

  .post {
    max-width: 250px;
    padding: 20px;
    border: solid 2px #a59079;
    border-radius: 30px;
    background-color: #fde396;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .post img {
    width: 100%;

  }



  .title {
    color: #a59079;
  }

  .object {
    margin: 30px;
  }

  .center {
    align-self: center;
    margin-left: 150px;
  }

  .add {
    padding-top: 30px;
    padding-bottom: 30px;
    max-width: 600px;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    border: solid 2px #a59079;
    border-radius: 30px;

    /* height: 200px; */

    background-color: #fde396;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>
