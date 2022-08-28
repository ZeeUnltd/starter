
const startApp = async () => {
    const list = await fetch('https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84')
    .then(
        result => result.json()
    )
    console.log({list});
};

const fetchList = async ( page) => {
    const list = await fetch('https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84')
    .then(
        result => result.json()
    )
    return {list, page}
}

export function laodNext () {
    console.log('isLoading');
    return 'done '
}
document.addEventListener('DOMContentLoaded', startApp);