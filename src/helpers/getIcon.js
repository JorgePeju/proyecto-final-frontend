

export const getIcon = (icon) => {

    let url = '';

    switch (icon) {

        case 'Dungeon':

            url = 'https://objmap.zeldamods.org/icons/mapicon_dungeon.svg';
            break;

        case 'Tower':

            url = 'https://objmap.zeldamods.org/icons/mapicon_tower.svg';
            break;
        default:

            throw new Error('Variable de entorno no definida');
    }

    return url;

}


