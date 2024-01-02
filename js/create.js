$(document).ready(function() {
    $('#createStudent').click(function() {
        var name = $('#name').val();
        var gender = $('#gender').val();
        var email = $('#email').val();
        var birthday = $('#birthday').val();
        var className = $('#className').val();

        if (!name) {
            alert('Vui lòng nhập họ tên');
            return;
        }

        if (!gender) {
            alert('Vui lòng chọn giới tính');
            return;
        }

        if (!email) {
            alert('Vui lòng nhập email');
            return;
        }

        if (!birthday) {
            alert('Vui lòng nhập ngày sinh');
            return;
        }

        if (!className) {
            alert('Vui lòng nhập lớp');
            return;
        }

        var student = {
            'name': name,
            'gender': gender,
            'email': email,
            'birthday': birthday,
            'className': className  
        };

        if (localStorage.getItem('students') != undefined && localStorage.getItem('students') != null) { // nếu như đã có mảng students trc đó rùi
            var students = JSON.parse(localStorage.getItem('students'));
            var checkExistEmail = students.filter(function(obj) {
                return obj.email == student.email
            });

            if (checkExistEmail.length > 0) {
                alert('Email đã tồn tại!');
                return;
            }
        } else {
            var students = [];
        }

        students.push(student);

        localStorage.setItem('students', JSON.stringify(students));
        alert('Thêm thành công');
        window.location.href = 'index.html';
    });
});