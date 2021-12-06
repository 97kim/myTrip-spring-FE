// 사용자 여행 리뷰 작성
function postUserReview() {
    let title = $('#title').val();
    let place = $('#place').val();
    let review = $('#review').val();

    if (title.replaceAll(" ", "") == "" || place.replaceAll(" ", "") == "") {
        return alert("제목과 장소는 필수로 입력해주세요")
    }

    let data = {
        title: title,
        place: place,
        review: review
    }

    let review_img = $('#file')[0].files[0];
    let userReview = new FormData();

    userReview.append("review_data", new Blob([JSON.stringify(data)], {type: "application/json"}))
    userReview.append("review_img", review_img);

    $.ajax({
        type: "POST",
        url: "http://localhost:8080/userReview",
        contentType: false,
        processData: false,
        data: userReview,
        success: function (response) {
            alert("완료!");
            window.location.href = '../templates/tripsList.html';
        }
    });
}

// 파일 업로더 js
function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}

$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});