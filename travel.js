

const allSeatClass = document.getElementsByClassName('seats')
let count = 40;
let count2 = 0;
let selectedSeat = 0;
for (const seat of allSeatClass) {
    seat.addEventListener('click', function () {
        const allSeat = document.getElementById('all-seat');
        count = count - 1;
        allSeat.innerText = count;

        const seatCount = document.getElementById('seat-count');
        count2 = count2 + 1;
        seatCount.innerText = count2;

        seat.disabled = true;
        if (seat.disabled === true) {
            seat.style.backgroundColor = '#1DD100';
            seat.style.color = 'white';
        }

        if (selectedSeat < 4) {
            selectedSeat++;
        }
        disableOtherSeats();

        if (selectedSeat === 4) {
            selectedSeat = selectedSeat + 1;
            couponButton.disabled = false;

        }

        const seatName = seat.innerText
        console.log(seatName);
        const container = document.getElementById('seat-container');

        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h1');
        const h3 = document.createElement('h1');

        h1.classList.add('mr-24');
        h2.classList.add('mr-24');
        h3.classList.add('mr-24');
        div.classList.add('flex', 'justify-between');

        h1.innerText = seatName;
        h2.innerText = ('Economoy');
        h3.innerText = ('550');

        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(h3);

        container.appendChild(div);

        const busRent = document.getElementById('bus-rent').innerText;
        const convertBusRent = parseInt(busRent);
        const totalSeatRent = convertBusRent + 550;
        document.getElementById('bus-rent').innerText = totalSeatRent;

        const totalAmmount = document.getElementById('total-ammount');
        totalAmmount.innerText = totalSeatRent;
    }
    )
}


function disableOtherSeats() {
    let seatButtons = document.querySelectorAll('.seats');
    for (let i = 0; i < seatButtons.length; i++) {
        if (selectedSeat >= 4) {
            seatButtons[i].disabled = true;
        }
    }
}


let couponInput = document.getElementById('coupon-code');
let couponButton = document.getElementById('coupon');

couponButton.disabled = true;


couponButton.addEventListener('click', couponApply);

function couponApply() {
    if (couponInput.value === 'NEW15') {
        const busRent = document.getElementById('bus-rent').innerText;
        const convertBusRent = parseInt(busRent);
        const totalSeatRent = convertBusRent + 550;
        document.getElementById('bus-rent').innerText = totalSeatRent;
        const discountPrice = (totalSeatRent * 0.15);
        const totalDiscountPrice = totalSeatRent - discountPrice;

        const container = document.getElementById('discount');

        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h1');


        h1.classList.add('mr-24');
        h2.classList.add('mr-24');
        div.classList.add('flex', 'justify-between');

        h1.innerText = ('Discount');
        h2.innerText = discountPrice;


        div.appendChild(h1);
        div.appendChild(h2);

        container.appendChild(div);

        const totalAmmount = document.getElementById('total-ammount');
        totalAmmount.innerText = totalDiscountPrice;

        couponInput.remove();
        couponButton.remove();


    } else if (couponInput.value === 'Couple 20') {
        const busRent = document.getElementById('bus-rent').innerText;
        const convertBusRent = parseInt(busRent);
        const totalSeatRent = convertBusRent + 550;
        document.getElementById('bus-rent').innerText = totalSeatRent;
        const discountPrice2 = (totalSeatRent * 0.2);
        const totalDiscountPrice2 = totalSeatRent - discountPrice2;

        const container = document.getElementById('discount');

        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h1');


        h1.classList.add('mr-24');
        h2.classList.add('mr-24');
        div.classList.add('flex', 'justify-between');

        h1.innerText = ('Discount');
        h2.innerText = discountPrice2;


        div.appendChild(h1);
        div.appendChild(h2);

        container.appendChild(div);

        const totalAmmount = document.getElementById('total-ammount');
        totalAmmount.innerText = totalDiscountPrice2;

        
        couponInput.remove();
        couponButton.remove();

    } else {
        alert("Please enter right coupon code");
    }

}


let numberInput = document.getElementById('number-input');
let numberButton = document.getElementById('bookbutton');

numberButton.disabled = true;
numberInput.addEventListener('input', nextButton);

function nextButton() {
    if (numberInput.value.length > 0) {
        numberButton.disabled = false;
    } else {
        numberButton.disabled = true;

    }
}


