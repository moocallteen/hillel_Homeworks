const tipulyaOriginal = {
    name: "Yarik",
    banochkiRevo: 2
}

function increaseBanochki(tipulya) {
    tipulya.banochkiRevo += 1
    return tipulya 
}

increaseBanochki(tipulyaOriginal)
console.log(tipulyaOriginal.banochkiRevo)