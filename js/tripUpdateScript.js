function getId() {
    const URLSearch = new URLSearchParams(location.search);
    return parseInt(URLSearch.get('id'));
}

// 사용자 여행 리뷰 수정
function update(reviewId) {
    let data = {
        title: $('#title').val(),
        place: $('#place').val(),
        review: $('#review').val(),
    }
    let review_img = $('#file')[0].files[0];
    let userReview = new FormData();

    userReview.append("review_data", new Blob([JSON.stringify(data)], {type: "application/json"}))
    userReview.append("review_img", review_img);

    $.ajax({
        type: "PUT",
        url: `https://api.kimkj.shop/reviews/${reviewId}`,
        contentType: false,
        processData: false,
        data: userReview,
        success: function (response) {
            alert("수정을 완료했습니다.")
            window.location.href = `../tripDetail.html?id=${reviewId}`;
        }
    })
}

function getItem() {
    $('.image-upload-wrap').hide();
    $('#img').attr('src', sessionStorage.getItem('file'));
    $('.file-upload-content').show();
    $("#title").val(sessionStorage.getItem("title"))
    $("#place").val(sessionStorage.getItem("place"))
    $("#review").val(sessionStorage.getItem("review"))
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