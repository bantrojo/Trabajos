let productsForm = document.getElementById('productsForm');

const handleSubmit = (evt, form, route) => {
    evt.preventDefault();
    let formData = new FormData(form);
    let obj = {};
    formData.forEach((value, key) => obj[key] = value);
    fetch(route, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json"
        }

    }).then(res => res.json()).then(json => console.log(json))
    form.reset();
}

productsForm.addEventListener('submit', (e) => handleSubmit(e, e.target, '/products'));