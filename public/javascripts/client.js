async function compute() {
    const base = document.getElementById('base-number').value;
    const exponent = document.getElementById('exponent-number').value;

    document.getElementsByClassName('sk-cube-grid')[0].style.display = 'block';
    document.getElementById('result-number').innerText = 0;
    document.getElementById('result-number').style.display = 'none';
    document.getElementById('result-size').innerText = 0;
    document.getElementById('result-time').innerText = 0;

    const response = await fetch(new Request('compute', {
        body: JSON.stringify({
            base,
            exponent
        }),
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }));

    document.getElementsByClassName('sk-cube-grid')[0].style.display = 'none';
    const json = await response.json();
    document.getElementById('result-number').innerText = json.result;
    document.getElementById('result-number').style.display = 'block';
    document.getElementById('result-size').innerText = json.result.length;
    document.getElementById('result-time').innerText = `~ ${Math.floor(parseInt(json.time, 10) / 1000)}sec`;
}