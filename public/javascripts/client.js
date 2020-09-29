async function compute() {
    const base = document.getElementById('base-number').value;
    const exponent = document.getElementById('exponent-number').value;

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
    console.log('response', response);
    const json = await response.json();
    console.log('result', json);
    document.getElementById('result-number').innerText = json.result;
    document.getElementById('result-size').innerText = json.result.length;
    document.getElementById('result-time').innerText = `~ ${Math.floor(parseInt(json.time, 10) / 1000)}sec`;
}