function validate() {
    const pan = document.getElementById('text').value;
    const pattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (pattern.test(pan)) {
        alert("Valid PAN Card");
        return true;
    } else {
        alert("Invalid PAN Card");
        return false;
    }
}
