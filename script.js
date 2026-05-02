const timeEl = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
    timeEl.textContent = `Current Time: ${Date.now()}`
}
updateTime();

setInterval(updateTime, 1000);

const avatar = document.getElementById('myAvartar');
const avatarUpload = document.getElementById("avartarUpload");


avatarUpload.addEventListener("change", () => {
    const file = avatarUpload.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            avatar.src = e.target.result
        };
        reader.readAsDataURL(file);
    }
});
