if (localStorage.getItem('students') != undefined && localStorage.getItem('students') != null) {
    var students = JSON.parse(localStorage.getItem('students'));
} else {
    var students = [];
}

if (students.length > 0) {
    var html = '';
    for (var student of students) {
        if (student.gender == "male") {
            var gender = "Nam";
        } else if (student.gender == "female") {
            var gender = "Nữ";
        } else {
            var gender = "Khác";
        }

        html += `
            <tr>
                <td>${student.name}</td>
                <td>${gender}</td>
                <td>${student.email}</td>
                <td>${student.birthday}</td>
                <td>${student.className}</td>
                <td align="center">
                    <i class="fa-solid fa-pen-to-square text-primary mr-2" onclick="editStudent('${student.email}')" style="cursor: pointer;"></i>
                    <i class="fa-solid fa-trash-can text-danger" onclick="deleteStudent('${student.email}')" style="cursor: pointer;"></i>
                </td>
            </tr>
        `;
    }
} else {
    var html = `
        <tr align="center">
            <td colspan="6">Hiện không có thông tin học sinh nào</td>;
        </tr>
    `;
}


$('#students').html(html);

function deleteStudent(email) {
    var isConfirm = confirm("Bạn có muốn xóa học sinh này ?");
    if (isConfirm) {
        var newStudents = students.filter(function(obj) {
            return obj.email != email
        });
        localStorage.setItem('students', JSON.stringify(newStudents));
        alert('Xóa thành công');
        window.location.href = 'index.html';
    }
}

function editStudent(email) {
    var student = students.filter(function(obj) {
        return obj.email == email
    });
    localStorage.setItem('student', JSON.stringify(student));
    window.location.href = 'update.html';
}

$('#searchBtn').click(function () {
    var key = $('#searchInput').val();
    var studentsSearchResult = students.filter(function(obj) {
        if (obj.gender == "male") {
            obj.formatGender = "Nam";
        } else if (obj.gender == "female") {
            obj.formatGender = "Nữ";
        } else {
            obj.formatGender = "Khác";
        }

        return obj.birthday.indexOf(key) != -1 
        ||  obj.className.indexOf(key) != -1
        || obj.email.indexOf(key) != -1
        || obj.formatGender.indexOf(key) != -1
        || obj.name.indexOf(key) != -1; // tìm ra được dữ liệu chứ từ khóa đó
    });

    if (studentsSearchResult.length > 0) {
        var html = '';
        for (var student of studentsSearchResult) {
            if (student.gender == "male") {
                var gender = "Nam";
            } else if (student.gender == "female") {
                var gender = "Nữ";
            } else {
                var gender = "Khác";
            }
    
            html += `
                <tr>
                    <td>${student.name}</td>
                    <td>${gender}</td>
                    <td>${student.email}</td>
                    <td>${student.birthday}</td>
                    <td>${student.className}</td>
                    <td align="center">
                        <i class="fa-solid fa-pen-to-square text-primary mr-2" onclick="editStudent('${student.email}')" style="cursor: pointer;"></i>
                        <i class="fa-solid fa-trash-can text-danger" onclick="deleteStudent('${student.email}')" style="cursor: pointer;"></i>
                    </td>
                </tr>
            `;
        }
    } else {
        var html = `
            <tr align="center">
                <td colspan="6">Hiện không có thông tin học sinh nào</td>;
            </tr>
        `;
    }
    
    
    $('#students').html(html);
});
