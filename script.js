const timeEl = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
    timeEl.textContent = `Current Time: ${Date.now()}`
}
updateTime();

setInterval(updateTime, 1000);

const avatar = document.querySelector('[data-testid="test-user-avatar"]');
const avatarUpload = document.getElementById("avartarUpload");

avatarUpload.addEventListener("change", () => {
    const file = avatarUpload.file[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            avatar.src = e.target.result
        };
        reader.readAsDataURL(file)
    }
});
