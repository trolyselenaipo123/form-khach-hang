// Xử lý chuyển tab
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'none';
    });
    document.getElementById(tabName).style.display = 'block';

    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Xử lý form khi submit
function handleFormSubmit(event) {
    event.preventDefault(); // Ngăn chặn reload trang

    let formData = new FormData(event.target);
    let data = {};
    formData.forEach((value, key) => {
        if (!data[key]) {
            data[key] = value;
        } else {
            if (!Array.isArray(data[key])) {
                data[key] = [data[key]];
            }
            data[key].push(value);
        }
    });

    console.log("Dữ liệu nhập:", data);
    alert("Thông tin đã được gửi! (Kiểm tra console để xem dữ liệu)");
}
