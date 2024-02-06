like_count = localStorage.getItem("likes");

if (!like_count) {
    localStorage.setItem("likes", 0);
    like_count = 0;
}

document.getElementById("like_count").innerText = like_count;
like_check = document.getElementById("like_check");

if (localStorage.getItem("isLiked") == null) {
    console.log("T");
    localStorage.setItem("isLiked", false);
} else if (localStorage.getItem("isLiked") == "true") {
    console.log("t");
    like_check.checked = true;
}

function updateLikeCount() {
    if (like_check.checked == true) {
        like_count ++;
    } else {
        like_count --;
    }

    document.getElementById("like_count").innerText = like_count;
    localStorage.setItem("isLiked", like_check.checked);
    localStorage.setItem("likes", like_count);
}