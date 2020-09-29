async function compute() {
    const base = document.getElementById('base-number').value;
    const exponent = document.getElementById('exponent-number').value;

    const response = await fetch(new Request('users'))
    console.log('response', response);
    const result = await response.text();
    console.log('result', result);
    document.getElementById('result-number').innerText = JSON.stringify(result);
}