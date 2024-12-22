const tipulyaOriginal = {
    name: "Yarik",
    banochkiRevo: 2
}

function increaseBanochki(tipulya) {
    const tipulyaMoreBanochki = Object.assign({}, tipulya)
    tipulyaMoreBanochki.banochkiRevo += 1
    tipulyaMoreBanochki.name = "Yaroslav"

    return tipulyaMoreBanochki
}

const tipulyaAfterMoreBanochki = increaseBanochki(tipulyaOriginal)

console.log(tipulyaOriginal)
console.log(tipulyaAfterMoreBanochki)