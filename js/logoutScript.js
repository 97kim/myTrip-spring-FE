function logoutScript() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    alert('로그아웃을 완료했습니다.');
    window.location.href = '../index.html';
}

function deleteUser() {
    if (localStorage.getItem('token')) {
        if (confirm("회원 탈퇴하시겠습니까? 탈퇴하시면 그 동안 작성했던 리뷰, 좋아요 등이 삭제됩니다.") === true) {
            $.ajax({
                type: "DELETE",
                url: "https://api.mytrips.shop/user",
                data: {},
                success: function (response) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('username');
                    alert("회원 탈퇴가 완료되었습니다.")
                    window.location.href = '../index.html';
                }
            });
        }
    } else {
        alert('로그인이 필요한 서비스입니다.');
    }
}