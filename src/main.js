import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

// รับอ้างอิงไปยังองค์ประกอบใน HTML
const counterElement = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");

// กำหนดค่าเริ่มต้นของตัวแปรนับ
let counterValue = 0;

// ฟังก์ชันเพิ่มค่า
function increaseCounter() {
  counterValue++;
  counterElement.textContent = counterValue;
}

// ฟังก์ชันลดค่า
function decreaseCounter() {
  counterValue--;
  counterElement.textContent = counterValue;
}

// เพิ่มการดักฟังก์ชันการคลิกและเชื่อมโยงไปยังฟังก์ชันที่เพิ่มและลดค่า
incrementBtn.addEventListener("click", increaseCounter);
decrementBtn.addEventListener("click", decreaseCounter);
