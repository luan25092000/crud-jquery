var student = JSON.parse(localStorage.getItem('student'))[0];
$('#name').val(student.name);
$('#gender').val(student.gender);
$('#email').val(student.email);
$('#birthday').val(student.birthday);
$('#className').val(student.className);

$('#updateStudent').click(function() {
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

    if (localStorage.getItem('students') != undefined && localStorage.getItem('students') != null) { // nếu như đã có mảng students trc đó rùi
        var students = JSON.parse(localStorage.getItem('students'));
        for (var x in students) {
            if (students[x].email == student.email) {
                students[x].name = name;
                students[x].gender = gender;
                students[x].email = email;
                students[x].birthday = birthday;
                students[x].className = className;
            }
        }
    }

    localStorage.setItem('students', JSON.stringify(students));
    alert('Cập nhật thành công');
    window.location.href = 'index.html';
});
