let cart = [];
let totalPrice = 0;

const toRupiah = (number) => {
    let rupiah = '';
    const numberStr = number.toString();
    const numberStrRev = numberStr.split('').reverse().join('');
    for (let i = 0; i < numberStrRev.length; i++) {
        if (i % 3 === 0) {
            rupiah += numberStrRev[i] + '.';
        } else {
            rupiah += numberStrRev[i];
        }
    }
    const rupiahRev = rupiah.split('').reverse().join('');
    return 'Rp. ' + rupiahRev.substring(0, rupiahRev.length - 1);
}

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
