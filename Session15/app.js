// Storage
// LocalStorage
// Là một đối tượng để lưu trữ dữ liệu, không bị mất dữ liệu khi F5 hoặc tắt trình duyệt
// 1. Các phương thức làm việc với localStorage
// 1.1 setItem (thêm dữ liệu vào localStorage)
localStorage.setItem("name", "Nguyễn Văn A");
localStorage.setItem("age", 16);
localStorage.setItem("name", "Nguyễn Thị B"); //ghi đè value của key name
// localStorage.setItem("student");=> lỗi vì thiếu mất đối số value
// localStorage.setItem("students", { name: "nguyễn xuân bách" });// [object object]
// 1.2 getItem (lấy dữ liệu từ localStorage)
console.log(localStorage.getItem("name")); //string
console.log(localStorage.getItem("age")); //string
// 1.3 removeItem (xóa dữ liệu trong localStorage)
localStorage.removeItem("students");
// 1.4 clear (xóa toàn bộ dữ liệu trong localStorage)
localStorage.clear();
console.log("Sau khi xóa", localStorage.getItem("name"));
// 2. Chuyển đổi kiểu dữ liệu (JSON.stringify và JSON.parse)
let students = [
  { id: 1, name: "Nguyễn Văn A", age: 20 },
  { id: 2, name: "Nguyễn Thị B", age: 25 },
];
// Thêm dữ liệu students vào trong localStorage
// Sử dụng JSON.stringify chuyển đổi [object Object] => string
localStorage.setItem("students", JSON.stringify(students));

// Lấy dữ liệu students từ trong localStorage
// console.log(typeof localStorage.getItem("students")); //string
// Sử dụng JSON.parse chuyển đổi string => [object Object]
console.log(JSON.parse(localStorage.getItem("students")));

// SessionStorage
// Là một đối tượng để lưu trữ dữ liệu, sẽ bị mất khi kết thúc phiên làm việc (tắt trình duyệt)
// Cookie
