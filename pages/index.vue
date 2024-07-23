<template>
  <div class="d-flex justify-center">
    <v-card elevation="0" class="ma-1" rounded="xl" color="black" min-height="100vh" width="1000px">
      <v-card-title style="color: white">
        <v-btn variant="outlined" rounded="xl" color="white" class="mx-2" elevation="0">Your cabinet</v-btn>
        <v-btn variant="outlined" v-if="user.admin" rounded="xl" color="white" class="mx-2" elevation="0">all users</v-btn>
      </v-card-title>
      <v-card-title>
        <div>
          <div class="d-flex justify-center">
            <v-btn style="border-radius: 50% !important;" size="circle" class="pa-2"
                   :class="user.status? 'bg-blue' : 'bg-red'" density="compact">
              <v-avatar style="background-color: #1c1917" role="button" size="300"></v-avatar>
            </v-btn>
          </div>
          <div class="block-class d-flex">
            <h4 class="ml-1 mr-auto" >{{user.name}} | </h4>
            <div>{{user.notification?.length}} msg</div>
          </div>
          <div class="px-3 align-center block-class">
            <div style="font-size: 20px">@{{user.userName}}</div>
            <div style="font-size: 10px">{{getSTDate(user.createDate)}}</div>
          </div>
          <v-tabs v-model="tab" bg-color="blue-grey-darken-4" class="block-class">
            <v-tab value="one">
              <v-btn variant="outlined" rounded size="small">Cards</v-btn>
            </v-tab>
            <v-tab value="two">
              <v-btn variant="outlined" rounded size="small">Friends</v-btn>
            </v-tab>
            <v-tab value="three">
              <v-btn variant="outlined" rounded size="small">Messages</v-btn>
            </v-tab>
          </v-tabs>
          <v-tabs-window v-model="tab">
            <v-tabs-window-item value="one">
              cards
            </v-tabs-window-item>

            <v-tabs-window-item value="two">
              friends
            </v-tabs-window-item>

            <v-tabs-window-item value="three">
              <div>
                <v-card v-for="(item, index) in user.notification" class="pa-2 my-1" rounded="xl">
                  <div>
                    <v-icon size="x-small" class="my-0">mdi-message</v-icon>
                    <span style="font-size: 15px">{{index+1}}</span>
                  </div>
                  <div style="font-size: 18px">{{item.message}}</div>
                  <hr/>
                  <div class="d-flex justify-end" style="font-size: 10px">{{getSTDate(item.date)}}</div>
                </v-card>
              </div>
            </v-tabs-window-item>
          </v-tabs-window>
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>
<script setup>
import {ref} from "vue";
import axios from "axios";

const tab = ref(null);

function getSTDate(dateString){
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(date.getDate()).padStart(2, '0');

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const fetchUser = async (phone) => {
    try {
        const response = await fetch(`http://localhost:3001/api/userByPhone`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phone }),
        })
        const data = await response.json()
        user.value = data
    } catch (err) {
        console.error(err)
    }
}

onMounted(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const phone = urlParams.get('phone')
    if (phone) {
        fetchUser(phone)
    }
})
// myInfo({})
const user = ref(
    {
    "_id": "6663f9e71886bfbad7d06e6d",
    "chatId": 1047930758,
    "name": "Tυɾԃιყҽʋ",
    "userName": "Turdiyev07",
    "admin": true,
    "action": "lang",
    "status": true,
    "createDate": "2024-06-08T06:27:51.363Z",
    "__v": 0,
    "phone": "+998916384402",
    "lang": "",
    "notification": [
    {
    "message": "wkdsadkj asd asd asd",
    "date": "2024-07-17T17:26:08.388Z",
    "notif": false,
    "_id": "6697feb0009f5f89a37ad32a"
    },
    {
    "message": "asd as asd as dasd",
    "date": "2024-07-17T17:26:12.928Z",
    "notif": false,
    "_id": "6697feb4009f5f89a37ad331"
    },
    {
    "message": "asd as asd as dasd",
    "date": "2024-07-17T17:26:12.928Z",
    "notif": false,
    "_id": "6697feb4009f5f89a37ad331"
    },
    {
    "message": "asd as asd as dasd",
    "date": "2024-07-17T17:26:12.928Z",
    "notif": false,
    "_id": "6697feb4009f5f89a37ad331"
    },
    {
    "message": "asd as asd as dasd",
    "date": "2024-07-17T17:26:12.928Z",
    "notif": false,
    "_id": "6697feb4009f5f89a37ad331"
    },
    {
    "message": "asd as asd as dasd",
    "date": "2024-07-17T17:26:12.928Z",
    "notif": false,
    "_id": "6697feb4009f5f89a37ad331"
    },
    {
    "message": "asd as asd as dasd",
    "date": "2024-07-17T17:26:12.928Z",
    "notif": false,
    "_id": "6697feb4009f5f89a37ad331"
    },
    ]
    },
);
function getUser() {

}
</script>
<style scoped>
.block-class{
  margin: 5px 0;
  padding: 0 10px;
  background-color: #1c2331;
  color: cornsilk;
  border-radius: 15px;
}
</style>
