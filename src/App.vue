<script setup>
import { ref } from 'vue'
</script>

<template>

<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-light">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4" style="color: rgb(62, 62, 62);">ระบบจองโต๊ะสถานบันเทิง</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item" ><a href="https://www.facebook.com/profile.php?id=100023225255408&locale=th_TH" target="_blank" class="nav-link active" aria-current="page">Facebook</a></li>
      </ul>
</header>
<body>
  <div class="container">

    <div class="card" style="width: 35rem;">
      <img src="./assets/bang_kwang.jpeg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Bangkwang ca'fe</h5>
        <p class="card-text">ร้านตกแต่งจำลองร้านเป็นคุกบางขวาง บรรยากาศดี ชิลล์ๆ ดนตรีสดเล่นเพราะ มีโซนด้านนอกด้านใน แบบ open air เหมาะกับการไปดื่มไปนั่งชิวเป็นกลุ่มกับเพื่อน</p>
        <p>เวลาเปิด-ปิด : 17:00 – 0:00 น.</p>
        <p>พิกัด : ถ.เลียบคลองชลประทาน สุเทพ</p>
        <div class="row">
          <div class="mb-3">
            <label for="table" class="form-label">จำนวนโต๊ะ</label>
            <input id="Bangkwang" type="number" min="0" class="form-control" placeholder="จำนวนโต๊ะ" aria-describedby="tableip">
          </div>
        </div>
      </div>
    </div>

    <div class="card" style="width: 35rem;">
      <img src="./assets/Beer-Lab.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Beer Lab</h5>
        <p class="card-text">ที่นี่มีเบียร์ให้เลือกดื่มเยอะมาก ๆ ไม่ว่าจะเป็นเบียร์ Craft หรือ Cocktail ก็มีให้เลือกดื่ม บอกไว้ก่อนเลยว่าเบียร์ที่นี่แก้วใหญ่มาก ดื่มแก้วเดียวอยู่ได้ทั้งคืน บรรยากาศดี มีอาหารเสิร์ฟตลอดทั้งคืน</p>
        <p>เวลาเปิด-ปิด : 17:00 – 00:00 น.</p>
        <p>พิกัด : ใกล้ๆกับปากซอยนิมมาน 12</p>
        <div class="row">
          <div class="mb-3">
            <label for="table" class="form-label">จำนวนโต๊ะ</label>
            <input id="BeerLab" type="number" min="0" class="form-control" placeholder="จำนวนโต๊ะ" aria-describedby="tableip">
          </div>
        </div>
      </div>
    </div>

    <div class="card" style="width: 35rem;">
      <img src="./assets/Warmupcafe-01-1536x1025.jpeg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Warm up cafe</h5>
          <p class="card-text">เป็นร้านใหญ่ของเชียงใหม่ มีทั้งโซนผับ โซนดนตรีสด และยังมีโซนให้นั่งทางอาหาร</p>
          <p>เวลาเปิด-ปิด : 18:00 – 00:00 น.</p>
          <p>พิกัด : ถนนนิมมานเหมินท์</p>
          <div class="row">
            <div class="mb-3">
            <label for="table" class="form-label">จำนวนโต๊ะ</label>
            <input id="Warmup" type="number" min="0" class="form-control" placeholder="จำนวนโต๊ะ" aria-describedby="tableip">
          </div>
          </div> 
      </div>
    </div>

    <div class="card" style="width: 35rem;">
      <img src="./assets/Hom_bar.jpeg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Hom Bar Chiang Mai</h5>
        <p class="card-text">ร้านนี้มีดนตรีสดให้ฟังยันเที่ยงคืน มีบัคเก็ตที่ต้องบอกเลยว่า “กิ๋นง่าย เมาง่าว” มีพื้นที่กว้างขวางที่สามารถเต้นได้แบบไม่ต้องเกรงใจโต๊ะข้าง ๆ</p>
        <p>เวลาเปิด-ปิด : 17:00 – 0:00 น.</p>
        <p>พิกัด : ตลาดคำเที่ยง</p>
        <div class="row">
          <div class="mb-3">
            <label for="table" class="form-label">จำนวนโต๊ะ</label>
            <input id="HomBar" type="number" min="0" class="form-control" placeholder="จำนวนโต๊ะ" aria-describedby="tableip">
          </div>
        </div>
      </div>
    </div>

    <div class="bookingtableshowcon">
      <div class="bookingtableshow">
          <div class="confirmButtoncon">
            <button id="confirmButton" class="btn btn-success" @click="confirmBooking">รายการที่เลือกไว้</button>
          </div>
          <div>
      
    <div v-if="showTable">
      <br>
      <h4 style="text-align: center;">รายการโต๊ะ</h4>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ร้าน</th>
          <th scope="col">จำนวนโต๊ะ</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(booking, index) in tableBooking" :key="index">
            <td>{{ Object.keys(booking)[0] }}</td>
            <td>{{ Object.values(booking)[0] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
      </div>
  </div>
   
            <div class="formconcon">
              <div class="formcon">
                <form action="" @submit="handleSubmit">
                  <h5>รายละเอียดผู้จอง</h5>
                  <div class="mb-3">
                    <label for="table" class="form-label">ชื่อผู้จอง</label>
                    <input id="name" type="text" class="form-control" placeholder="ชื่อ" aria-label="Username" aria-describedby="basic-addon1" required="">
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="mb-3">
                    <label for="table" class="form-label">เบอร์โทรศัพท์</label>
                    <input id="number" class="form-control" type="text" pattern="[0-9]{10}" maxlength="10" placeholder="เบอร์โทรศัพท์" aria-label="tel" aria-describedby="basic-addon1" required="">
                  </div>
                    </div>
                    <div class="col">
                      <div class="mb-3">
                    <label for="table" class="form-label">วันที่และเวลา</label>
                    <input id="datetime" min="2023-09-15T22:28" type="datetime-local" class="form-control" aria-label="Datetime" aria-describedby="basic-addon1" required="">
                  </div>
                        
            </div>
        </div>
        <button type="submit" class="btn btn-primary" style="color: black font-size: 20px;">ยืนยันการจองโต๊ะ</button>
        </form>
          <div class="bookingdatashow" v-if="bookingdatashowVisible">
            <div class="bookingdatashowsub">
            <h4>จองสำเร็จ</h4>
            <p>ชื่อ : {{name }}</p>
            <p>เบอร์โทรศัพท์ : {{ number}}</p>
            <p>วันที่และเวลา : {{ datetime }}</p>
            <p>รายการจอง</p>
            <div class="tabledata">
            <p v-for="(booking, index) in tableBooking" :key="index">
              ร้าน {{ Object.keys(booking)[0] }} : {{ Object.values(booking)[0] }} โต๊ะ
            </p>  
            </div>
          </div>
        </div>
        </div>
        </div>

  </div>
  </body>

<footer>
</footer>

</template>

<script>

export default {
  data() {
    return {
      tableBooking: [],
      showTable: false, 
      bookingdatashowVisible: false, 
    };
  },
  methods: {
  confirmBooking() {
    this.tableBooking = []; 

    const bangkwangCount = document.getElementById('Bangkwang').value;
    const beerLabCount = document.getElementById('BeerLab').value;
    const warmupCount = document.getElementById('Warmup').value;
    const homBarCount = document.getElementById('HomBar').value;

    if (parseInt(bangkwangCount) > 0) {
      this.tableBooking.push({ 'Bangkwang ca\'fe': parseInt(bangkwangCount) });
    }
    if (parseInt(beerLabCount) > 0) {
      this.tableBooking.push({ 'Beer Lab': parseInt(beerLabCount) });
    }
    if (parseInt(warmupCount) > 0) {
      this.tableBooking.push({ 'Warm up cafe': parseInt(warmupCount) });
    }
    if (parseInt(homBarCount) > 0) {
      this.tableBooking.push({ 'Hom Bar Chiang Mai': parseInt(homBarCount) });
    }
    this.showTable = true;
  },
  handleSubmit(event) {
      event.preventDefault(); 

      this.name = document.getElementById('name').value;
      this.number = document.getElementById('number').value;
      this.datetime = document.getElementById('datetime').value;

      this.bookingdatashowVisible = true;
    },
  },
};



</script>

<style scoped>
.container{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px; 
  margin-top: 50px;
  transform: translateX(70px);
}
.card {
  width: 50%;
  height: auto;
  padding: 15px; 
  background-color: #ffffff; 
}

.btn btn-primary{
  margin-block-start: 60px;
}

button.btn-warning {
  background-color: #7cb342; 
  border: none; 
}

#basic-addon1 {
  border-color: #f2eddd; 
  background-color: antiquewhite;

}

.bookingtableshowcon{
  border:hidden;
}
.bookingtableshow{
  display: flexbox;
  background-color: white;
  border-radius: 10px;
  width: 88%;
  padding-top:1% ;
  padding-bottom: 1%;

}

.confirmButtoncon{
  margin: auto;
  width: 30%;
}

#confirmButton{
  width: 100%;
  
}

.formconcon{
  width: 88%;
  background-color: rgb(53, 53, 53);
  border-radius: 10px;
  margin-bottom: 3%;
}

.formcon{
  margin: 3%;

}

.table{
text-align: center;
}

.bookingdatashow{
  background-color: #24ce7e;
  display: flexbox;
  width: 80%;
  margin: auto;
  margin-top: 2%;
  padding-top: 2%;
  padding-bottom:2% ;
  border-radius: 10px;
}

.bookingdatashowsub{
  width: 90%;
  margin: auto;
  
  
}

</style>
