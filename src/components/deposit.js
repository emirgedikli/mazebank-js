depositBtn.addEventListener('click', () => {
    const value = depositInput.value;
    const depositValue = Number(deposit.innerText) + Number(value);
    const balanceValue = Number(balance.innerText) + Number(value);
    deposit.innerText = depositValue;
    balance.innerText = balanceValue;
    depositInput.value = '';
})
