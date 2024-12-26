const calEven = (number) => {
    // สร้าง array keeper สำหรับเก็บเลขคู่
    const keeper = [];
    
    // วน loop for เพื่อหาตัวเลขคู่
    for (let i = 0; i < number.length; i++) {
      if (number[i] % 2 === 0) { // ตรวจสอบว่าเป็นเลขคู่
        keeper.push(number[i]); // เพิ่มเลขคู่ใน array keeper
      }
    }
  
    // คืนค่า array keeper ออกจาก function
    return keeper;
  };
  
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // เรียกใช้งาน function และแสดงผลลัพธ์
  console.log(calEven(number)); // Output: [2, 4, 6, 8, 10]
  




//   <!-- <!DOCTYPE html>
// <html>
// <body>

// <script>
//   const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
//   function calEven(number) {
//     // สร้าง array ว่างเพื่อเก็บค่าที่เป็นเลขคู่
//     const keeper = [];

//     // วนลูปผ่านทุกค่าใน array
//     for (let i = 0; i < number.length; i++) {
//       // ตรวจสอบว่าค่านั้นเป็นเลขคู่หรือไม่
//       if (number[i] % 2 === 0) {
//         keeper.push(number[i]); // ถ้าเป็นเลขคู่ให้เก็บใน keeper
//       }
//     }

//     // return array keeper ออกจาก function
//     return keeper;
//   }


//   const result = calEven(number);
//   document.write("เลขคู่ในอาร์เรย์คือ: " + result.join(", "));
//   console.log(result); 
// </script>

// </body>
// </html> -->
